import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { styleParser } from '../parsers/styleParser'

/*








*/

export interface BackgroundProps {
  backgroundAttachment?: CSSProperties['backgroundAttachment'] | ResponsiveStyle<CSSProperties['backgroundAttachment']>
  backgroundBlendMode?: CSSProperties['backgroundBlendMode'] | ResponsiveStyle<CSSProperties['backgroundBlendMode']>
  backgroundClip?: CSSProperties['backgroundClip'] | ResponsiveStyle<CSSProperties['backgroundClip']>
  backgroundColor?: CSSProperties['backgroundColor'] | ResponsiveStyle<CSSProperties['backgroundColor']>
  backgroundImage?: CSSProperties['backgroundImage'] | ResponsiveStyle<CSSProperties['backgroundImage']>
  backgroundOrigin?: CSSProperties['backgroundOrigin'] | ResponsiveStyle<CSSProperties['backgroundOrigin']>
  backgroundPosition?: CSSProperties['backgroundPosition'] | ResponsiveStyle<CSSProperties['backgroundPosition']>
  backgroundPositionX?: CSSProperties['backgroundPositionX'] | ResponsiveStyle<CSSProperties['backgroundPositionX']>
  backgroundPositionY?: CSSProperties['backgroundPositionY'] | ResponsiveStyle<CSSProperties['backgroundPositionY']>
  backgroundRepeat?: CSSProperties['backgroundRepeat'] | ResponsiveStyle<CSSProperties['backgroundRepeat']>
  backgroundSize?: CSSProperties['backgroundSize'] | ResponsiveStyle<CSSProperties['backgroundSize']>
}

export const background = css<BackgroundProps>`
  ${({ backgroundAttachment: T, theme: t }) => T && styleParser('backgroundAttachment', T, t)}
  ${({ backgroundBlendMode: T, theme: t }) => T && styleParser('backgroundBlendMode', T, t)}
  ${({ backgroundClip: T, theme: t }) => T && styleParser('backgroundClip', T, t)}
  ${({ backgroundColor: T, theme: t }) => T && styleParser('backgroundColor', T, t)}
  ${({ backgroundImage: T, theme: t }) => T && styleParser('backgroundImage', T, t)}
  ${({ backgroundOrigin: T, theme: t }) => T && styleParser('backgroundOrigin', T, t)}
  ${({ backgroundPosition: T, theme: t }) => T && styleParser('backgroundPosition', T, t)}
  ${({ backgroundPositionX: T, theme: t }) => T && styleParser('backgroundPositionX', T, t)}
  ${({ backgroundPositionY: T, theme: t }) => T && styleParser('backgroundPositionY', T, t)}
  ${({ backgroundRepeat: T, theme: t }) => T && styleParser('backgroundRepeat', T, t)}
  ${({ backgroundSize: T, theme: t }) => T && styleParser('backgroundSize', T, t)}
`
