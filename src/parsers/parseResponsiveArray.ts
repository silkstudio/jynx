// Types
import { Properties as CSS } from 'csstype'
import { DefaultTheme, ResponsiveArray, BaseExtensibleObject } from '../types'

// Utils
import { createMediaQuery, sort, getValue } from '../utils'

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

const parseResponsiveArray = <P extends keyof CSS, C extends CSS[P], T extends DefaultTheme>(
  property: P,
  styles: ResponsiveArray<C>,
  theme: T,
  scale?: T[keyof T]
): BaseExtensibleObject => {
  const breakpoints = Object.values(theme.breakpoints)
  const [base, ...responsive] = styles
  const parsed: Record<string, any> = {}

  responsive.forEach((value, index) => {
    if (value === null || value === undefined) return

    const media = createMediaQuery(`${breakpoints[index]}`)
    parsed[media] = { [property]: getValue(value, scale) }
  })

  return { [property]: getValue(base, scale), ...sort(parsed) }
}

export { parseResponsiveArray }
