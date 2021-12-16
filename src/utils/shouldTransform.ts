// Types
import type { CSSProperties } from '../types/css'
import type { TransformFunction } from '../types/functions'

/**
 * shouldTransform
 *
 * @template T extends {@link CSSProperties}[keyof {@link CSSProperties}]
 *
 * @param {T} value
 * @param {TransformFunction<T>} transformer
 * @returns {T}
 *
 * @since 1.0.0
 *
 */

/*








*/

const shouldTransform = <T extends CSSProperties[keyof CSSProperties]>(value: T, transformer?: TransformFunction<T>): T => {
  return transformer ? transformer(value) : value
}

export { shouldTransform }
