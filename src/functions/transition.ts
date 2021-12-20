// Types
import type { Property } from 'csstype'
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
  transition?: StyleProp<Property.Transition>
  transitionProperty?: StyleProp<Property.TransitionProperty>
  transitionDuration?: StyleProp<Property.TransitionDuration>
  transitionTimingFunction?: StyleProp<Property.TransitionTimingFunction>
  transitionDelay?: StyleProp<Property.TransitionDelay>
}

const transition = createStyleFunction<TransitionProps>(config)

export { transition, config as transitionConfig, TransitionProps }
