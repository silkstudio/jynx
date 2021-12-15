// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'

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

const transition = createStyleFunction<TransitionProps>(config)

export { transition, config as transitionConfig, TransitionProps }
