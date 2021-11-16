import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { styleParser } from '../parsers/styleParser'

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
  ${({ margin: T, theme: t }) => styleParser('margin', T, t)}
  ${({ marginTop: T, theme: t }) => styleParser('marginTop', T, t)}
  ${({ marginRight: T, theme: t }) => styleParser('marginRight', T, t)}
  ${({ marginBottom: T, theme: t }) => styleParser('marginBottom', T, t)}
  ${({ marginLeft: T, theme: t }) => styleParser('marginLeft', T, t)}
  ${({ marginBlock: T, theme: t }) => styleParser('marginBlock', T, t)}
  ${({ marginBlockStart: T, theme: t }) => styleParser('marginBlockStart', T, t)}
  ${({ marginBlockEnd: T, theme: t }) => styleParser('marginBlockEnd', T, t)}
  ${({ marginInline: T, theme: t }) => styleParser('marginInline', T, t)}
  ${({ marginInlineStart: T, theme: t }) => styleParser('marginInlineStart', T, t)}
  ${({ marginInlineEnd: T, theme: t }) => styleParser('marginInlineEnd', T, t)}
  ${({ padding: T, theme: t }) => styleParser('padding', T, t)}
  ${({ paddingTop: T, theme: t }) => styleParser('paddingTop', T, t)}
  ${({ paddingRight: T, theme: t }) => styleParser('paddingRight', T, t)}
  ${({ paddingBottom: T, theme: t }) => styleParser('paddingBottom', T, t)}
  ${({ paddingLeft: T, theme: t }) => styleParser('paddingLeft', T, t)}
  ${({ paddingBlock: T, theme: t }) => styleParser('paddingBlock', T, t)}
  ${({ paddingBlockStart: T, theme: t }) => styleParser('paddingBlockStart', T, t)}
  ${({ paddingBlockEnd: T, theme: t }) => styleParser('paddingBlockEnd', T, t)}
  ${({ paddingInline: T, theme: t }) => styleParser('paddingInline', T, t)}
  ${({ paddingInlineStart: T, theme: t }) => styleParser('paddingInlineStart', T, t)}
  ${({ paddingInlineEnd: T, theme: t }) => styleParser('paddingInlineEnd', T, t)}
`
