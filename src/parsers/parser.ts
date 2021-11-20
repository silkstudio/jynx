import { CSSProperties as CSS, css, FlattenSimpleInterpolation } from 'styled-components'

// Types
import { Breakpoint, DefaultTheme, ResponsiveStyle } from '../types'
import { isResponsiveArray, isResponsiveObject, isResponsiveStyle } from '../types/guards'

// Utils
import kebabCase from 'lodash.kebabcase'
import { createMediaQuery, sortStyles } from '../utils'

/**
 * Parser function that takes in either a single style or ResponsiveStyle and
 * returns a styled-copmonents-compatible {@link FlattenSimpleInterpolation}
 *
 * @template P extends keyof CSSProperties
 * @template C extends CSSProperties[P]
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

const parser = <P extends keyof CSS, C extends CSS[P]>(
  property: P,
  values: C | ResponsiveStyle<C>,
  theme: DefaultTheme,
  transform?: (K: typeof values) => typeof K
): Record<string, any> => {
  /*
   [1]. If values is not a ResponsiveStyle, simply push plain style to `result` and return that
   [2]. If values is a ResponsiveObject, parse it and push each style to `result` with a breakpoint (and in order)
   [3]. If values is a ResponsiveArray, parse it and push each style to `result` with a breakpoint (and in order)
   */

  const result: Record<string, any> = {}
  const transformedValues = transform ? transform(values) : values

  // [1]
  if (!isResponsiveStyle<C>(transformedValues)) {
    result[property] = transformedValues
  }

  // [2]
  if (isResponsiveObject<C>(transformedValues)) {
    const { breakpoints } = theme
    const { _: base, ...responsive } = transformedValues
    const parsed: Record<string, any> = {}

    result[property] = base

    Object.entries(responsive).forEach(([bp, value]) => {
      const media = createMediaQuery(`${breakpoints[bp as Breakpoint]}`)
      parsed[media] = { [property]: value }
    })

    Object.entries(sortStyles(parsed)).forEach(([media, value]) => (result[media] = value))
  }

  // [3]
  if (isResponsiveArray<C>(transformedValues)) {
    const breakpoints = Object.values(theme.breakpoints)
    const [base, ...responsive] = transformedValues
    const parsed: Record<string, any> = {}

    result[property] = base

    responsive.forEach((value, index) => {
      if (value === null) return

      const media = createMediaQuery(`${breakpoints[index]}`)
      parsed[media] = { [property]: value }
    })

    Object.entries(sortStyles(parsed)).forEach(([media, value]) => (result[media] = value))
  }

  return result
}

export { parser }
