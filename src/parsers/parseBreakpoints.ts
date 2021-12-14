// Types
import type { ObjectOrArray } from '../types/common'
import type { DefaultBreakpoints } from '../utils/defaultBreakpoints'

// Utils
import { defaultBreakpoints } from '../utils'

/**
 * parseBreakpoints
 *
 * @param {ObjectOrArray<string | number>} breakpoints
 * @returns {Record<string, string | number>}
 */

/*








*/

export const parseBreakpoints = (
  breakpoints?: ObjectOrArray<string | number>
): DefaultBreakpoints | Record<string, string | number> => {
  if (!breakpoints) {
    return defaultBreakpoints
  }

  if (Array.isArray(breakpoints)) {
    const result: Record<string, string | number> = {}
    Object.assign(result, breakpoints)
    return result
  }

  return breakpoints
}
