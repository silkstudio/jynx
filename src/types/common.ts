/*








*/

/*
 * Basic theme object shape
 *
 * @since 1.0.0
 */
export type BaseExtensibleObject = {
  [key: string]: any
}

/**
 * AnyIfEmpty
 *
 * @template T extends object
 *
 * @since 1.0.0
 */
export type AnyIfEmpty<T extends object> = keyof T extends never ? any : T

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
 * Many
 *
 * @template T
 *
 * @since 1.0.0
 */
export type Many<T> = T | ReadonlyArray<T>

/**
 * PropertyName
 *
 * @since 1.0.0
 */
export type PropertyName = string | number | symbol

/**
 * PropertyPath
 *
 * @since 1.0.0
 */
export type PropertyPath = Many<PropertyName>
