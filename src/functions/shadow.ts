import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface ShadowProps {
  boxShadow?: CSSProperties['boxShadow'] | ResponsiveStyle<CSSProperties['boxShadow']>
  textShadow?: CSSProperties['textShadow'] | ResponsiveStyle<CSSProperties['textShadow']>
}

export const shadow = css<ShadowProps>`
  ${({ boxShadow: T, theme }) => T && parser('boxShadow', T, theme)}
  ${({ textShadow: T, theme }) => T && parser('textShadow', T, theme)}
`
