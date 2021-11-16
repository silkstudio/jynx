import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { styleParser } from '../parsers/styleParser'

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
  ${({ fontFamily: T, theme }) => T && styleParser('fontFamily', T, theme)}
  ${({ fontSize: T, theme }) => T && styleParser('fontSize', T, theme)} 
  ${({ fontWeight: T, theme }) => T && styleParser('fontWeight', T, theme)}
  ${({ lineHeight: T, theme }) => T && styleParser('lineHeight', T, theme)}
  ${({ letterSpacing: T, theme }) => T && styleParser('letterSpacing', T, theme)}
  ${({ textAlign: T, theme }) => T && styleParser('textAlign', T, theme)}
  ${({ fontStyle: T, theme }) => T && styleParser('fontStyle', T, theme)}
  ${({ textTransform: T, theme }) => T && styleParser('textTransform', T, theme)}
`
