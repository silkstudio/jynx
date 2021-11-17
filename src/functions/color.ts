import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { styleParser } from '../parsers/styleParser'

/*








*/

export interface ColorProps {
  color?: CSSProperties['color'] | ResponsiveStyle<CSSProperties['color']>
  backgroundColor?: CSSProperties['backgroundColor'] | ResponsiveStyle<CSSProperties['backgroundColor']>
  opacity?: CSSProperties['opacity'] | ResponsiveStyle<CSSProperties['opacity']>
}

export const color = css<ColorProps>`
  ${({ color: T, theme }) => T && styleParser('color', T, theme)}
  ${({ backgroundColor: T, theme }) => T && styleParser('backgroundColor', T, theme)}
  ${({ opacity: T, theme }) => T && styleParser('opacity', T, theme)}
`
