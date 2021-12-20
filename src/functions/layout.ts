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
    scale: 'space',
    transformer: lengthTransformer
  },
  height: {
    property: 'height',
    scale: 'space',
    transformer: lengthTransformer
  },
  minWidth: {
    property: 'minWidth',
    scale: 'space'
  },
  minHeight: {
    property: 'minHeight',
    scale: 'space'
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'space'
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'space'
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
  width?: StyleProp<Property.Width<ThemeValue<'space'> | number>>
  height?: StyleProp<Property.Height<ThemeValue<'space'> | number>>
  minWidth?: StyleProp<Property.MinWidth<ThemeValue<'space'> | number>>
  minHeight?: StyleProp<Property.MinHeight<ThemeValue<'space'> | number>>
  maxWidth?: StyleProp<Property.MaxWidth<ThemeValue<'space'> | number>>
  maxHeight?: StyleProp<Property.MaxHeight<ThemeValue<'space'> | number>>
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
