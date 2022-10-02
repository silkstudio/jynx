// Types
import type { SingleLayerObjectOrArray } from '../types/common'
import type { DefaultBreakpoints } from '../theme'

// Utils
import { defaultBreakpoints } from '../theme'

/**
 * parseBreakpoints
 *
 * @param {SingleLayerObjectOrArray<string | number>} breakpoints
 * @returns {Record<string, string | number>}
 */

/*








*/

export const parseBreakpoints = (
  breakpoints?: SingleLayerObjectOrArray<string | number>
): DefaultBreakpoints | Record<string, string | number> => {
  if (!breakpoints || (typeof breakpoints !== 'object' && !Array.isArray(breakpoints))) {
    return defaultBreakpoints
  }

  if (Array.isArray(breakpoints)) {
    const result: Record<string, string | number> = {}
    Object.assign(result, breakpoints)
    return result
  }

  return breakpoints
}
