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
 * @type `TransformFunction<CSSProperties['width' | 'height']>`
 * @param {CSSProperties['width' | 'height']} value
 * @param scale
 * @returns {CSSProperties['width' | 'height']}
 *
 * @since 1.0.0
 */

const lengthTransformer: TransformFunction<CSSProperties['width' | 'height']> = (value, scale) => {
  return value ? get(scale, value, !isNumeric(value) || value > 1 ? value : `${value * 100}%`) : value
}

export { lengthTransformer }
