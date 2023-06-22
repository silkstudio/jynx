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

/**
 * LiteralUnion
 *
 * Creates a union of `T` with any string value. This is useful for providing type information
 * through intellisense whilst still allowing 'any string value' to be passed.
 *
 * @template T extends any
 *
 * @since 1.2.1
 */
export type LiteralUnion<T> = T | (string & {}) // eslint-disable-line @typescript-eslint/ban-types
