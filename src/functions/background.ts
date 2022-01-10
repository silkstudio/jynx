// Types
import type { Property } from 'csstype'
import type { StyleProp } from '../types/css'
import type { StyleFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'

/*








*/

const config: StyleFunctionConfig = {
  background: {
    property: 'background'
  },
  backgroundAttachment: {
    property: 'backgroundAttachment'
  },
  backgroundBlendMode: {
    property: 'backgroundBlendMode'
  },
  backgroundClip: {
    property: 'backgroundClip'
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

interface BackgroundBaseProps {
  background?: StyleProp<Property.Background>
  backgroundAttachment?: StyleProp<Property.BackgroundAttachment>
  backgroundBlendMode?: StyleProp<Property.BackgroundBlendMode>
  backgroundClip?: StyleProp<Property.BackgroundClip>
  backgroundImage?: StyleProp<Property.BackgroundImage>
  backgroundOrigin?: StyleProp<Property.BackgroundOrigin>
  backgroundPosition?: StyleProp<Property.BackgroundPosition>
  backgroundPositionX?: StyleProp<Property.BackgroundPositionX>
  backgroundPositionY?: StyleProp<Property.BackgroundPositionY>
  backgroundRepeat?: StyleProp<Property.BackgroundRepeat>
  backgroundSize?: StyleProp<Property.BackgroundSize>
}

interface BackgroundShorthandProps {
  bg?: BackgroundBaseProps['background']
  bgAttachment?: BackgroundBaseProps['backgroundAttachment']
  bgBlendMode?: BackgroundBaseProps['backgroundBlendMode']
  bgClip?: BackgroundBaseProps['backgroundClip']
  bgImage?: BackgroundBaseProps['backgroundImage']
  bgOrigin?: BackgroundBaseProps['backgroundOrigin']
  bgPos?: BackgroundBaseProps['backgroundPosition']
  bgPosX?: BackgroundBaseProps['backgroundPositionX']
  bgPosY?: BackgroundBaseProps['backgroundPositionY']
  bgRepeat?: BackgroundBaseProps['backgroundRepeat']
  bgSize?: BackgroundBaseProps['backgroundSize']
}

interface BackgroundProps extends BackgroundBaseProps, BackgroundShorthandProps {}

config.bg = config.background
config.bgAttachment = config.backgroundAttachment
config.bgBlendMode = config.backgroundBlendMode
config.bgClip = config.backgroundClip
config.bgImage = config.backgroundImage
config.bgOrigin = config.backgroundOrigin
config.bgPos = config.backgroundPosition
config.bgPosX = config.backgroundPositionX
config.bgPosY = config.backgroundPositionY
config.bgRepeat = config.backgroundRepeat
config.bgSize = config.backgroundSize

const background = createStyleFunction<BackgroundProps>(config)

export { background, config as backgroundConfig, BackgroundProps, BackgroundBaseProps, BackgroundShorthandProps }
