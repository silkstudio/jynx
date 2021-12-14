// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunction, StyledFunctionConfig } from '../types/functions'

// Utils
import { createStyles } from '../constructors'

/*








*/

const config: StyledFunctionConfig = {
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  },
  color: {
    property: 'color',
    scale: 'colors'
  }
}

interface BackgroundProps {
  backgroundAttachment?: CSSProperties['backgroundAttachment'] | ResponsiveStyle<CSSProperties['backgroundAttachment']>
  backgroundBlendMode?: CSSProperties['backgroundBlendMode'] | ResponsiveStyle<CSSProperties['backgroundBlendMode']>
  backgroundClip?: CSSProperties['backgroundClip'] | ResponsiveStyle<CSSProperties['backgroundClip']>
  backgroundColor?: CSSProperties['backgroundColor'] | ResponsiveStyle<CSSProperties['backgroundColor']>
  backgroundImage?: CSSProperties['backgroundImage'] | ResponsiveStyle<CSSProperties['backgroundImage']>
  backgroundOrigin?: CSSProperties['backgroundOrigin'] | ResponsiveStyle<CSSProperties['backgroundOrigin']>
  backgroundPosition?: CSSProperties['backgroundPosition'] | ResponsiveStyle<CSSProperties['backgroundPosition']>
  backgroundPositionX?: CSSProperties['backgroundPositionX'] | ResponsiveStyle<CSSProperties['backgroundPositionX']>
  backgroundPositionY?: CSSProperties['backgroundPositionY'] | ResponsiveStyle<CSSProperties['backgroundPositionY']>
  backgroundRepeat?: CSSProperties['backgroundRepeat'] | ResponsiveStyle<CSSProperties['backgroundRepeat']>
  backgroundSize?: CSSProperties['backgroundSize'] | ResponsiveStyle<CSSProperties['backgroundSize']>
}

const background: StyledFunction<BackgroundProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { background, BackgroundProps }
