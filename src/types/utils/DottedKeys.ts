type Obj = Record<string, any>

type DotJoin<A extends string, B extends string> = A extends '' ? B : `${A}.${B}`

type ExtractKeys<O extends Obj> = {
  [K in keyof O]: O[K] extends Obj ? K : never
}[keyof O]

/**
 * Recursively retrieve all nested keys from an object with their full dotted path
 *
 * @template O extends {@link Obj}
 * @template P extends steing _(defaults to `''`)_
 * @template K extends string _(defaults to `keyof O`)_
 *
 * @since 1.0.0
 */

/*








*/

export type DottedKeys<
  O extends Obj,
  P extends string = '',
  // @ts-expect-error Type 'keyof O' does not satisfy the constraint 'string'.
  K extends string = keyof O
> = K extends ExtractKeys<O> ? DottedKeys<O[K], DotJoin<P, K>> : DotJoin<P, K>
