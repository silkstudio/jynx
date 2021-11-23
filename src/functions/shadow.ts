import { css } from 'styled-components'

// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface ShadowProps {
  boxShadow?: CSS['boxShadow'] | ResponsiveStyle<CSS['boxShadow']>
  textShadow?: CSS['textShadow'] | ResponsiveStyle<CSS['textShadow']>
}

export const shadow = css<ShadowProps>`
  ${({ boxShadow: T, theme }) => T && parser('boxShadow', T, theme)}
  ${({ textShadow: T, theme }) => T && parser('textShadow', T, theme)}
`
