import { CSSProperties as CSS } from 'styled-components'

// Types
import { Breakpoint, DefaultTheme, ResponsiveStyle } from '../types'
import { isResponsiveArray, isResponsiveObject, isResponsiveStyle } from '../types/guards'

// Utils
import { createMediaQuery, sort, get } from '../utils'

/**
 * Parser function that takes in either a single style or ResponsiveStyle and
 * returns a styled-copmonents-compatible {@link FlattenSimpleInterpolation}
 *
 * @template P extends keyof CSSProperties
 * @template C extends CSSProperties[P]
 * @template T extends {@link DefaultTheme}
 *
 * @param {P} property
 * @param {C | ResponsiveStyle<C>} values
 * @param {DefaultTheme} theme
 * @param {(K: typeof values) => void} transform
 *
 * @returns {FlattenSimpleInterpolation}
 *
 * @since 1.0.0
 * @public
 */

/*








*/

const parser = <P extends keyof CSS, C extends CSS[P], T extends DefaultTheme>(
  property: P,
  values: C | ResponsiveStyle<C>,
  theme: T,
  scale?: keyof T,
  transform?: (K: typeof values) => typeof K
): Record<string, any> => {
  /*
   [1]. If values is not a ResponsiveStyle, simply push plain style to `result` and return that
   [2]. If values is a ResponsiveObject, parse it and push each style to `result` with a breakpoint (and in order)
   [3]. If values is a ResponsiveArray, parse it and push each style to `result` with a breakpoint (and in order)
   */

  const result: Record<string, any> = {}
  const styles = transform ? transform(values) : values
  const defaultScale = scale && theme[scale]
  const scaleGet = (path?: string | number): string | number | undefined => (path ? get(defaultScale, path, path) || path : path)

  if (!styles) return result

  // [1]
  if (!isResponsiveStyle<C>(styles)) {
    result[property] = scaleGet(styles)
  }

  // [2]
  if (isResponsiveObject<C>(styles)) {
    const { breakpoints } = theme
    const { _: base, ...responsive } = styles
    const parsed: Record<string, any> = {}

    result[property] = scaleGet(base)

    Object.entries(responsive).forEach(([bp, value]) => {
      const media = createMediaQuery(`${breakpoints[bp as Breakpoint]}`)
      parsed[media] = { [property]: scaleGet(value) }
    })

    Object.entries(sort(parsed)).forEach(([media, value]) => (result[media] = value))
  }

  // [3]
  if (isResponsiveArray<C>(styles)) {
    const breakpoints = Object.values(theme.breakpoints)
    const [base, ...responsive] = styles
    const parsed: Record<string, any> = {}

    result[property] = scaleGet(base)

    responsive.forEach((value, index) => {
      if (value === null) return

      const media = createMediaQuery(`${breakpoints[index]}`)
      parsed[media] = { [property]: scaleGet(value) }
    })

    Object.entries(sort(parsed)).forEach(([media, value]) => (result[media] = value))
  }

  return result
}

export { parser }
