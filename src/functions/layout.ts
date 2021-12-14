// Types
import type { CSSProperties } from '../types/css'
import { ResponsiveStyle, StyledFunction, StyledFunctionConfig } from '../types'

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

const layout: StyledFunction<LayoutProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { layout, LayoutProps }
