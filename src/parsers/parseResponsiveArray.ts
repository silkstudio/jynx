// Types
import type { CSSObject, CSSProperties } from '../types/css'
import type { DefaultTheme } from '../types/theme'
import type { ResponsiveArray } from '../types/responsive'
import type { TransformFunction } from '../types/functions'

// Utils
import { createMediaQuery, sort, getValue, addUnitIfNeeded } from '../utils'
import { parseBreakpoints } from './parseBreakpoints'

/**
 * Parser function that takes in a {@link ResponsiveArray} and returns a {@link CSSObject}
 *
 * @template P extends keyof CSSProperties
 * @template C extends CSSProperties[P]
 * @template T extends {@link DefaultTheme}
 *
 * @param {P} property
 * @param {ResponsiveArray<C>} styles
 * @param {DefaultTheme} theme
 *
 *
 * @since 1.0.0
 * @public
 */

/*








*/

const parseResponsiveArray = <P extends keyof CSSProperties>(
  property: P,
  styles: ResponsiveArray<CSSProperties[P]>,
  theme: DefaultTheme,
  scale?: keyof DefaultTheme,
  transformer: TransformFunction<CSSProperties[P]> = getValue
): CSSObject => {
  if (!property || !styles || !theme) {
    return {}
  }

  const breakpoints = Object.values(parseBreakpoints(theme.breakpoints))
  const themeScale = scale && theme[scale]
  const [base, ...responsive] = styles
  const parsed: CSSObject = {}

  responsive.forEach((value, index) => {
    if (value === null || value === undefined) return
    const media = createMediaQuery(`${breakpoints[index]}`)
    parsed[media] = { [property]: addUnitIfNeeded(property, transformer(value, themeScale)) }
  })

  return { [property]: addUnitIfNeeded(property, transformer(base, themeScale)), ...sort(parsed) }
}

export { parseResponsiveArray }
