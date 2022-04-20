/*








*/

/**
 * ObjectOrArray
 *
 * @template T extends any
 *
 * @since 1.0.0
 */
export type ObjectOrArray<T> = T[] | Record<string, T | Record<string, T> | T[]>

/**
 * ObjectOrArray
 *
 * @template T extends any
 *
 * @since 1.0.0
 */
export type SingleLayerObjectOrArray<T> = T[] | Record<string, T>

/**
 * StringOrNumber
 *
 * @template T extends any
 *
 * @since 1.0.0
 */
export type StringOrNumber<T> = T extends string ? string : T extends number ? number : T

/**
 * OneOrMany
 *
 * @template T extends any
 *
 * @since 1.0.0
 */
export type OneOrMany<T> = T | T[]
