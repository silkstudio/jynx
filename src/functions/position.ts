// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunction, StyledFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction, createStylesObject } from '../constructors'

/*








*/

const config: StyledFunctionConfig = {
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
  position?: CSSProperties['position'] | ResponsiveStyle<CSSProperties['position']>
  top?: CSSProperties['top'] | ResponsiveStyle<CSSProperties['top']>
  right?: CSSProperties['right'] | ResponsiveStyle<CSSProperties['right']>
  bottom?: CSSProperties['bottom'] | ResponsiveStyle<CSSProperties['bottom']>
  left?: CSSProperties['left'] | ResponsiveStyle<CSSProperties['left']>
  zIndex?: CSSProperties['zIndex'] | ResponsiveStyle<CSSProperties['zIndex']>
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
