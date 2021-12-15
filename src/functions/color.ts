// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'

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
  bgColor?: CSSProperties['backgroundColor'] | ResponsiveStyle<CSSProperties['backgroundColor']>
  opacity?: CSSProperties['opacity'] | ResponsiveStyle<CSSProperties['opacity']>
}

config.bgColor = config.backgroundColor

const color = createStyleFunction<ColorProps>(config)

export { color, config as colorConfig, ColorProps }
