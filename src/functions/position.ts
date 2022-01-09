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
  top?: StyleProp<Property.Top<string | 0 | number> | ThemeValue<'space'>>
  right?: StyleProp<Property.Right<string | 0 | number> | ThemeValue<'space'>>
  bottom?: StyleProp<Property.Bottom<string | 0 | number> | ThemeValue<'space'>>
  left?: StyleProp<Property.Left<string | 0 | number> | ThemeValue<'space'>>
  zIndex?: StyleProp<Property.ZIndex | ThemeValue<'zIndices'>>
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
