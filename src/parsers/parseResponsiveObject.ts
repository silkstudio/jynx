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
  transformer: TransformFunction<CSSProperties[P]> = getValue
): CSSObject => {
  if (!property || !styles || !theme) {
    return {}
  }

  const breakpoints = parseBreakpoints(theme.breakpoints)
  const themeScale = scale && theme[scale]
  const { _: base, ...responsive } = styles
  const parsed: CSSObject = {}

  Object.entries(responsive).forEach(([bp, value]) => {
    const media = createMediaQuery(`${breakpoints[bp as keyof typeof breakpoints]}`)
    parsed[media] = { [property]: addUnitIfNeeded(property, transformer(value, themeScale)) }
  })

  return { [property]: addUnitIfNeeded(property, transformer(base, themeScale)), ...sort(parsed) }
}

export { parseResponsiveObject }
