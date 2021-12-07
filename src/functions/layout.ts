// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle, StyledFunction, StyledFunctionConfig } from '../types'

// Utils
import { createStyles } from '../parsers'

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

const layout: StyledFunction<LayoutProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { layout, LayoutProps }
