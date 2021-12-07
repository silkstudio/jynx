// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle, StyledFunctionConfig, StyledFunction } from '../types'

// Utils
import { createStyles } from '../parsers'

/*








*/

const config: StyledFunctionConfig = {
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

interface ColorProps {
  color?: CSS['color'] | ResponsiveStyle<CSS['color']>
  backgroundColor?: CSS['backgroundColor'] | ResponsiveStyle<CSS['backgroundColor']>
  opacity?: CSS['opacity'] | ResponsiveStyle<CSS['opacity']>
}

const color: StyledFunction<ColorProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { color, ColorProps }
