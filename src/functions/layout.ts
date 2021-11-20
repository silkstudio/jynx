import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface LayoutProps {
  width?: CSSProperties['width'] | ResponsiveStyle<CSSProperties['width']>
  height?: CSSProperties['height'] | ResponsiveStyle<CSSProperties['height']>
  minWidth?: CSSProperties['minWidth'] | ResponsiveStyle<CSSProperties['minWidth']>
  minHeight?: CSSProperties['minHeight'] | ResponsiveStyle<CSSProperties['minHeight']>
  maxWidth?: CSSProperties['maxWidth'] | ResponsiveStyle<CSSProperties['maxWidth']>
  maxHeight?: CSSProperties['maxHeight'] | ResponsiveStyle<CSSProperties['maxHeight']>
  display?: CSSProperties['display'] | ResponsiveStyle<CSSProperties['display']>
  verticalAlign?: CSSProperties['verticalAlign'] | ResponsiveStyle<CSSProperties['verticalAlign']>
  overflow?: CSSProperties['overflow'] | ResponsiveStyle<CSSProperties['overflow']>
  overflowX?: CSSProperties['overflowX'] | ResponsiveStyle<CSSProperties['overflowX']>
  overflowY?: CSSProperties['overflowY'] | ResponsiveStyle<CSSProperties['overflowY']>
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
