// Types
import { Properties as CSS } from 'csstype'
import { BaseExtensibleObject, Breakpoint, DefaultTheme, ResponsiveObject } from '../types'

// Utils
import { createMediaQuery, sort, themeGet } from '../utils'

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

const parseResponsiveObject = <P extends keyof CSS, C extends CSS[P], T extends DefaultTheme>(
  property: P,
  styles: ResponsiveObject<C>,
  theme: T,
  scale?: T[keyof T]
): BaseExtensibleObject => {
  const { breakpoints } = theme
  const { _: base, ...responsive } = styles
  const parsed: Record<string, any> = {}

  Object.entries(responsive).forEach(([bp, value]) => {
    const media = createMediaQuery(`${breakpoints[bp as Breakpoint]}`)
    parsed[media] = { [property]: themeGet(property, value, scale) }
  })

  return { [property]: themeGet(property, base, scale), ...sort(parsed) }
}

export { parseResponsiveObject }
