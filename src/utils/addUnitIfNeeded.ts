// Types
import type { CSSProperties, BaseCSSValue } from '../types/css'

// Utils
import { unitless } from './unitless'
import { isNumeric } from './isNumeric'

/**
 * addUnitIfNeeded
 * Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
 *
 * @template T extends keyof CSSProperties
 *
 * @param {T} property
 * @param {BaseCSSValue} value
 * @returns {string}
 */

/*








*/

const addUnitIfNeeded = <T extends keyof CSSProperties>(property: T, value?: BaseCSSValue): string => {
  if (value == null || typeof value === 'boolean' || value === '') {
    return ''
  }

  if (isNumeric(value) && value !== 0 && !(property in unitless)) {
    return `${value}px` // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim()
}

export { addUnitIfNeeded }
