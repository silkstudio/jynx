// ================================================
// GLOBALS
// ================================================

type Obj = Record<string, any>

type ExtractKeys<O extends Obj> = {
  [K in keyof O]: O[K] extends Obj ? K : never
}[keyof O]

// ================================================
// DEEP KEYS
// ================================================

/**
 * Recursively retrieve all nested keys from an object
 *
 * @template O extends {@link Obj}
 * @template K extends string _(defaults to `keyof O` )_
 *
 * @since 1.0.0
 */

type DeepKeys<
  O extends Obj,
  // @ts-expect-error Type 'keyof O' does not satisfy the constraint 'string'.
  K extends string = keyof O
> = K extends ExtractKeys<O> ? DeepKeys<O[K]> : K

// ================================================
// DOTTED KEYS
// ================================================

type DotJoin<A extends string, B extends string> = A extends '' ? B : `${A}.${B}`

/**
 * Recursively retrieve all nested keys from an object with their full dotted path
 *
 * @template O extends {@link Obj}
 * @template P extends steing _(defaults to `''`)_
 * @template K extends string _(defaults to `keyof O`)_
 *
 * @since 1.0.0
 */

type DottedKeys<
  O extends Obj,
  P extends string = '',
  // @ts-expect-error Type 'keyof O' does not satisfy the constraint 'string'.
  K extends string = keyof O
> = K extends ExtractKeys<O> ? DottedKeys<O[K], DotJoin<P, K>> : DotJoin<P, K>

/*








*/

export type { DeepKeys, DottedKeys }
