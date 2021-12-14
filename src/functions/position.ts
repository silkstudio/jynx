// Types
import type { CSSProperties } from '../types/css'
import { ResponsiveStyle, StyledFunction, StyledFunctionConfig } from '../types'

// Utils
import { createStyles } from '../constructors'

/*








*/

const config: StyledFunctionConfig = {
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
  top?: CSSProperties['top'] | ResponsiveStyle<CSSProperties['top']>
  right?: CSSProperties['right'] | ResponsiveStyle<CSSProperties['right']>
  bottom?: CSSProperties['bottom'] | ResponsiveStyle<CSSProperties['bottom']>
  left?: CSSProperties['left'] | ResponsiveStyle<CSSProperties['left']>
  zIndex?: CSSProperties['zIndex'] | ResponsiveStyle<CSSProperties['zIndex']>
}

const position: StyledFunction<PositionProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { position, PositionProps }
