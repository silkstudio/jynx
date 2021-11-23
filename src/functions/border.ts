import { css } from 'styled-components'

// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface BorderProps {
  border?: CSS['border'] | ResponsiveStyle<CSS['border']>
  borderWidth?: CSS['borderWidth'] | ResponsiveStyle<CSS['borderWidth']>
  borderStyle?: CSS['borderStyle'] | ResponsiveStyle<CSS['borderStyle']>
  borderColor?: CSS['borderColor'] | ResponsiveStyle<CSS['borderColor']>
  borderRadius?: CSS['borderRadius'] | ResponsiveStyle<CSS['borderRadius']>
  borderTop?: CSS['borderTop'] | ResponsiveStyle<CSS['borderTop']>
  borderTopWidth?: CSS['borderTopWidth'] | ResponsiveStyle<CSS['borderTopWidth']>
  borderTopStyle?: CSS['borderTopStyle'] | ResponsiveStyle<CSS['borderTopStyle']>
  borderTopColor?: CSS['borderTopColor'] | ResponsiveStyle<CSS['borderTopColor']>
  borderTopLeftRadius?: CSS['borderTopLeftRadius'] | ResponsiveStyle<CSS['borderTopLeftRadius']>
  borderTopRightRadius?: CSS['borderTopRightRadius'] | ResponsiveStyle<CSS['borderTopRightRadius']>
  borderRight?: CSS['borderRight'] | ResponsiveStyle<CSS['borderRight']>
  borderRightWidth?: CSS['borderRightWidth'] | ResponsiveStyle<CSS['borderRightWidth']>
  borderRightStyle?: CSS['borderRightStyle'] | ResponsiveStyle<CSS['borderRightStyle']>
  borderRightColor?: CSS['borderRightColor'] | ResponsiveStyle<CSS['borderRightColor']>
  borderBottom?: CSS['borderBottom'] | ResponsiveStyle<CSS['borderBottom']>
  borderBottomWidth?: CSS['borderBottomWidth'] | ResponsiveStyle<CSS['borderBottomWidth']>
  borderBottomStyle?: CSS['borderBottomStyle'] | ResponsiveStyle<CSS['borderBottomStyle']>
  borderBottomColor?: CSS['borderBottomColor'] | ResponsiveStyle<CSS['borderBottomColor']>
  borderBottomLeftRadius?: CSS['borderBottomLeftRadius'] | ResponsiveStyle<CSS['borderBottomLeftRadius']>
  borderBottomRightRadius?: CSS['borderBottomRightRadius'] | ResponsiveStyle<CSS['borderBottomRightRadius']>
  borderLeft?: CSS['borderLeft'] | ResponsiveStyle<CSS['borderLeft']>
  borderLeftWidth?: CSS['borderLeftWidth'] | ResponsiveStyle<CSS['borderLeftWidth']>
  borderLeftStyle?: CSS['borderLeftStyle'] | ResponsiveStyle<CSS['borderLeftStyle']>
  borderLeftColor?: CSS['borderLeftColor'] | ResponsiveStyle<CSS['borderLeftColor']>
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
