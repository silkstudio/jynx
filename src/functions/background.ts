// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle, StyledFunction, StyledFunctionConfig } from '../types'

// Utils
import { createStyles } from '../parsers'

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
  backgroundAttachment?: CSS['backgroundAttachment'] | ResponsiveStyle<CSS['backgroundAttachment']>
  backgroundBlendMode?: CSS['backgroundBlendMode'] | ResponsiveStyle<CSS['backgroundBlendMode']>
  backgroundClip?: CSS['backgroundClip'] | ResponsiveStyle<CSS['backgroundClip']>
  backgroundColor?: CSS['backgroundColor'] | ResponsiveStyle<CSS['backgroundColor']>
  backgroundImage?: CSS['backgroundImage'] | ResponsiveStyle<CSS['backgroundImage']>
  backgroundOrigin?: CSS['backgroundOrigin'] | ResponsiveStyle<CSS['backgroundOrigin']>
  backgroundPosition?: CSS['backgroundPosition'] | ResponsiveStyle<CSS['backgroundPosition']>
  backgroundPositionX?: CSS['backgroundPositionX'] | ResponsiveStyle<CSS['backgroundPositionX']>
  backgroundPositionY?: CSS['backgroundPositionY'] | ResponsiveStyle<CSS['backgroundPositionY']>
  backgroundRepeat?: CSS['backgroundRepeat'] | ResponsiveStyle<CSS['backgroundRepeat']>
  backgroundSize?: CSS['backgroundSize'] | ResponsiveStyle<CSS['backgroundSize']>
}

const background: StyledFunction<BackgroundProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { background, BackgroundProps }
