import { css } from 'styled-components'

// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface SpaceProps {
  margin?: CSS['margin'] | ResponsiveStyle<CSS['margin']>
  marginTop?: CSS['marginTop'] | ResponsiveStyle<CSS['marginTop']>
  marginRight?: CSS['marginRight'] | ResponsiveStyle<CSS['marginRight']>
  marginBottom?: CSS['marginBottom'] | ResponsiveStyle<CSS['marginBottom']>
  marginLeft?: CSS['marginLeft'] | ResponsiveStyle<CSS['marginLeft']>
  marginBlock?: CSS['marginBlock'] | ResponsiveStyle<CSS['marginBlock']>
  marginBlockStart?: CSS['marginBlockStart'] | ResponsiveStyle<CSS['marginBlockStart']>
  marginBlockEnd?: CSS['marginBlockEnd'] | ResponsiveStyle<CSS['marginBlockEnd']>
  marginInline?: CSS['marginInline'] | ResponsiveStyle<CSS['marginInline']>
  marginInlineStart?: CSS['marginInlineStart'] | ResponsiveStyle<CSS['marginInlineStart']>
  marginInlineEnd?: CSS['marginInlineEnd'] | ResponsiveStyle<CSS['marginInlineEnd']>
  padding?: CSS['padding'] | ResponsiveStyle<CSS['padding']>
  paddingTop?: CSS['paddingTop'] | ResponsiveStyle<CSS['paddingTop']>
  paddingRight?: CSS['paddingRight'] | ResponsiveStyle<CSS['paddingRight']>
  paddingBottom?: CSS['paddingBottom'] | ResponsiveStyle<CSS['paddingBottom']>
  paddingLeft?: CSS['paddingLeft'] | ResponsiveStyle<CSS['paddingLeft']>
  paddingBlock?: CSS['paddingBlock'] | ResponsiveStyle<CSS['paddingBlock']>
  paddingBlockStart?: CSS['paddingBlockStart'] | ResponsiveStyle<CSS['paddingBlockStart']>
  paddingBlockEnd?: CSS['paddingBlockEnd'] | ResponsiveStyle<CSS['paddingBlockEnd']>
  paddingInline?: CSS['paddingInline'] | ResponsiveStyle<CSS['paddingInline']>
  paddingInlineStart?: CSS['paddingInlineStart'] | ResponsiveStyle<CSS['paddingInlineStart']>
  paddingInlineEnd?: CSS['paddingInlineEnd'] | ResponsiveStyle<CSS['paddingInlineEnd']>
}

export const space = css<SpaceProps>`
  ${({ margin: T, theme: t }) => parser('margin', T, t)}
  ${({ marginTop: T, theme: t }) => parser('marginTop', T, t)}
  ${({ marginRight: T, theme: t }) => parser('marginRight', T, t)}
  ${({ marginBottom: T, theme: t }) => parser('marginBottom', T, t)}
  ${({ marginLeft: T, theme: t }) => parser('marginLeft', T, t)}
  ${({ marginBlock: T, theme: t }) => parser('marginBlock', T, t)}
  ${({ marginBlockStart: T, theme: t }) => parser('marginBlockStart', T, t)}
  ${({ marginBlockEnd: T, theme: t }) => parser('marginBlockEnd', T, t)}
  ${({ marginInline: T, theme: t }) => parser('marginInline', T, t)}
  ${({ marginInlineStart: T, theme: t }) => parser('marginInlineStart', T, t)}
  ${({ marginInlineEnd: T, theme: t }) => parser('marginInlineEnd', T, t)}
  ${({ padding: T, theme: t }) => parser('padding', T, t)}
  ${({ paddingTop: T, theme: t }) => parser('paddingTop', T, t)}
  ${({ paddingRight: T, theme: t }) => parser('paddingRight', T, t)}
  ${({ paddingBottom: T, theme: t }) => parser('paddingBottom', T, t)}
  ${({ paddingLeft: T, theme: t }) => parser('paddingLeft', T, t)}
  ${({ paddingBlock: T, theme: t }) => parser('paddingBlock', T, t)}
  ${({ paddingBlockStart: T, theme: t }) => parser('paddingBlockStart', T, t)}
  ${({ paddingBlockEnd: T, theme: t }) => parser('paddingBlockEnd', T, t)}
  ${({ paddingInline: T, theme: t }) => parser('paddingInline', T, t)}
  ${({ paddingInlineStart: T, theme: t }) => parser('paddingInlineStart', T, t)}
  ${({ paddingInlineEnd: T, theme: t }) => parser('paddingInlineEnd', T, t)}
`
