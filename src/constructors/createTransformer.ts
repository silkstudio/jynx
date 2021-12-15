// Types
import type { CSSProperties } from '../types/css'
import type { TransformFunction } from '../types/functions'
import type { ResponsiveArray, ResponsiveObject, ResponsiveStyle } from '../types/responsive'

// Utils
import { isResponsiveArray, isResponsiveObject } from '../types/guards'

/**
 * createTransformer
 *
 * @template T extends keyof {@link CSSProperties}
 * @template K [={@link CSSProperties}[{@link T}]]
 *
 * @param {(value: K) => K} valueTransformer Function to be applied to each value
 * @returns {TransformFunction<K | ResponsiveStyle<K>>}
 *
 * @since 1.0.0
 */

/*








*/

const createTransformer = <T extends keyof CSSProperties, K = CSSProperties[T]>(
  valueTransformer: (value: K) => K
): TransformFunction<K | ResponsiveStyle<K>> => {
  type S = K | ResponsiveStyle<K>

  /**
   * Transformer function to be returned.
   * Iterates over responsive values and applies transformer function to each one.
   *
   * @template S extends `K | ResponsiveStyle<K>`
   * @param {S} values
   * @returns {S}
   */
  const transformer: TransformFunction<S> = (values: S): S => {
    if (isResponsiveArray<K>(values)) {
      const [base, ...responsive] = values
      const result = [valueTransformer(base)] as ResponsiveArray<K>
      responsive.forEach(value => result.push(value === null ? value : valueTransformer(value)))
      return result
    }

    if (isResponsiveObject<K>(values)) {
      const { _: base, ...responsive } = values
      const result: Record<string, K> = { _: valueTransformer(base) }
      Object.entries(responsive).forEach(([key, value]) => (result[key] = valueTransformer(value)))
      return result as ResponsiveObject<K>
    }

    return valueTransformer(values)
  }

  return transformer
}

export { createTransformer }
