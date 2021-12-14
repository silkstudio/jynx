// Types
import type { CSSProperties } from '../types/css'
import type { BaseExtensibleObject, BaseTheme, ResponsiveStyle, RequiredTheme } from '../types'

// Utils
import { addUnitIfNeeded, getValue } from '../utils'
import { parseResponsiveObject } from './parseResponsiveObject'
import { parseResponsiveArray } from './parseResponsiveArray'
import { isResponsiveObject, isResponsiveStyle } from '../types/guards'

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
 * @param {BaseTheme} theme
 * @param {(K: typeof values) => void} transform
 *
 * @returns {FlattenSimpleInterpolation}
 *
 * @since 1.0.0
 * @public
 */

/*








*/

const parser = <P extends keyof CSSProperties, C extends CSSProperties[P], T extends BaseTheme = RequiredTheme>({
  property,
  values,
  theme,
  scale,
  transform
}: {
  property: P
  values: C | ResponsiveStyle<C>
  theme: T
  scale?: keyof T
  transform?: (K: typeof values) => typeof K
}): BaseExtensibleObject => {
  const result: BaseExtensibleObject = {}
  const styles = transform ? transform(values) : values

  if (!property || !values || !theme || !styles) {
    return result
  }

  if (!isResponsiveStyle<C>(styles)) {
    result[property] = addUnitIfNeeded(property, getValue(styles, scale && theme[scale]))
  }

  const parsed = isResponsiveStyle<C>(styles)
    ? isResponsiveObject<C>(styles)
      ? parseResponsiveObject(property, styles, theme, scale)
      : parseResponsiveArray(property, styles, theme, scale)
    : {}

  Object.entries(parsed).forEach(([key, value]) => (result[key] = value))

  return result
}

export { parser }
