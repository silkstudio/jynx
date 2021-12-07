// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle, StyledFunction, StyledFunctionConfig } from '../types'

// Utils
import { createStyles } from '../parsers'

/*








*/

const config: StyledFunctionConfig = {
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows'
  }
}

interface ShadowProps {
  boxShadow?: CSS['boxShadow'] | ResponsiveStyle<CSS['boxShadow']>
  textShadow?: CSS['textShadow'] | ResponsiveStyle<CSS['textShadow']>
}

const shadow: StyledFunction<ShadowProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { shadow, ShadowProps }
