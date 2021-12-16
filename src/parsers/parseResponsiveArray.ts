// Types
import type { CSSObject, CSSProperties } from '../types/css'
import type { DefaultTheme } from '../types/theme'
import type { ResponsiveArray } from '../types/responsive'
import type { TransformFunction } from '../types/functions'

// Utils
import { createMediaQuery, sort, getValue, addUnitIfNeeded, shouldTransform } from '../utils'
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
  transformer?: TransformFunction<CSSProperties[P]>
): CSSObject => {
  if (!property || !styles || !theme) {
    return {}
  }

  // Set-up
  const breakpoints = Object.values(parseBreakpoints(theme.breakpoints))
  const themeScale = scale && theme[scale]
  const [base, ...responsive] = styles
  const parsed: CSSObject = {}

  // Base style
  const transformedBase = shouldTransform<CSSProperties[P]>(getValue(base, themeScale), transformer)

  // Responsive styles
  responsive.forEach((value, index) => {
    if (value === null || value === undefined) return
    const media = createMediaQuery(`${breakpoints[index]}`)
    const transformed = shouldTransform<CSSProperties[P]>(getValue(value, themeScale), transformer)
    parsed[media] = { [property]: addUnitIfNeeded(property, transformed) }
  })

  return { [property]: addUnitIfNeeded(property, transformedBase), ...sort(parsed) }
}

export { parseResponsiveArray }
