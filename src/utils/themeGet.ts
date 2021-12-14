// Types
import type { DefaultTheme, ThemeProps } from '../types/theme'
import type { PropertyPath } from '../types/common'

// Utils
import get from 'lodash.get'

type ThemeGetFunction = (props: ThemeProps<DefaultTheme>) => any

/**
 *
 * @param {PropertyPath} path
 * @param {unknown} [fallback=unknown]
 * @returns {ThemeGetFunction}
 */

/*








*/

const themeGet =
  (path: PropertyPath, fallback: unknown = null): ThemeGetFunction =>
  props =>
    get(props.theme, path, fallback)

export { themeGet }
