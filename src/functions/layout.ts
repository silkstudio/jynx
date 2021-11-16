import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { styleParser } from '../parsers/styleParser'

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
  ${({ width: T, theme }) => T && styleParser('width', T, theme)}
  ${({ height: T, theme }) => T && styleParser('height', T, theme)}
  ${({ minWidth: T, theme }) => T && styleParser('minWidth', T, theme)}
  ${({ minHeight: T, theme }) => T && styleParser('minHeight', T, theme)}
  ${({ maxWidth: T, theme }) => T && styleParser('maxWidth', T, theme)}
  ${({ maxHeight: T, theme }) => T && styleParser('maxHeight', T, theme)}
  ${({ display: T, theme }) => T && styleParser('display', T, theme)}
  ${({ verticalAlign: T, theme }) => T && styleParser('verticalAlign', T, theme)}
  ${({ overflow: T, theme }) => T && styleParser('overflow', T, theme)}
  ${({ overflowX: T, theme }) => T && styleParser('overflowX', T, theme)}
  ${({ overflowY: T, theme }) => T && styleParser('overflowY', T, theme)}
`
