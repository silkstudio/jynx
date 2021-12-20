// Types
import type { StyleProp, StylePropWithScale } from '../types/css'
import type { StyleFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'

/*








*/

const config: StyleFunctionConfig = {
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

interface BackgroundBaseProps {
  backgroundAttachment?: StyleProp<'backgroundAttachment'>
  backgroundBlendMode?: StyleProp<'backgroundBlendMode'>
  backgroundClip?: StyleProp<'backgroundClip'>
  backgroundColor?: StylePropWithScale<'backgroundColor', 'colors'>
  backgroundImage?: StyleProp<'backgroundImage'>
  backgroundOrigin?: StyleProp<'backgroundOrigin'>
  backgroundPosition?: StyleProp<'backgroundPosition'>
  backgroundPositionX?: StyleProp<'backgroundPositionX'>
  backgroundPositionY?: StyleProp<'backgroundPositionY'>
  backgroundRepeat?: StyleProp<'backgroundRepeat'>
  backgroundSize?: StyleProp<'backgroundSize'>
}

interface BackgroundShorthandProps {
  bgAttachment?: BackgroundBaseProps['backgroundAttachment']
  bgBlendMode?: BackgroundBaseProps['backgroundBlendMode']
  bgClip?: BackgroundBaseProps['backgroundClip']
  bgColor?: BackgroundBaseProps['backgroundColor']
  bgImage?: BackgroundBaseProps['backgroundImage']
  bgOrigin?: BackgroundBaseProps['backgroundOrigin']
  bgPosition?: BackgroundBaseProps['backgroundPosition']
  bgPositionX?: BackgroundBaseProps['backgroundPositionX']
  bgPositionY?: BackgroundBaseProps['backgroundPositionY']
  bgRepeat?: BackgroundBaseProps['backgroundRepeat']
  bgSize?: BackgroundBaseProps['backgroundSize']
}

interface BackgroundProps extends BackgroundBaseProps, BackgroundShorthandProps {}

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

const background = createStyleFunction<BackgroundProps>(config)

export { background, config as backgroundConfig, BackgroundProps, BackgroundBaseProps, BackgroundShorthandProps }
