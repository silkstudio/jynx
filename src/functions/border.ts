import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

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
  ${({ border: T, theme }) => T && parser('border', T, theme)}
  ${({ borderWidth: T, theme }) => T && parser('borderWidth', T, theme)}
  ${({ borderStyle: T, theme }) => T && parser('borderStyle', T, theme)}
  ${({ borderColor: T, theme }) => T && parser('borderColor', T, theme)}
  ${({ borderRadius: T, theme }) => T && parser('borderRadius', T, theme)}
  ${({ borderTop: T, theme }) => T && parser('borderTop', T, theme)}
  ${({ borderTopWidth: T, theme }) => T && parser('borderTopWidth', T, theme)}
  ${({ borderTopStyle: T, theme }) => T && parser('borderTopStyle', T, theme)}
  ${({ borderTopColor: T, theme }) => T && parser('borderTopColor', T, theme)}
  ${({ borderTopLeftRadius: T, theme }) => T && parser('borderTopLeftRadius', T, theme)}
  ${({ borderTopRightRadius: T, theme }) => T && parser('borderTopRightRadius', T, theme)}
  ${({ borderRight: T, theme }) => T && parser('borderRight', T, theme)}
  ${({ borderRightWidth: T, theme }) => T && parser('borderRightWidth', T, theme)}
  ${({ borderRightStyle: T, theme }) => T && parser('borderRightStyle', T, theme)}
  ${({ borderRightColor: T, theme }) => T && parser('borderRightColor', T, theme)}
  ${({ borderBottom: T, theme }) => T && parser('borderBottom', T, theme)}
  ${({ borderBottomWidth: T, theme }) => T && parser('borderBottomWidth', T, theme)}
  ${({ borderBottomStyle: T, theme }) => T && parser('borderBottomStyle', T, theme)}
  ${({ borderBottomColor: T, theme }) => T && parser('borderBottomColor', T, theme)}
  ${({ borderBottomLeftRadius: T, theme }) => T && parser('borderBottomLeftRadius', T, theme)}
  ${({ borderBottomRightRadius: T, theme }) => T && parser('borderBottomRightRadius', T, theme)}
  ${({ borderLeft: T, theme }) => T && parser('borderLeft', T, theme)}
  ${({ borderLeftWidth: T, theme }) => T && parser('borderLeftWidth', T, theme)}
  ${({ borderLeftStyle: T, theme }) => T && parser('borderLeftStyle', T, theme)}
  ${({ borderLeftColor: T, theme }) => T && parser('borderLeftColor', T, theme)}
`
