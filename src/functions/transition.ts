// Types
import type { StyleProp } from '../types/css'
import type { StyleFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'

/*








*/

const config: StyleFunctionConfig = {
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
  transition?: StyleProp<'transition'>
  transitionProperty?: StyleProp<'transitionProperty'>
  transitionDuration?: StyleProp<'transitionDuration'>
  transitionTimingFunction?: StyleProp<'transitionTimingFunction'>
  transitionDelay?: StyleProp<'transitionDelay'>
}

const transition = createStyleFunction<TransitionProps>(config)

export { transition, config as transitionConfig, TransitionProps }
