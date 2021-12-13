// Types
import { Properties as CSS } from 'csstype'
import { BaseExtensibleObject, Breakpoint, DefaultTheme, ResponsiveObject } from '../types'

// Utils
import { createMediaQuery, sort, getValue, addUnitIfNeeded } from '../utils'
import { DefaultBreakpoint } from '../utils/defaultBreakpoints'
import { parseBreakpoints } from './parseBreakpoints'

/**
 * Parser function that takes in either a single style or ResponsiveStyle and
 * returns a styled-copmonents-compatible {@link FlattenSimpleInterpolation}
 *
 * @template P extends keyof CSSProperties
 * @template C extends CSSProperties[P]
 * @template T extends {@link DefaultTheme}
 *
 * @param {P} property
 * @param {ResponsiveObject<C>} styles
 * @param {DefaultTheme} theme
 * @param {(p: Path) => string | number | undefined} scaleGet
 *
 *
 * @since 1.0.0
 * @public
 */

/*
 






 
*/

const parseResponsiveObject = <P extends keyof CSS, T extends DefaultTheme = DefaultTheme>(
  property: P,
  styles: ResponsiveObject<CSS[P]>,
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
    const media = createMediaQuery(`${breakpoints[bp as DefaultBreakpoint]}`)
    parsed[media] = { [property]: addUnitIfNeeded(property, getValue(value, themeScale)) }
  })

  return { [property]: addUnitIfNeeded(property, getValue(base, themeScale)), ...sort(parsed) }
}

export { parseResponsiveObject }
