// Types
import type { Property } from 'csstype'
import type { StyleProp } from '../types/css'
import type { StyleFunctionConfig } from '../types/functions'
import type { ThemeValue } from '../types/theme'

// Utils
import { createStyleFunction } from '../constructors'

/*








*/

const config: StyleFunctionConfig = {
  transition: {
    property: 'transition',
    scale: 'transitions'
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
  transition?: StyleProp<Property.Transition | ThemeValue<'transitions'>>
  transitionProperty?: StyleProp<Property.TransitionProperty>
  transitionDuration?: StyleProp<Property.TransitionDuration>
  transitionTimingFunction?: StyleProp<Property.TransitionTimingFunction>
  transitionDelay?: StyleProp<Property.TransitionDelay>
}

const transition = createStyleFunction<TransitionProps>(config)

export { transition, config as transitionConfig, TransitionProps }
