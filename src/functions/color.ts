import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface ColorProps {
  color?: CSSProperties['color'] | ResponsiveStyle<CSSProperties['color']>
  backgroundColor?: CSSProperties['backgroundColor'] | ResponsiveStyle<CSSProperties['backgroundColor']>
  opacity?: CSSProperties['opacity'] | ResponsiveStyle<CSSProperties['opacity']>
}

export const color = css<ColorProps>`
  ${({ color: T, theme }) => T && parser('color', T, theme, 'colors')}
  ${({ backgroundColor: T, theme }) => T && parser('backgroundColor', T, theme, 'colors')}
  ${({ opacity: T, theme }) => T && parser('opacity', T, theme)}
`
