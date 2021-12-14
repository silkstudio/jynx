// Types
import type { CSSProperties } from '../types/css'
import { ResponsiveStyle, StyledFunction, StyledFunctionConfig } from '../types'

// Utils
import { createStyles } from '../constructors'

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
  boxShadow?: CSSProperties['boxShadow'] | ResponsiveStyle<CSSProperties['boxShadow']>
  textShadow?: CSSProperties['textShadow'] | ResponsiveStyle<CSSProperties['textShadow']>
}

const shadow: StyledFunction<ShadowProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { shadow, ShadowProps }
