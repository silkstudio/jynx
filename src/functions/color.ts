// Types
import type { Property } from 'csstype'
import type { StyleProp } from '../types/css'
import type { ThemeValue } from '../types/theme'
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
  color?: StyleProp<Property.Color | ThemeValue<'colors'>>
  backgroundColor?: StyleProp<Property.BackgroundColor | ThemeValue<'colors'>>
  opacity?: StyleProp<Property.Opacity>
}

interface ColorShorthandProps {
  bgColor?: ColorBaseProps['backgroundColor']
}

interface ColorProps extends ColorBaseProps, ColorShorthandProps {}

config.bgColor = config.backgroundColor

const color = createStyleFunction<ColorProps>(config)

export { color, config as colorConfig, ColorProps, ColorBaseProps, ColorShorthandProps }
