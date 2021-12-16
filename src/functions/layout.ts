// Types

import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'
import { lengthTransformer } from '../transformers/layout'

/*








*/

const config: StyledFunctionConfig = {
  width: {
    property: 'width',
    transformer: lengthTransformer
  },
  height: {
    property: 'height',
    transformer: lengthTransformer
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

interface LayoutBaseProps {
  width?: CSSProperties['width'] | ResponsiveStyle<CSSProperties['width']>
  height?: CSSProperties['height'] | ResponsiveStyle<CSSProperties['height']>
  minWidth?: CSSProperties['minWidth'] | ResponsiveStyle<CSSProperties['minWidth']>
  minHeight?: CSSProperties['minHeight'] | ResponsiveStyle<CSSProperties['minHeight']>
  maxWidth?: CSSProperties['maxWidth'] | ResponsiveStyle<CSSProperties['maxWidth']>
  maxHeight?: CSSProperties['maxHeight'] | ResponsiveStyle<CSSProperties['maxHeight']>
  display?: CSSProperties['display'] | ResponsiveStyle<CSSProperties['display']>
  transform?: CSSProperties['transform'] | ResponsiveStyle<CSSProperties['transform']>
  transformOrigin?: CSSProperties['transformOrigin'] | ResponsiveStyle<CSSProperties['transformOrigin']>
  overflow?: CSSProperties['overflow'] | ResponsiveStyle<CSSProperties['overflow']>
  overflowX?: CSSProperties['overflowX'] | ResponsiveStyle<CSSProperties['overflowX']>
  overflowY?: CSSProperties['overflowY'] | ResponsiveStyle<CSSProperties['overflowY']>
  verticalAlign?: CSSProperties['verticalAlign'] | ResponsiveStyle<CSSProperties['verticalAlign']>
}

interface LayoutShorthandProps {
  w?: LayoutBaseProps['width']
  h?: LayoutBaseProps['height']
  minW?: LayoutBaseProps['minWidth']
  minH?: LayoutBaseProps['minHeight']
  maxW?: LayoutBaseProps['maxWidth']
  maxH?: LayoutBaseProps['maxHeight']
  d?: LayoutBaseProps['display']
  t?: LayoutBaseProps['transform']
  vAlign?: LayoutBaseProps['verticalAlign']
}

interface LayoutProps extends LayoutBaseProps, LayoutShorthandProps {}

config.w = config.width
config.h = config.height
config.minW = config.minWidth
config.minH = config.minHeight
config.maxW = config.maxWidth
config.maxH = config.maxHeight
config.d = config.display
config.t = config.transform
config.vAlign = config.verticalAlign

const layout = createStyleFunction<LayoutProps>(config)

export { layout, config as layoutConfig, LayoutProps }
