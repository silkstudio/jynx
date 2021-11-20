import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface PositionProps {
  top?: CSSProperties['top'] | ResponsiveStyle<CSSProperties['top']>
  right?: CSSProperties['right'] | ResponsiveStyle<CSSProperties['right']>
  bottom?: CSSProperties['bottom'] | ResponsiveStyle<CSSProperties['bottom']>
  left?: CSSProperties['left'] | ResponsiveStyle<CSSProperties['left']>
  zIndex?: CSSProperties['zIndex'] | ResponsiveStyle<CSSProperties['zIndex']>
}

export const position = css<PositionProps>`
  ${({ top: T, theme }) => T && parser('top', T, theme)}
  ${({ right: T, theme }) => T && parser('right', T, theme)}
  ${({ bottom: T, theme }) => T && parser('bottom', T, theme)}
  ${({ left: T, theme }) => T && parser('left', T, theme)}
  ${({ zIndex: T, theme }) => T && parser('zIndex', T, theme)}
`
