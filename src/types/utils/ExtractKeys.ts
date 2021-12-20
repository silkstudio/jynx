/**
 * ExtractKeys
 *
 * @template O extends {@link Obj}
 *
 * @since 1.0.0
 */

/*








*/

export type ExtractKeys<O extends Record<string, any>> = {
  [K in keyof O]: O[K] extends Record<string, any> ? K : never
}[keyof O]
