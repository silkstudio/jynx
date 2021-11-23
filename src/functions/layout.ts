import { css } from 'styled-components'

// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface LayoutProps {
  width?: CSS['width'] | ResponsiveStyle<CSS['width']>
  height?: CSS['height'] | ResponsiveStyle<CSS['height']>
  minWidth?: CSS['minWidth'] | ResponsiveStyle<CSS['minWidth']>
  minHeight?: CSS['minHeight'] | ResponsiveStyle<CSS['minHeight']>
  maxWidth?: CSS['maxWidth'] | ResponsiveStyle<CSS['maxWidth']>
  maxHeight?: CSS['maxHeight'] | ResponsiveStyle<CSS['maxHeight']>
  display?: CSS['display'] | ResponsiveStyle<CSS['display']>
  verticalAlign?: CSS['verticalAlign'] | ResponsiveStyle<CSS['verticalAlign']>
  overflow?: CSS['overflow'] | ResponsiveStyle<CSS['overflow']>
  overflowX?: CSS['overflowX'] | ResponsiveStyle<CSS['overflowX']>
  overflowY?: CSS['overflowY'] | ResponsiveStyle<CSS['overflowY']>
}

export const layout = css<LayoutProps>`
  ${({ width: T, theme }) => T && parser('width', T, theme)}
  ${({ height: T, theme }) => T && parser('height', T, theme)}
  ${({ minWidth: T, theme }) => T && parser('minWidth', T, theme)}
  ${({ minHeight: T, theme }) => T && parser('minHeight', T, theme)}
  ${({ maxWidth: T, theme }) => T && parser('maxWidth', T, theme)}
  ${({ maxHeight: T, theme }) => T && parser('maxHeight', T, theme)}
  ${({ display: T, theme }) => T && parser('display', T, theme)}
  ${({ verticalAlign: T, theme }) => T && parser('verticalAlign', T, theme)}
  ${({ overflow: T, theme }) => T && parser('overflow', T, theme)}
  ${({ overflowX: T, theme }) => T && parser('overflowX', T, theme)}
  ${({ overflowY: T, theme }) => T && parser('overflowY', T, theme)}
`
