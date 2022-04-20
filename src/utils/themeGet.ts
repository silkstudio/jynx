// Types
import type { DefaultTheme, ThemeProps } from '../types/theme'

// Utils
import { get } from '.'

type ThemeGetFunction = (props: ThemeProps<DefaultTheme>) => any

/**
 *
 * @param {string | number} path
 * @param {unknown} [fallback=unknown]
 * @returns {ThemeGetFunction}
 */

/*








*/

const themeGet =
  (path: string | number, fallback: unknown = null): ThemeGetFunction =>
  props =>
    get(props.theme, path, fallback)

export { themeGet }
