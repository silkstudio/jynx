// Types
import { BaseTheme, ThemeProps, PropertyPath } from '../types'

// Utils
import get from 'lodash.get'

type ThemeGetFunction = (props: ThemeProps<BaseTheme>) => any

/**
 *
 * @param {PropertyPath} path
 * @param {unknown} [fallback=unknown]
 * @returns
 */

/*








*/

const themeGet =
  (path: PropertyPath, fallback: unknown = null): ThemeGetFunction =>
  props =>
    get(props.theme, path, fallback)

export { themeGet }
