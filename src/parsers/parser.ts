// Types
import type { CSSObject, CSSProperties } from '../types/css'
import type { DefaultTheme } from '../types/theme'
import type { ResponsiveStyle } from '../types/responsive'
import type { TransformFunction } from '../types/functions'

// Utils
import { addUnitIfNeeded, getValue } from '../utils'
import { parseResponsiveObject } from './parseResponsiveObject'
import { parseResponsiveArray } from './parseResponsiveArray'
import { isResponsiveArray, isResponsiveObject, isResponsiveStyle } from '../types/guards'

// Interfaces
interface Props<P extends keyof CSSProperties> {
  property: P
  values: CSSProperties[P] | ResponsiveStyle<CSSProperties[P]>
  theme: DefaultTheme
  scale?: keyof DefaultTheme
  transformer?: TransformFunction<CSSProperties[P]>
}

/**
 * Parser function that takes in a {@link ResponsiveStyle} and returns a {@link CSSObject}
 *
 * @template P extends keyof CSSProperties
 *
 * @param {P} property
 * @param {C | ResponsiveStyle<C>} values
 * @param {DefaultTheme} theme
 * @param {keyof DefaultTheme} scale
 * @param {TransformFunction<CSSProperties[P]>} transformer
 *
 * @returns {FlattenSimpleInterpolation}
 *
 * @since 1.0.0
 * @public
 */

/*








*/

const parser = <P extends keyof CSSProperties>({ property, values, theme, scale, transformer = getValue }: Props<P>): CSSObject => {
  const result: CSSObject = {}

  // If required props don't exist, return empty object
  if (!property || !values || !theme) {
    return result
  }

  // If values is not responsive (i.e. string | number), add single rule to result object
  if (!isResponsiveStyle<CSSProperties[P]>(values)) {
    Object.assign(result, { [property]: addUnitIfNeeded(property, transformer(values, scale && theme[scale])) })
  }

  // If values is an object, parse and add each rule to result object
  if (isResponsiveObject<CSSProperties[P]>(values)) {
    const parsed = parseResponsiveObject(property, values, theme, scale, transformer)
    Object.entries(parsed).forEach(([key, value]) => (result[key] = value))
  }

  // If values is an array, parse and add each rule to result object
  if (isResponsiveArray<CSSProperties[P]>(values)) {
    const parsed = parseResponsiveArray(property, values, theme, scale, transformer)
    Object.entries(parsed).forEach(([key, value]) => (result[key] = value))
  }

  // Return result as a CSSObject
  return result
}

export { parser }
