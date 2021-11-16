import { CSSProperties, css } from 'styled-components'

// Types
import { Border, ResponsiveStyle } from '../types'

// Utils
import { styleParser } from '../parsers/styleParser'

/*








*/

export interface BorderProps {
  border?: CSSProperties['border'] | ResponsiveStyle<CSSProperties['border']>
  borderWidth?: CSSProperties['borderWidth'] | ResponsiveStyle<CSSProperties['borderWidth']>
  borderStyle?: CSSProperties['borderStyle'] | ResponsiveStyle<CSSProperties['borderStyle']>
  borderColor?: CSSProperties['borderColor'] | ResponsiveStyle<CSSProperties['borderColor']>
  borderRadius?: CSSProperties['borderRadius'] | ResponsiveStyle<CSSProperties['borderRadius']>
  borderTop?: CSSProperties['borderTop'] | ResponsiveStyle<CSSProperties['borderTop']>
  borderTopWidth?: CSSProperties['borderTopWidth'] | ResponsiveStyle<CSSProperties['borderTopWidth']>
  borderTopStyle?: CSSProperties['borderTopStyle'] | ResponsiveStyle<CSSProperties['borderTopStyle']>
  borderTopColor?: CSSProperties['borderTopColor'] | ResponsiveStyle<CSSProperties['borderTopColor']>
  borderTopLeftRadius?: CSSProperties['borderTopLeftRadius'] | ResponsiveStyle<CSSProperties['borderTopLeftRadius']>
  borderTopRightRadius?: CSSProperties['borderTopRightRadius'] | ResponsiveStyle<CSSProperties['borderTopRightRadius']>
  borderRight?: CSSProperties['borderRight'] | ResponsiveStyle<CSSProperties['borderRight']>
  borderRightWidth?: CSSProperties['borderRightWidth'] | ResponsiveStyle<CSSProperties['borderRightWidth']>
  borderRightStyle?: CSSProperties['borderRightStyle'] | ResponsiveStyle<CSSProperties['borderRightStyle']>
  borderRightColor?: CSSProperties['borderRightColor'] | ResponsiveStyle<CSSProperties['borderRightColor']>
  borderBottom?: CSSProperties['borderBottom'] | ResponsiveStyle<CSSProperties['borderBottom']>
  borderBottomWidth?: CSSProperties['borderBottomWidth'] | ResponsiveStyle<CSSProperties['borderBottomWidth']>
  borderBottomStyle?: CSSProperties['borderBottomStyle'] | ResponsiveStyle<CSSProperties['borderBottomStyle']>
  borderBottomColor?: CSSProperties['borderBottomColor'] | ResponsiveStyle<CSSProperties['borderBottomColor']>
  borderBottomLeftRadius?: CSSProperties['borderBottomLeftRadius'] | ResponsiveStyle<CSSProperties['borderBottomLeftRadius']>
  borderBottomRightRadius?: CSSProperties['borderBottomRightRadius'] | ResponsiveStyle<CSSProperties['borderBottomRightRadius']>
  borderLeft?: CSSProperties['borderLeft'] | ResponsiveStyle<CSSProperties['borderLeft']>
  borderLeftWidth?: CSSProperties['borderLeftWidth'] | ResponsiveStyle<CSSProperties['borderLeftWidth']>
  borderLeftStyle?: CSSProperties['borderLeftStyle'] | ResponsiveStyle<CSSProperties['borderLeftStyle']>
  borderLeftColor?: CSSProperties['borderLeftColor'] | ResponsiveStyle<CSSProperties['borderLeftColor']>
}

export const border = css<BorderProps>`
  ${({ border: T, theme }) => T && styleParser('border', T, theme)}
  ${({ borderWidth: T, theme }) => T && styleParser('borderWidth', T, theme)}
  ${({ borderStyle: T, theme }) => T && styleParser('borderStyle', T, theme)}
  ${({ borderColor: T, theme }) => T && styleParser('borderColor', T, theme)}
  ${({ borderRadius: T, theme }) => T && styleParser('borderRadius', T, theme)}
  ${({ borderTop: T, theme }) => T && styleParser('borderTop', T, theme)}
  ${({ borderTopWidth: T, theme }) => T && styleParser('borderTopWidth', T, theme)}
  ${({ borderTopStyle: T, theme }) => T && styleParser('borderTopStyle', T, theme)}
  ${({ borderTopColor: T, theme }) => T && styleParser('borderTopColor', T, theme)}
  ${({ borderTopLeftRadius: T, theme }) => T && styleParser('borderTopLeftRadius', T, theme)}
  ${({ borderTopRightRadius: T, theme }) => T && styleParser('borderTopRightRadius', T, theme)}
  ${({ borderRight: T, theme }) => T && styleParser('borderRight', T, theme)}
  ${({ borderRightWidth: T, theme }) => T && styleParser('borderRightWidth', T, theme)}
  ${({ borderRightStyle: T, theme }) => T && styleParser('borderRightStyle', T, theme)}
  ${({ borderRightColor: T, theme }) => T && styleParser('borderRightColor', T, theme)}
  ${({ borderBottom: T, theme }) => T && styleParser('borderBottom', T, theme)}
  ${({ borderBottomWidth: T, theme }) => T && styleParser('borderBottomWidth', T, theme)}
  ${({ borderBottomStyle: T, theme }) => T && styleParser('borderBottomStyle', T, theme)}
  ${({ borderBottomColor: T, theme }) => T && styleParser('borderBottomColor', T, theme)}
  ${({ borderBottomLeftRadius: T, theme }) => T && styleParser('borderBottomLeftRadius', T, theme)}
  ${({ borderBottomRightRadius: T, theme }) => T && styleParser('borderBottomRightRadius', T, theme)}
  ${({ borderLeft: T, theme }) => T && styleParser('borderLeft', T, theme)}
  ${({ borderLeftWidth: T, theme }) => T && styleParser('borderLeftWidth', T, theme)}
  ${({ borderLeftStyle: T, theme }) => T && styleParser('borderLeftStyle', T, theme)}
  ${({ borderLeftColor: T, theme }) => T && styleParser('borderLeftColor', T, theme)}
`
