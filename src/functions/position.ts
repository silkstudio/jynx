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
    scale: 'spaces'
  },
  right: {
    property: 'right',
    scale: 'spaces'
  },
  bottom: {
    property: 'bottom',
    scale: 'spaces'
  },
  left: {
    property: 'left',
    scale: 'spaces'
  },
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  }
}

interface PositionBaseProps {
  position?: StyleProp<Property.Position>
  top?: StyleProp<Property.Top<ThemeValue<'spaces'> | number>>
  right?: StyleProp<Property.Right<ThemeValue<'spaces'> | number>>
  bottom?: StyleProp<Property.Bottom<ThemeValue<'spaces'> | number>>
  left?: StyleProp<Property.Left<ThemeValue<'spaces'> | number>>
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
