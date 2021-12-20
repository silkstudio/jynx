// Types
import type { Join } from './Join'
import type { Prev } from './Prev'

/**
 * DeepPaths
 *
 * @template T
 * @template D extends number [=10]
 *
 * @since 1.0.0
 *
 */

/*








*/

export type DeepPaths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: K extends string | number ? `${K}` | Join<K, DeepPaths<T[K], Prev[D]>> : never
    }[keyof T]
  : ''
