// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle, StyledFunction, StyledFunctionConfig } from '../types'

// Utils
import { createStyles } from '../utils'

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
  top?: CSS['top'] | ResponsiveStyle<CSS['top']>
  right?: CSS['right'] | ResponsiveStyle<CSS['right']>
  bottom?: CSS['bottom'] | ResponsiveStyle<CSS['bottom']>
  left?: CSS['left'] | ResponsiveStyle<CSS['left']>
  zIndex?: CSS['zIndex'] | ResponsiveStyle<CSS['zIndex']>
}

const position: StyledFunction<PositionProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { position, PositionProps }
