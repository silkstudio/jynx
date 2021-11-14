import { CSSProperties, css, FlattenSimpleInterpolation } from 'styled-components'

// Types
import { Breakpoint, DefaultTheme, ResponsiveStyle } from '../types'
import { ResponsiveArrayGuard, ResponsiveObjectGuard, ResponsiveStyleGuard } from '../types/guards'

// Utils
import kebabCase from 'lodash.kebabcase'
import { createMediaQuery, sortStyles } from '../utils'

/**
 * Parser function that takes in either a single style or ResponsiveStyle and
 * returns a styled-copmonents-compatible {@link FlattenSimpleInterpolation}
 *
 * @template P extends keyof CSSProperties
 * @template C extends CSSProperties[P]
 *
 * @param {P} cssProp
 * @param {C | ResponsiveStyle<C>} values
 * @param {DefaultTheme} theme
 * @param {(K: typeof values) => void} transform
 *
 * @returns {FlattenSimpleInterpolation}
 *
 * @since 1.0.0
 * @public
 */

/*








*/

const styleParser = <P extends keyof CSSProperties, C extends CSSProperties[P]>(
  cssProp: P,
  values: C | ResponsiveStyle<C>,
  theme: DefaultTheme,
  transform?: (K: typeof values) => typeof K
): FlattenSimpleInterpolation => {
  /*
   [1]. If values is not a ResponsiveStyle, simply push plain style to `result` and return that
   [2]. If values is a ResponsiveObject, parse it and push each style to `result` with a breakpoint (and in order)
   [3]. If values is a ResponsiveArray, parse it and push each style to `result` with a breakpoint (and in order)
   */

  const result: any = []
  const style = kebabCase(cssProp)
  const tValues = transform ? transform(values) : values

  // [1]
  if (!ResponsiveStyleGuard<C>(tValues)) {
    result.push(`${style}: ${tValues};`)
  }

  // [2]
  if (ResponsiveObjectGuard<C>(tValues)) {
    const { breakpoints } = theme
    const { _: base, ...responsive } = tValues
    const styles: Record<string, any> = {}

    // Push the base style to the result array as this `must` come first
    result.push(`${style}: ${base};\n`)

    // Add each of the remaining styles to the `styles` object, using a media-query
    // derived from the current breakpoint as the key
    Object.entries(responsive).forEach(([bp, value]) => (styles[createMediaQuery(`${breakpoints[bp as Breakpoint]}`)] = value))

    // Sort the styles into ascending order based on the keys and push each one to
    // the result array
    Object.entries(sortStyles(styles)).forEach(([media, value]) => result.push(`${media} {\n${style}: ${value};\n}\n`))
  }

  // [3]
  if (ResponsiveArrayGuard<C>(tValues)) {
    const breakpoints = Object.values(theme.breakpoints)

    // Push the first entry to the result array as this `must` come first
    result.push(`${style}: ${tValues[0]}`)

    const responsive = tValues.slice(1)

    // Push each of the remaining styles to the `result` array (provided the value !== null)
    responsive.forEach((value, index) => {
      if (value === null) return
      result.push(`${createMediaQuery(`${breakpoints[index]}`)} {\n${style}: ${value};\n}`)
    })
  }

  return css`
    ${result}
  `
}

export { styleParser }
