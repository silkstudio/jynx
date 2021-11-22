import { CSSProperties as CSS } from 'styled-components'

// Types
import { DefaultTheme, ResponsiveStyle } from '../types'
import { isResponsiveObject, isResponsiveStyle } from '../types/guards'

// Utils
import { themeGet } from '../utils'
import { parseResponsiveObject } from './parseResponsiveObject'
import { parseResponsiveArray } from './parseResponsiveArray'

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
  const result: Record<string, any> = {}
  const styles = transform ? transform(values) : values
  const defaultScale = scale && theme[scale]

  if (!styles) return result

  if (!isResponsiveStyle<C>(styles)) {
    result[property] = themeGet(property, styles, defaultScale)
  }

  const parsed =
    isResponsiveStyle<C>(styles) &&
    (isResponsiveObject<C>(styles)
      ? parseResponsiveObject(property, styles, theme, defaultScale)
      : parseResponsiveArray(property, styles, theme, defaultScale))

  Object.entries(parsed).forEach(([key, value]) => (result[key] = value))

  return result
}

export { parser }
