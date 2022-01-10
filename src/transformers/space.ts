// Types
import type { DefaultTheme } from '../types/theme'
import type { BaseCSSValue } from '../types/css'

// Utils
import { addUnitIfNeeded, getValue, isNumeric } from '../utils'

/*








*/

/**
 * spaceScaleTransformer
 *
 * @param {BaseCSSValue} value
 * @param {DefaultTheme[keyof DefaultTheme] | Record<string, any> | any[]} scale
 * @returns {string | number | undefined}
 *
 * @since 1.0.0
 *
 */

const spaceScaleTransformer = (
  value: BaseCSSValue,
  scale?: DefaultTheme[keyof DefaultTheme] | Record<string, any> | any[]
): string | number | undefined => {
  if ((value !== 0 && !value) || typeof value === 'object' || typeof value === 'boolean') {
    return
  }

  if (!isNumeric(value)) {
    return getValue(value, scale)
  }

  const isNegative = value < 0
  const absolute = Math.abs(value)
  const themeValue = getValue(absolute, scale)

  if (!isNumeric(themeValue)) {
    return isNegative ? `-${themeValue}` : themeValue
  }

  return themeValue * (isNegative ? -1 : 1)
}

/**
 * spaceMultiTransformer
 *
 * @param {BaseCSSValue | BaseCSSValue[]} value
 * @param {DefaultTheme[keyof DefaultTheme] | Record<string, any> | any[]} scale
 * @returns {string | number | undefined}
 *
 * @since 1.0.0
 *
 */

const spaceMultiTransformer = (
  value: BaseCSSValue | BaseCSSValue[],
  scale?: DefaultTheme[keyof DefaultTheme] | Record<string, any> | any[]
): string | number | undefined => {
  if (Array.isArray(value)) {
    return value
      .map(i => spaceScaleTransformer(i, scale))
      .map(i => addUnitIfNeeded('marginTop', i))
      .join(' ')
  }

  return spaceScaleTransformer(value, scale)
}

export { spaceScaleTransformer, spaceMultiTransformer }
