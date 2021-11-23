import { css } from 'styled-components'

// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface BackgroundProps {
  backgroundAttachment?: CSS['backgroundAttachment'] | ResponsiveStyle<CSS['backgroundAttachment']>
  backgroundBlendMode?: CSS['backgroundBlendMode'] | ResponsiveStyle<CSS['backgroundBlendMode']>
  backgroundClip?: CSS['backgroundClip'] | ResponsiveStyle<CSS['backgroundClip']>
  backgroundColor?: CSS['backgroundColor'] | ResponsiveStyle<CSS['backgroundColor']>
  backgroundImage?: CSS['backgroundImage'] | ResponsiveStyle<CSS['backgroundImage']>
  backgroundOrigin?: CSS['backgroundOrigin'] | ResponsiveStyle<CSS['backgroundOrigin']>
  backgroundPosition?: CSS['backgroundPosition'] | ResponsiveStyle<CSS['backgroundPosition']>
  backgroundPositionX?: CSS['backgroundPositionX'] | ResponsiveStyle<CSS['backgroundPositionX']>
  backgroundPositionY?: CSS['backgroundPositionY'] | ResponsiveStyle<CSS['backgroundPositionY']>
  backgroundRepeat?: CSS['backgroundRepeat'] | ResponsiveStyle<CSS['backgroundRepeat']>
  backgroundSize?: CSS['backgroundSize'] | ResponsiveStyle<CSS['backgroundSize']>
}

export const background = css<BackgroundProps>`
  ${({ backgroundAttachment: T, theme: t }) => T && parser('backgroundAttachment', T, t)}
  ${({ backgroundBlendMode: T, theme: t }) => T && parser('backgroundBlendMode', T, t)}
  ${({ backgroundClip: T, theme: t }) => T && parser('backgroundClip', T, t)}
  ${({ backgroundColor: T, theme: t }) => T && parser('backgroundColor', T, t)}
  ${({ backgroundImage: T, theme: t }) => T && parser('backgroundImage', T, t)}
  ${({ backgroundOrigin: T, theme: t }) => T && parser('backgroundOrigin', T, t)}
  ${({ backgroundPosition: T, theme: t }) => T && parser('backgroundPosition', T, t)}
  ${({ backgroundPositionX: T, theme: t }) => T && parser('backgroundPositionX', T, t)}
  ${({ backgroundPositionY: T, theme: t }) => T && parser('backgroundPositionY', T, t)}
  ${({ backgroundRepeat: T, theme: t }) => T && parser('backgroundRepeat', T, t)}
  ${({ backgroundSize: T, theme: t }) => T && parser('backgroundSize', T, t)}
`
