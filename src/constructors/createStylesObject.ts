// Types
import type { DefaultTheme } from '../types/theme'
import type { StyledFunctionConfig } from '../types/functions'
import type { CSSObject } from '../types/css'

// Utils
import { parser } from '../parsers/parser'
import { deepMerge } from '../utils'

/**
 * Function used to build a style object from the raw styles, a given theme and a config object.
 *
 * @template T Used to define the type of {@link raw}
 *
 * @param {T} raw Styles being passed from React component
 * @param {DefaultTheme} theme Theme used in parser
 * @param {StyledFunctionConfig} config Object used to define the css property and scale to the parser
 * @returns {CSSObject} Built styles object
 *
 * @example
 * // Creating a `color` style function
 * const color: StyledFunction<ColorProps> = ({ theme, ...styles }) => {
 *    return createStylesObject<ColorProps>(styles, theme, config)}
 *  }
 *
 * @since 1.0.0
 *
 */

/*








*/

const createStylesObject = <T>(raw: T, theme: DefaultTheme, config: StyledFunctionConfig): CSSObject => {
  let styles: CSSObject = {}

  Object.entries(raw).forEach(([key, values]) => {
    styles = deepMerge(styles, parser({ values, theme, ...config[key] }))
  })

  return styles
}

export { createStylesObject }
