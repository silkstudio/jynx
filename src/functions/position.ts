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
  position: {
    property: 'position'
  },
  top: {
    property: 'top',
    scale: 'space'
  },
  right: {
    property: 'right',
    scale: 'space'
  },
  bottom: {
    property: 'bottom',
    scale: 'space'
  },
  left: {
    property: 'left',
    scale: 'space'
  },
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  }
}

interface PositionBaseProps {
  position?: StyleProp<Property.Position>
  top?: StyleProp<Property.Top<ThemeValue<'space'> | number>>
  right?: StyleProp<Property.Right<ThemeValue<'space'> | number>>
  bottom?: StyleProp<Property.Bottom<ThemeValue<'space'> | number>>
  left?: StyleProp<Property.Left<ThemeValue<'space'> | number>>
  zIndex?: StyleProp<Property.ZIndex | ThemeValue<'zIndices'> | number>
}

interface PositionShorthandProps {
  pos?: PositionBaseProps['position']
  z?: PositionBaseProps['zIndex']
}

interface PositionProps extends PositionBaseProps, PositionShorthandProps {}

config.pos = config.position
config.z = config.zIndex

const position = createStyleFunction<PositionProps>(config)

export { position, config as positionConfig, PositionProps, PositionBaseProps, PositionShorthandProps }
