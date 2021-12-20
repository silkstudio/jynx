// Types
import type { Join } from './Join'
import type { Prev } from './Prev'

/**
 *
 */

/*








*/

export type DeepLeaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: Join<K, DeepLeaves<T[K], Prev[D]>> }[keyof T]
  : ''
