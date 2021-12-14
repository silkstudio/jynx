// Types
import type { CSSProperties } from '../types/css'
import { ResponsiveStyle, StyledFunctionConfig, StyledFunction } from '../types'

// Utils
import { createStyles } from '../constructors'

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
  color?: CSSProperties['color'] | ResponsiveStyle<CSSProperties['color']>
  backgroundColor?: CSSProperties['backgroundColor'] | ResponsiveStyle<CSSProperties['backgroundColor']>
  opacity?: CSSProperties['opacity'] | ResponsiveStyle<CSSProperties['opacity']>
}

const color: StyledFunction<ColorProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { color, ColorProps, config }
