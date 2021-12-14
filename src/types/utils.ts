// Types
import type { Properties as CSS } from 'csstype'
import type { DefaultTheme } from './theme'
import type { ResponsiveStyle } from './responsive'

/*








*/

/* -------- */
/*  OBJECT  */
/* -------- */
type Obj = Record<string, any>

/* -------------- */
/*  EXTRACT KEYS  */
/* -------------- */
/**
 * ExtractKeys
 *
 * @template O extends {@link Obj}
 *
 * @since 1.0.0
 */
export type ExtractKeys<O extends Obj> = {
  [K in keyof O]: O[K] extends Obj ? K : never
}[keyof O]

/*








*/

/* ----------- */
/*  DEEP KEYS  */
/* ----------- */
/**
 * Recursively retrieve all nested keys from an object
 *
 * @template O extends {@link Obj}
 * @template K extends string _(defaults to `keyof O` )_
 *
 * @since 1.0.0
 */

export type DeepKeys<
  O extends Obj,
  // @ts-expect-error Type 'keyof O' does not satisfy the constraint 'string'.
  K extends string = keyof O
> = K extends ExtractKeys<O> ? DeepKeys<O[K]> : K

/*








*/

/* ---------- */
/*  DOT JOIN  */
/* ---------- */
/**
 * DotJoin
 *
 * @template A extends string
 * @template B extends string
 *
 * @since 1.0.0
 */
export type DotJoin<A extends string, B extends string> = A extends '' ? B : `${A}.${B}`

/*








*/

/* ------------- */
/*  DOTTED KEYS  */
/* ------------- */
/**
 * Recursively retrieve all nested keys from an object with their full dotted path
 *
 * @template O extends {@link Obj}
 * @template P extends steing _(defaults to `''`)_
 * @template K extends string _(defaults to `keyof O`)_
 *
 * @since 1.0.0
 */

export type DottedKeys<
  O extends Obj,
  P extends string = '',
  // @ts-expect-error Type 'keyof O' does not satisfy the constraint 'string'.
  K extends string = keyof O
> = K extends ExtractKeys<O> ? DottedKeys<O[K], DotJoin<P, K>> : DotJoin<P, K>

/*








*/

/* ------------- */
/*  STYLE  */
/* ------------- */
// type LiteralUnion<T extends U, U = string | number | Record<string, string | number>> = T | (U & {})
// let x: LiteralUnion<keyof DefaultTheme['breakpoints']>
// x = ''
/**
 *
 * @template K extends keyof {@link CSSProperties}
 *
 * @since 1.0.0
 */
export type Style<K extends keyof CSS> = CSS[K] | ResponsiveStyle<CSS[K]>

/**
 *
 * @template K extends keyof {@link CSSProperties}
 * @template S extends keyof `T` &nbsp;&nbsp;|&nbsp;&nbsp; Scale selected from theme to use as the primary source of the style
 * @template T extends {@link DefaultTheme} &nbsp;&nbsp;|&nbsp;&nbsp; Selected theme
 *
 * @since 1.0.0
 */
export type StyleWithTheme<K extends keyof CSS, S extends keyof T, T extends DefaultTheme = DefaultTheme> =
  | (CSS[K] | keyof T[S])
  | ResponsiveStyle<CSS[K] | keyof T[S]>
