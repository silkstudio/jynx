// Types
import { DefaultTheme, StyledFunctionConfig } from '../types'

// Utils
import { parser } from './parser'

/**
 * Function used to build a style object from the raw styles, a given theme and a config object.
 *
 * Whilst it does include the {@link parser} function, this is the _main_ function used to build the styles
 * that are passed to a styled component and should be the only thing having any interation font-end interaction
 * with any components (through our styled functions).
 *
 * @template T Used to define the type of {@link raw} (should ideally be instantiated as `<typeof raw>`)
 *
 * @param {T} raw Styles being passed from React component
 * @param {DefaultTheme} theme Theme used in parser
 * @param {StyledFunctionConfig} config Object used to define the css property and scale to the parser
 * @returns {Record<string, unknown>} Built
 *
 * @since 1.0.0
 * @public
 *
 * @example
 * const styleObject = createStyles<typeof raw>(raw, DefaultTheme, config)
 */

/*








*/

const createStyles = <T>(raw: T, theme: DefaultTheme, config: StyledFunctionConfig): Record<string, unknown> => {
  let styles: Record<string, unknown> = {}

  Object.entries(raw).forEach(([key, values]) => {
    styles = { ...styles, ...parser({ values, theme, ...config[key] }) }
  })

  return styles
}

export { createStyles }
