// Types
import type { CSSObject, CSSProperties } from '../types/css'
import type { DefaultTheme } from '../types/theme'
import type { ResponsiveObject } from '../types/responsive'
import type { TransformFunction } from '../types/functions'

// Utils
import { createMediaQuery, sort, getValue, addUnitIfNeeded, shouldTransform } from '../utils'
import { parseBreakpoints } from './parseBreakpoints'

/**
 * Parser function that takes in a {@link ResponsiveObject} and returns a {@link CSSObject}
 *
 * @template P extends keyof CSSProperties
 *
 * @param {P} property
 * @param {ResponsiveObject<CSSProperties[P]>} styles
 * @param {DefaultTheme} theme
 * @param {keyof DefaultTheme} scale
 * @param {TransformFunction<CSSProperties[P]>} transformer
 * @returns {CSSObject}
 *
 * @since 1.0.0
 * @public
 */

/*
 






 
*/

const parseResponsiveObject = <P extends keyof CSSProperties>(
  property: P,
  styles: ResponsiveObject<CSSProperties[P]>,
  theme: DefaultTheme,
  scale?: keyof DefaultTheme,
  transformer?: TransformFunction<CSSProperties[P]>
): CSSObject => {
  if (!property || !styles || !theme) {
    return {}
  }

  // Set-up
  const breakpoints = parseBreakpoints(theme.breakpoints)
  const themeScale = scale && theme[scale]
  const { _: base, ...responsive } = styles
  const parsed: CSSObject = {}

  // Base style
  const transformedBase = shouldTransform<CSSProperties[P]>(getValue(base, themeScale), transformer)

  // Responsive styles
  Object.entries(responsive).forEach(([bp, value]) => {
    const media = createMediaQuery(`${breakpoints[bp as keyof typeof breakpoints]}`)
    const transformed = shouldTransform<CSSProperties[P]>(getValue(value, themeScale), transformer)
    parsed[media] = { [property]: addUnitIfNeeded(property, transformed) }
  })

  return { [property]: addUnitIfNeeded(property, transformedBase), ...sort(parsed) }
}

export { parseResponsiveObject }
