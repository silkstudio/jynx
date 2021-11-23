import { css } from 'styled-components'

// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface TypographyProps {
  fontFamily?: CSS['fontFamily'] | ResponsiveStyle<CSS['fontFamily']>
  fontSize?: CSS['fontSize'] | ResponsiveStyle<CSS['fontSize']>
  fontWeight?: CSS['fontWeight'] | ResponsiveStyle<CSS['fontWeight']>
  lineHeight?: CSS['lineHeight'] | ResponsiveStyle<CSS['lineHeight']>
  letterSpacing?: CSS['letterSpacing'] | ResponsiveStyle<CSS['letterSpacing']>
  textAlign?: CSS['textAlign'] | ResponsiveStyle<CSS['textAlign']>
  fontStyle?: CSS['fontStyle'] | ResponsiveStyle<CSS['fontStyle']>
  textTransform?: CSS['textTransform'] | ResponsiveStyle<CSS['textTransform']>
}

export const typography = css<TypographyProps>`
  ${({ fontFamily: T, theme }) => T && parser('fontFamily', T, theme)}
  ${({ fontSize: T, theme }) => T && parser('fontSize', T, theme)} 
  ${({ fontWeight: T, theme }) => T && parser('fontWeight', T, theme)}
  ${({ lineHeight: T, theme }) => T && parser('lineHeight', T, theme)}
  ${({ letterSpacing: T, theme }) => T && parser('letterSpacing', T, theme)}
  ${({ textAlign: T, theme }) => T && parser('textAlign', T, theme)}
  ${({ fontStyle: T, theme }) => T && parser('fontStyle', T, theme)}
  ${({ textTransform: T, theme }) => T && parser('textTransform', T, theme)}
`
