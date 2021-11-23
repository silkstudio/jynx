import { css } from 'styled-components'

// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface ColorProps {
  color?: CSS['color'] | ResponsiveStyle<CSS['color']>
  backgroundColor?: CSS['backgroundColor'] | ResponsiveStyle<CSS['backgroundColor']>
  opacity?: CSS['opacity'] | ResponsiveStyle<CSS['opacity']>
}

export const color = css<ColorProps>`
  ${({ color: T, theme }) => T && parser('color', T, theme, 'colors')}
  ${({ backgroundColor: T, theme }) => T && parser('backgroundColor', T, theme, 'colors')}
  ${({ opacity: T, theme }) => T && parser('opacity', T, theme)}
`
