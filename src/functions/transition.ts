// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunction, StyledFunctionConfig } from '../types/functions'

// Utils
import { createStyles } from '../constructors'

/*








*/

const config: StyledFunctionConfig = {
  transition: {
    property: 'transition'
  },
  transitionProperty: {
    property: 'transitionProperty'
  },
  transitionDuration: {
    property: 'transitionDuration'
  },
  transitionTimingFunction: {
    property: 'transitionTimingFunction'
  },
  transitionDelay: {
    property: 'transitionDelay'
  }
}

interface TransitionProps {
  transition?: CSSProperties['transition'] | ResponsiveStyle<CSSProperties['transition']>
  transitionProperty?: CSSProperties['transitionProperty'] | ResponsiveStyle<CSSProperties['transitionProperty']>
  transitionDuration?: CSSProperties['transitionDuration'] | ResponsiveStyle<CSSProperties['transitionDuration']>
  transitionTimingFunction?: CSSProperties['transitionTimingFunction'] | ResponsiveStyle<CSSProperties['transitionTimingFunction']>
  transitionDelay?: CSSProperties['transitionDelay'] | ResponsiveStyle<CSSProperties['transitionDelay']>
}

const transition: StyledFunction<TransitionProps> = ({ theme, ...styles }) => {
  return createStyles<TransitionProps>(styles, theme, config)
}

export { transition, TransitionProps }
