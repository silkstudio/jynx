/**
 * Join
 *
 * @template K
 * @template P
 *
 * @since 1.0.0
 *
 */

/*








*/

export type Join<K, P> = K extends string | number ? (P extends string | number ? `${K}${'' extends P ? '' : '.'}${P}` : never) : never
