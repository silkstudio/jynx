// Types
import type { StyleProp, StylePropWithScale } from '../types/css'
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
  position?: StyleProp<'position'>
  top?: StylePropWithScale<'top', 'spaces'>
  right?: StylePropWithScale<'right', 'spaces'>
  bottom?: StylePropWithScale<'bottom', 'spaces'>
  left?: StylePropWithScale<'left', 'spaces'>
  zIndex?: StyleProp<'zIndex'>
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
