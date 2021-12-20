// Types
import type { StyleProp, StylePropWithScale } from '../types/css'
import type { StyleFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'

/*








*/

const config: StyleFunctionConfig = {
  color: {
    property: 'color',
    scale: 'colors'
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  },
  opacity: {
    property: 'opacity'
  }
}

interface ColorBaseProps {
  color?: StylePropWithScale<'color', 'colors'>
  backgroundColor?: StylePropWithScale<'color', 'colors'>
  opacity?: StyleProp<'opacity'>
}

interface ColorShorthandProps {
  bgColor?: ColorBaseProps['backgroundColor']
}

interface ColorProps extends ColorBaseProps, ColorShorthandProps {}

config.bgColor = config.backgroundColor

const color = createStyleFunction<ColorProps>(config)

export { color, config as colorConfig, ColorProps, ColorBaseProps, ColorShorthandProps }
