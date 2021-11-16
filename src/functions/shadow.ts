import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { styleParser } from '../parsers/styleParser'

/*








*/

export interface ShadowProps {
  boxShadow?: CSSProperties['boxShadow'] | ResponsiveStyle<CSSProperties['boxShadow']>
  textShadow?: CSSProperties['textShadow'] | ResponsiveStyle<CSSProperties['textShadow']>
}

export const shadow = css<ShadowProps>`
  ${({ boxShadow: T, theme }) => T && styleParser('boxShadow', T, theme)}
  ${({ textShadow: T, theme }) => T && styleParser('textShadow', T, theme)}
`
