import type { DeepLeaves } from '../types/utils'
import type { LiteralUnion } from '../types/common'

// Types
type FieldWithPossiblyUndefined<T, Key> = GetFieldType<Exclude<T, undefined>, Key> | Extract<T, undefined>

type GetIndexedField<T, K> = K extends keyof T
  ? T[K]
  : K extends `${number}`
  ? '0' extends keyof T // tuples have string keys, return undefined if K is not in tuple
    ? undefined
    : number extends keyof T
    ? T[number]
    : undefined
  : undefined

export type GetFieldType<T, P> = P extends `${infer Left}.${infer Right}`
  ? Left extends keyof T
    ? FieldWithPossiblyUndefined<T[Left], Right>
    : Left extends `${infer FieldKey}[${infer IndexKey}]`
    ? FieldKey extends keyof T
      ? FieldWithPossiblyUndefined<GetIndexedField<Exclude<T[FieldKey], undefined>, IndexKey> | Extract<T[FieldKey], undefined>, Right>
      : undefined
    : undefined
  : P extends keyof T
  ? T[P]
  : P extends `${infer FieldKey}[${infer IndexKey}]`
  ? FieldKey extends keyof T
    ? GetIndexedField<Exclude<T[FieldKey], undefined>, IndexKey> | Extract<T[FieldKey], undefined>
    : undefined
  : undefined

/**
 * Adapetd from {@link https://itnext.io/advanced-typescript-reinventing-lodash-get-db82eac3345e}
 *
 * @template {TData}
 * @template {TPath} extends string
 * @template {TDefault} = GetFieldType<TData, TPath>
 *
 * @param {TData} data
 * @param {TPath} path
 * @param {TDefaultValue} defaultValue
 * @returns {GetFieldType<TData, TPath> | TDefault}
 */

/*








*/

const get = <TData, TPath extends LiteralUnion<DeepLeaves<TData, 3> | number>, TDefault = GetFieldType<TData, TPath>>(
  data: TData,
  path?: TPath,
  defaultValue?: TDefault
): GetFieldType<TData, TPath> | TDefault => {
  if (typeof path === 'number') {
    return (data as any[])?.[path] ?? (defaultValue as TDefault)
  }

  const value = (path as string)
    ?.split(/[.[\]]/)
    ?.filter(Boolean)
    ?.reduce<GetFieldType<TData, TPath>>((obj, key) => (obj as any)?.[key], data as any)

  return value ?? (defaultValue as TDefault)
}

export { get }
