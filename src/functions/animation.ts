// Types
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
  animation?: StyleProp<'animation'>
  animationName?: StyleProp<'animationName'>
  animationDuration?: StyleProp<'animationDuration'>
  animationTimingFunction?: StyleProp<'animationTimingFunction'>
  animationDelay?: StyleProp<'animationDelay'>
  animationIterationCount?: StyleProp<'animationIterationCount'>
  animationDirection?: StyleProp<'animationDirection'>
  animationFillMode?: StyleProp<'animationFillMode'>
  animationPlayState?: StyleProp<'animationPlayState'>
}

const animation = createStyleFunction<AnimationProps>(config)

export { animation, config as animationConfig, AnimationProps }
