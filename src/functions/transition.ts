// Types
import type { Property } from 'csstype'
import type { StyleProp } from '../types/css'
import type { StyleFunctionConfig } from '../types/functions'
import type { ThemeValue } from '../types/theme'

// Utils
import { createStyleFunction } from '../constructors'
import { timeTransformer } from '../transformers/time'

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
    property: 'transitionDuration',
    transformer: timeTransformer
  },
  transitionTimingFunction: {
    property: 'transitionTimingFunction'
  },
  transitionDelay: {
    property: 'transitionDelay',
    transformer: timeTransformer
  }
}

interface TransitionProps {
  transition?: StyleProp<Property.Transition | ThemeValue<'transitions'>>
  transitionProperty?: StyleProp<Property.TransitionProperty>
  transitionDuration?: StyleProp<Property.TransitionDuration<number>>
  transitionTimingFunction?: StyleProp<Property.TransitionTimingFunction>
  transitionDelay?: StyleProp<Property.TransitionDelay<number>>
}

const transition = createStyleFunction<TransitionProps>(config)

export { transition, config as transitionConfig, TransitionProps }
