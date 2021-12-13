/*








*/

/**
 *
 */
// export type ObjectOrArray<T> = T[] | Record<string, T | Record<string, T> | T[]>
export type ObjectOrArray<T> = T[] | Record<string, T>

/*
 * Basic theme object shape
 *
 * @since 1.0.0
 */
export type BaseExtensibleObject = {
  [key: string]: any
}

/**
 * Basic theme object shape
 *
 * @since 1.0.0
 */
// eslint-disable-next-line
export type CSSProperty = string | number | (string & {}) | (number & {})

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
