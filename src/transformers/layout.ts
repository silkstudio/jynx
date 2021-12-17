// Types
import type { TransformFunction } from '../types/functions'
import type { CSSProperties } from '../types/css'

// Utils
import { get, isNumeric } from '../utils'

/*








*/

/**
 * lengthTransformer
 *
 * @param {CSSProperties['width' | 'height']} value
 * @param scale
 * @returns {CSSProperties['width' | 'height']}
 *
 * @since 1.0.0
 */

const lengthTransformer: TransformFunction<CSSProperties['width' | 'height']> = (value, scale) => {
  if (value && typeof value !== 'boolean' && typeof value !== 'object') {
    const fallback = !isNumeric(value) || value > 1 ? value : `${value * 100}%`
    return get(scale, value, fallback)
  }
}

export { lengthTransformer }
