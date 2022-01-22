// Types
import type { TransformFunction } from '../types/functions'
import type { Property } from 'csstype'

/*








*/

/**
 * timeTransformer
 *
 * @param {Property.TransitionDelay<number> | Property.TransitionDuration<number>} value
 * @returns {Property.TransitionDelay | Property.TransitionDuration}
 *
 * @since 1.0.0
 */

const timeTransformer: TransformFunction<Property.TransitionDelay<number> | Property.TransitionDuration<number>> = value => {
  if (typeof value === 'number' || (typeof value === 'string' && !isNaN(Number(value)))) {
    const num = typeof value === 'number' ? value : parseFloat(value)
    const absolute = Math.abs(num)
    return `${absolute}${(absolute >= 0 && absolute < 1) || !Number.isInteger(absolute) ? 's' : 'ms'}`
  }

  return typeof value === 'string' ? value : ''
}

export { timeTransformer }
