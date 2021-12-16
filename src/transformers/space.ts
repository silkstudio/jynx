// Types
import type { DefaultTheme } from '../types/theme'
import type { CSSProperties } from '../types/css'

// Utils
import { getValue, isNumeric } from '../utils'

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
/*








*/

const spaceTransformer = (
  value: CSSProperties['margin' | 'padding'],
  scale?: DefaultTheme[keyof DefaultTheme] | Record<string, any> | any[]
): string | number | undefined => {
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

export { spaceTransformer }
