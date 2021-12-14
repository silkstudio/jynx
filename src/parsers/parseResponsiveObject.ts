// Types
import type { CSSProperties } from '../types/css'
import type { DefaultTheme } from '../types/theme'
import type { BaseExtensibleObject } from '../types/common'
import type { ResponsiveObject } from '../types/responsive'

// Utils
import { createMediaQuery, sort, getValue, addUnitIfNeeded } from '../utils'
import { parseBreakpoints } from './parseBreakpoints'

/**
 * Parser function that takes in either a single style or ResponsiveStyle and
 * returns a styled-copmonents-compatible {@link FlattenSimpleInterpolation}
 *
 * @template P extends keyof CSSProperties
 * @template T extends {@link DefaultTheme}
 *
 * @param {P} property
 * @param {ResponsiveObject<CSSProperties[P]>} styles
 * @param {DefaultTheme} theme
 * @param {keyof DefaultTheme} scale
 *
 *
 * @since 1.0.0
 * @public
 */

/*
 






 
*/

const parseResponsiveObject = <P extends keyof CSSProperties, T extends DefaultTheme = DefaultTheme>(
  property: P,
  styles: ResponsiveObject<CSSProperties[P]>,
  theme: T,
  scale?: keyof T
): BaseExtensibleObject => {
  if (!property || !styles || !theme) {
    return {}
  }

  const breakpoints = parseBreakpoints(theme.breakpoints)
  const themeScale = scale && theme[scale]
  const { _: base, ...responsive } = styles
  const parsed: Record<string, any> = {}

  Object.entries(responsive).forEach(([bp, value]) => {
    const media = createMediaQuery(`${breakpoints[bp as keyof typeof breakpoints]}`)
    parsed[media] = { [property]: addUnitIfNeeded(property, getValue(value, themeScale)) }
  })

  return { [property]: addUnitIfNeeded(property, getValue(base, themeScale)), ...sort(parsed) }
}

export { parseResponsiveObject }
