// Types

import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunction, StyledFunctionConfig } from '../types/functions'

// Utils
import { createStyles } from '../constructors'

/*








*/

const config: StyledFunctionConfig = {
  width: {
    property: 'width'
  },
  height: {
    property: 'height'
  },
  minWidth: {
    property: 'minWidth'
  },
  minHeight: {
    property: 'minHeight'
  },
  maxWidth: {
    property: 'maxWidth'
  },
  maxHeight: {
    property: 'maxHeight'
  },
  display: {
    property: 'display'
  },
  transform: {
    property: 'transform'
  },
  transformOrigin: {
    property: 'transformOrigin'
  },
  verticalAlign: {
    property: 'verticalAlign'
  },
  overflow: {
    property: 'overflow'
  },
  overflowX: {
    property: 'overflowX'
  },
  overflowY: {
    property: 'overflowY'
  }
}

interface LayoutProps {
  width?: CSSProperties['width'] | ResponsiveStyle<CSSProperties['width']>
  w?: CSSProperties['width'] | ResponsiveStyle<CSSProperties['width']>
  height?: CSSProperties['height'] | ResponsiveStyle<CSSProperties['height']>
  h?: CSSProperties['height'] | ResponsiveStyle<CSSProperties['height']>
  minWidth?: CSSProperties['minWidth'] | ResponsiveStyle<CSSProperties['minWidth']>
  minW?: CSSProperties['minWidth'] | ResponsiveStyle<CSSProperties['minWidth']>
  minHeight?: CSSProperties['minHeight'] | ResponsiveStyle<CSSProperties['minHeight']>
  minH?: CSSProperties['minHeight'] | ResponsiveStyle<CSSProperties['minHeight']>
  maxWidth?: CSSProperties['maxWidth'] | ResponsiveStyle<CSSProperties['maxWidth']>
  maxW?: CSSProperties['maxWidth'] | ResponsiveStyle<CSSProperties['maxWidth']>
  maxHeight?: CSSProperties['maxHeight'] | ResponsiveStyle<CSSProperties['maxHeight']>
  maxH?: CSSProperties['maxHeight'] | ResponsiveStyle<CSSProperties['maxHeight']>
  display?: CSSProperties['display'] | ResponsiveStyle<CSSProperties['display']>
  d?: CSSProperties['display'] | ResponsiveStyle<CSSProperties['display']>
  transform?: CSSProperties['transform'] | ResponsiveStyle<CSSProperties['transform']>
  t?: CSSProperties['transform'] | ResponsiveStyle<CSSProperties['transform']>
  transformOrigin?: CSSProperties['transformOrigin'] | ResponsiveStyle<CSSProperties['transformOrigin']>
  overflow?: CSSProperties['overflow'] | ResponsiveStyle<CSSProperties['overflow']>
  overflowX?: CSSProperties['overflowX'] | ResponsiveStyle<CSSProperties['overflowX']>
  overflowY?: CSSProperties['overflowY'] | ResponsiveStyle<CSSProperties['overflowY']>
  verticalAlign?: CSSProperties['verticalAlign'] | ResponsiveStyle<CSSProperties['verticalAlign']>
  vAlign?: CSSProperties['verticalAlign'] | ResponsiveStyle<CSSProperties['verticalAlign']>
}

const layout: StyledFunction<LayoutProps> = ({ theme, ...styles }) => {
  return createStyles<LayoutProps>(styles, theme, config)
}

config.w = config.width
config.h = config.height
config.minW = config.minWidth
config.minH = config.minHeight
config.maxW = config.maxWidth
config.maxH = config.maxHeight
config.d = config.display
config.t = config.transform
config.vAlign = config.verticalAlign

export { layout, LayoutProps }
