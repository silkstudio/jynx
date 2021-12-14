// Types
import type { CSSProperties } from '../types/css'
import { DefaultTheme, ResponsiveArray, BaseExtensibleObject } from '../types'

// Utils
import { createMediaQuery, sort, getValue, addUnitIfNeeded } from '../utils'
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
 * @param {ResponsiveArray<C>} styles
 * @param {DefaultTheme} theme
 * @param {(p: Path) => string | number | undefined} scaleGet
 *
 *
 * @since 1.0.0
 * @public
 */

/*








*/

const parseResponsiveArray = <P extends keyof CSSProperties, T extends DefaultTheme = DefaultTheme>(
  property: P,
  styles: ResponsiveArray<CSSProperties[P]>,
  theme: T,
  scale?: keyof T
): BaseExtensibleObject => {
  if (!property || !styles || !theme) {
    return {}
  }

  const breakpoints = Object.values(parseBreakpoints(theme.breakpoints))
  const themeScale = scale && theme[scale]
  const [base, ...responsive] = styles
  const parsed: Record<string, any> = {}

  responsive.forEach((value, index) => {
    if (value === null || value === undefined) return

    const media = createMediaQuery(`${breakpoints[index]}`)
    parsed[media] = { [property]: addUnitIfNeeded(property, getValue(value, themeScale)) }
  })

  return { [property]: addUnitIfNeeded(property, getValue(base, themeScale)), ...sort(parsed) }
}

export { parseResponsiveArray }
