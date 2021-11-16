import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { styleParser } from '../parsers/styleParser'

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
  ${({ top: T, theme }) => T && styleParser('top', T, theme)}
  ${({ right: T, theme }) => T && styleParser('right', T, theme)}
  ${({ bottom: T, theme }) => T && styleParser('bottom', T, theme)}
  ${({ left: T, theme }) => T && styleParser('left', T, theme)}
  ${({ zIndex: T, theme }) => T && styleParser('zIndex', T, theme)}
`
