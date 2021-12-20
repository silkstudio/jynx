// Types
import type { Property } from 'csstype'
import type { StyleProp } from '../types/css'
import type { StyleFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'

/*








*/

const config: StyleFunctionConfig = {
  animation: {
    property: 'animation'
  },
  animationName: {
    property: 'animationName'
  },
  animationDuration: {
    property: 'animationDuration'
  },
  animationTimingFunction: {
    property: 'animationTimingFunction'
  },
  animationDelay: {
    property: 'animationDelay'
  },
  animationIterationCount: {
    property: 'animationIterationCount'
  },
  animationDirection: {
    property: 'animationDirection'
  },
  animationFillMode: {
    property: 'animationFillMode'
  },
  animationPlayState: {
    property: 'animationPlayState'
  }
}

interface AnimationProps {
  animation?: StyleProp<Property.Animation>
  animationName?: StyleProp<Property.AnimationName>
  animationDuration?: StyleProp<Property.AnimationDuration<string | 0 | number>>
  animationTimingFunction?: StyleProp<Property.AnimationTimingFunction>
  animationDelay?: StyleProp<Property.AnimationDelay<string | 0 | number>>
  animationIterationCount?: StyleProp<Property.AnimationIterationCount>
  animationDirection?: StyleProp<Property.AnimationDirection>
  animationFillMode?: StyleProp<Property.AnimationFillMode>
  animationPlayState?: StyleProp<Property.AnimationPlayState>
}

const animation = createStyleFunction<AnimationProps>(config)

export { animation, config as animationConfig, AnimationProps }
