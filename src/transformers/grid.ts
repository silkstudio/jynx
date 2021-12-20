/* eslint-disable  @typescript-eslint/ban-types */

// Types
import type { CSSProperties } from '../types/css'

// Utils
import { replaceAll } from '../utils'

export const spanOperator = '|'

/*








*/

/**
 * gridSpanTransformer
 *
 * @param {CSSProperties['gridColumn' | 'gridRow' | 'gridArea']} value
 * @returns {string | (number & {}) | undefined}
 */
const gridSpanTransformer = (
  value: CSSProperties['gridColumn' | 'gridRow' | 'gridArea'] | CSSProperties['gridColumn' | 'gridRow' | 'gridArea'][]
): string | (number & {}) | undefined => {
  if (!value || typeof value === 'boolean' || (typeof value === 'object' && !Array.isArray(value))) {
    return
  }

  const flattened = Array.isArray(value) ? value.join(' / ') : value
  const parsed = typeof flattened === 'string' ? replaceAll(flattened, spanOperator, 'span ') : flattened

  return parsed
}

export { gridSpanTransformer }
