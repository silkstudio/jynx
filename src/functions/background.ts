// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunction, StyledFunctionConfig } from '../types/functions'

// Utils
import { createStyles } from '../constructors'

/*








*/

const config: StyledFunctionConfig = {
  backgroundAttachment: {
    property: 'backgroundAttachment'
  },
  backgroundBlendMode: {
    property: 'backgroundBlendMode'
  },
  backgroundClip: {
    property: 'backgroundClip'
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  },
  backgroundImage: {
    property: 'backgroundImage'
  },
  backgroundOrigin: {
    property: 'backgroundOrigin'
  },
  backgroundPosition: {
    property: 'backgroundPosition'
  },
  backgroundPositionX: {
    property: 'backgroundPositionX'
  },
  backgroundPositionY: {
    property: 'backgroundPositionY'
  },
  backgroundRepeat: {
    property: 'backgroundRepeat'
  },
  backgroundSize: {
    property: 'backgroundSize'
  }
}

interface BackgroundProps {
  backgroundAttachment?: CSSProperties['backgroundAttachment'] | ResponsiveStyle<CSSProperties['backgroundAttachment']>
  bgAttachment?: CSSProperties['backgroundAttachment'] | ResponsiveStyle<CSSProperties['backgroundAttachment']>
  backgroundBlendMode?: CSSProperties['backgroundBlendMode'] | ResponsiveStyle<CSSProperties['backgroundBlendMode']>
  bgBlendMode?: CSSProperties['backgroundBlendMode'] | ResponsiveStyle<CSSProperties['backgroundBlendMode']>
  backgroundClip?: CSSProperties['backgroundClip'] | ResponsiveStyle<CSSProperties['backgroundClip']>
  bgClip?: CSSProperties['backgroundClip'] | ResponsiveStyle<CSSProperties['backgroundClip']>
  backgroundColor?: CSSProperties['backgroundColor'] | ResponsiveStyle<CSSProperties['backgroundColor']>
  bgColor?: CSSProperties['backgroundColor'] | ResponsiveStyle<CSSProperties['backgroundColor']>
  backgroundImage?: CSSProperties['backgroundImage'] | ResponsiveStyle<CSSProperties['backgroundImage']>
  bgImage?: CSSProperties['backgroundImage'] | ResponsiveStyle<CSSProperties['backgroundImage']>
  backgroundOrigin?: CSSProperties['backgroundOrigin'] | ResponsiveStyle<CSSProperties['backgroundOrigin']>
  bgOrigin?: CSSProperties['backgroundOrigin'] | ResponsiveStyle<CSSProperties['backgroundOrigin']>
  backgroundPosition?: CSSProperties['backgroundPosition'] | ResponsiveStyle<CSSProperties['backgroundPosition']>
  bgPosition?: CSSProperties['backgroundPosition'] | ResponsiveStyle<CSSProperties['backgroundPosition']>
  backgroundPositionX?: CSSProperties['backgroundPositionX'] | ResponsiveStyle<CSSProperties['backgroundPositionX']>
  bgPositionX?: CSSProperties['backgroundPositionX'] | ResponsiveStyle<CSSProperties['backgroundPositionX']>
  backgroundPositionY?: CSSProperties['backgroundPositionY'] | ResponsiveStyle<CSSProperties['backgroundPositionY']>
  bgPositionY?: CSSProperties['backgroundPositionY'] | ResponsiveStyle<CSSProperties['backgroundPositionY']>
  backgroundRepeat?: CSSProperties['backgroundRepeat'] | ResponsiveStyle<CSSProperties['backgroundRepeat']>
  bgRepeat?: CSSProperties['backgroundRepeat'] | ResponsiveStyle<CSSProperties['backgroundRepeat']>
  backgroundSize?: CSSProperties['backgroundSize'] | ResponsiveStyle<CSSProperties['backgroundSize']>
  bgSize?: CSSProperties['backgroundSize'] | ResponsiveStyle<CSSProperties['backgroundSize']>
}

const background: StyledFunction<BackgroundProps> = ({ theme, ...styles }) => {
  return createStyles<BackgroundProps>(styles, theme, config)
}

config.bgAttachment = config.backgroundAttachment
config.bgBlendMode = config.backgroundBlendMode
config.bgClip = config.backgroundClip
config.bgColor = config.backgroundColor
config.bgImage = config.backgroundImage
config.bgOrigin = config.backgroundOrigin
config.bgPosition = config.backgroundPosition
config.bgPositionX = config.backgroundPositionX
config.bgPositionY = config.backgroundPositionY
config.bgRepeat = config.backgroundRepeat
config.bgSize = config.backgroundSize

export { background, BackgroundProps }
