// Types
import type { Property } from 'csstype'
import type { StyleProp } from '../types/css'
import type { ThemeValue } from '../types/theme'
import type { StyleFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'
import { lengthTransformer } from '../transformers/layout'

/*








*/

const config: StyleFunctionConfig = {
  width: {
    property: 'width',
    scale: 'spaces',
    transformer: lengthTransformer
  },
  height: {
    property: 'height',
    scale: 'spaces',
    transformer: lengthTransformer
  },
  minWidth: {
    property: 'minWidth',
    scale: 'spaces'
  },
  minHeight: {
    property: 'minHeight',
    scale: 'spaces'
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'spaces'
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'spaces'
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
  width?: StyleProp<Property.Width<ThemeValue<'spaces'> | number>>
  height?: StyleProp<Property.Height<ThemeValue<'spaces'> | number>>
  minWidth?: StyleProp<Property.MinWidth<ThemeValue<'spaces'> | number>>
  minHeight?: StyleProp<Property.MinHeight<ThemeValue<'spaces'> | number>>
  maxWidth?: StyleProp<Property.MaxWidth<ThemeValue<'spaces'> | number>>
  maxHeight?: StyleProp<Property.MaxHeight<ThemeValue<'spaces'> | number>>
  display?: StyleProp<Property.Display>
  transform?: StyleProp<Property.Transform>
  transformOrigin?: StyleProp<Property.TransformOrigin>
  overflow?: StyleProp<Property.Overflow>
  overflowX?: StyleProp<Property.OverflowX>
  overflowY?: StyleProp<Property.OverflowY>
  verticalAlign?: StyleProp<Property.VerticalAlign>
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
