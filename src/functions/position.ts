// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunction, StyledFunctionConfig } from '../types/functions'

// Utils
import { createStylesObject } from '../constructors'

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

interface PositionProps {
  position?: CSSProperties['position'] | ResponsiveStyle<CSSProperties['position']>
  pos?: CSSProperties['position'] | ResponsiveStyle<CSSProperties['position']>
  top?: CSSProperties['top'] | ResponsiveStyle<CSSProperties['top']>
  right?: CSSProperties['right'] | ResponsiveStyle<CSSProperties['right']>
  bottom?: CSSProperties['bottom'] | ResponsiveStyle<CSSProperties['bottom']>
  left?: CSSProperties['left'] | ResponsiveStyle<CSSProperties['left']>
  zIndex?: CSSProperties['zIndex'] | ResponsiveStyle<CSSProperties['zIndex']>
  z?: CSSProperties['zIndex'] | ResponsiveStyle<CSSProperties['zIndex']>
}

const position: StyledFunction<PositionProps> = ({ theme, ...styles }) => {
  return createStylesObject<PositionProps>(styles, theme, config)
}

config.pos = config.position
config.z = config.zIndex

export { position, PositionProps }
