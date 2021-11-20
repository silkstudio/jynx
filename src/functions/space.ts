import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface SpaceProps {
  margin?: CSSProperties['margin'] | ResponsiveStyle<CSSProperties['margin']>
  marginTop?: CSSProperties['marginTop'] | ResponsiveStyle<CSSProperties['marginTop']>
  marginRight?: CSSProperties['marginRight'] | ResponsiveStyle<CSSProperties['marginRight']>
  marginBottom?: CSSProperties['marginBottom'] | ResponsiveStyle<CSSProperties['marginBottom']>
  marginLeft?: CSSProperties['marginLeft'] | ResponsiveStyle<CSSProperties['marginLeft']>
  marginBlock?: CSSProperties['marginBlock'] | ResponsiveStyle<CSSProperties['marginBlock']>
  marginBlockStart?: CSSProperties['marginBlockStart'] | ResponsiveStyle<CSSProperties['marginBlockStart']>
  marginBlockEnd?: CSSProperties['marginBlockEnd'] | ResponsiveStyle<CSSProperties['marginBlockEnd']>
  marginInline?: CSSProperties['marginInline'] | ResponsiveStyle<CSSProperties['marginInline']>
  marginInlineStart?: CSSProperties['marginInlineStart'] | ResponsiveStyle<CSSProperties['marginInlineStart']>
  marginInlineEnd?: CSSProperties['marginInlineEnd'] | ResponsiveStyle<CSSProperties['marginInlineEnd']>
  padding?: CSSProperties['padding'] | ResponsiveStyle<CSSProperties['padding']>
  paddingTop?: CSSProperties['paddingTop'] | ResponsiveStyle<CSSProperties['paddingTop']>
  paddingRight?: CSSProperties['paddingRight'] | ResponsiveStyle<CSSProperties['paddingRight']>
  paddingBottom?: CSSProperties['paddingBottom'] | ResponsiveStyle<CSSProperties['paddingBottom']>
  paddingLeft?: CSSProperties['paddingLeft'] | ResponsiveStyle<CSSProperties['paddingLeft']>
  paddingBlock?: CSSProperties['paddingBlock'] | ResponsiveStyle<CSSProperties['paddingBlock']>
  paddingBlockStart?: CSSProperties['paddingBlockStart'] | ResponsiveStyle<CSSProperties['paddingBlockStart']>
  paddingBlockEnd?: CSSProperties['paddingBlockEnd'] | ResponsiveStyle<CSSProperties['paddingBlockEnd']>
  paddingInline?: CSSProperties['paddingInline'] | ResponsiveStyle<CSSProperties['paddingInline']>
  paddingInlineStart?: CSSProperties['paddingInlineStart'] | ResponsiveStyle<CSSProperties['paddingInlineStart']>
  paddingInlineEnd?: CSSProperties['paddingInlineEnd'] | ResponsiveStyle<CSSProperties['paddingInlineEnd']>
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
