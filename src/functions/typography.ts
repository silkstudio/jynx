import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface TypographyProps {
  fontFamily?: CSSProperties['fontFamily'] | ResponsiveStyle<CSSProperties['fontFamily']>
  fontSize?: CSSProperties['fontSize'] | ResponsiveStyle<CSSProperties['fontSize']>
  fontWeight?: CSSProperties['fontWeight'] | ResponsiveStyle<CSSProperties['fontWeight']>
  lineHeight?: CSSProperties['lineHeight'] | ResponsiveStyle<CSSProperties['lineHeight']>
  letterSpacing?: CSSProperties['letterSpacing'] | ResponsiveStyle<CSSProperties['letterSpacing']>
  textAlign?: CSSProperties['textAlign'] | ResponsiveStyle<CSSProperties['textAlign']>
  fontStyle?: CSSProperties['fontStyle'] | ResponsiveStyle<CSSProperties['fontStyle']>
  textTransform?: CSSProperties['textTransform'] | ResponsiveStyle<CSSProperties['textTransform']>
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
