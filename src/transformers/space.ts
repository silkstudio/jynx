// Types
import type { DefaultTheme } from '../types/theme'
import type { CSSProperties } from '../types/css'

// Utils
import { addUnitIfNeeded, getValue, isNumeric } from '../utils'

/*








*/

/**
 * spaceTransformer
 *
 * @param {CSSProperties['margin' | 'padding']} value
 * @param {DefaultTheme[keyof DefaultTheme] | Record<string, any> | any[]} scale
 * @returns {string | number | undefined}
 *
 * @since 1.0.0
 *
 */

const spaceTransformer = (
  value: CSSProperties['margin' | 'padding'],
  scale?: DefaultTheme[keyof DefaultTheme] | Record<string, any> | any[]
): string | number | undefined => {
  if (!value || typeof value === 'object' || typeof value === 'boolean') {
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
 * @param {CSSProperties['margin' | 'padding']} value
 * @param {DefaultTheme[keyof DefaultTheme] | Record<string, any> | any[]} scale
 * @returns {string | number | undefined}
 *
 * @since 1.0.0
 *
 */

const spaceMultiTransformer = (
  value: CSSProperties['margin' | 'padding'] | CSSProperties['margin' | 'padding'][],
  scale?: DefaultTheme[keyof DefaultTheme] | Record<string, any> | any[]
): string | number | undefined => {
  if (Array.isArray(value)) {
    return value
      .map(i => spaceTransformer(i, scale))
      .map(i => addUnitIfNeeded('margin' || 'padding', i))
      .join(' ')
  }

  return spaceTransformer(value, scale)
}

export { spaceTransformer, spaceMultiTransformer }
