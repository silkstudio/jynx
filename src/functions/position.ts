import { css } from 'styled-components'

// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface PositionProps {
  top?: CSS['top'] | ResponsiveStyle<CSS['top']>
  right?: CSS['right'] | ResponsiveStyle<CSS['right']>
  bottom?: CSS['bottom'] | ResponsiveStyle<CSS['bottom']>
  left?: CSS['left'] | ResponsiveStyle<CSS['left']>
  zIndex?: CSS['zIndex'] | ResponsiveStyle<CSS['zIndex']>
}

export const position = css<PositionProps>`
  ${({ top: T, theme }) => T && parser('top', T, theme)}
  ${({ right: T, theme }) => T && parser('right', T, theme)}
  ${({ bottom: T, theme }) => T && parser('bottom', T, theme)}
  ${({ left: T, theme }) => T && parser('left', T, theme)}
  ${({ zIndex: T, theme }) => T && parser('zIndex', T, theme)}
`
