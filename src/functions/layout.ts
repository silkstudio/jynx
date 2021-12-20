// Types

import type { StyleProp, StylePropWithScale } from '../types/css'
import type { StyleFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'
import { lengthTransformer } from '../transformers/layout'

/*








*/

const config: StyleFunctionConfig = {
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
  width?: StylePropWithScale<'width', 'spaces'>
  height?: StylePropWithScale<'height', 'spaces'>
  minWidth?: StylePropWithScale<'minWidth', 'spaces'>
  minHeight?: StylePropWithScale<'minHeight', 'spaces'>
  maxWidth?: StylePropWithScale<'maxWidth', 'spaces'>
  maxHeight?: StylePropWithScale<'maxHeight', 'spaces'>
  display?: StyleProp<'display'>
  transform?: StyleProp<'transform'>
  transformOrigin?: StyleProp<'transformOrigin'>
  overflow?: StyleProp<'overflow'>
  overflowX?: StyleProp<'overflowX'>
  overflowY?: StyleProp<'overflowY'>
  verticalAlign?: StyleProp<'verticalAlign'>
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
