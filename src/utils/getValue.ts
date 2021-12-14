// Types
import type { DefaultTheme } from '../types/theme'

// Utils
import get from 'lodash.get'

/**
 *
 * @param {string | number} value
 * @param {DefaultTheme[keyof DefaultTheme]} scale
 * @returns {string | number | Record<string, any>}
 */

/*








*/

const getValue = (
  value?: string | number,
  scale?: DefaultTheme[keyof DefaultTheme] | Record<string, any> | any[]
): string | number | Record<string, any> => {
  if (scale) {
    return value ? get(scale, value, value) : ''
  }
  return value || ''
}

export { getValue }
