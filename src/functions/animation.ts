// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunction, StyledFunctionConfig } from '../types/functions'

// Utils
import { createStyles } from '../constructors'

/*








*/

const config: StyledFunctionConfig = {
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
  animation?: CSSProperties['animation'] | ResponsiveStyle<CSSProperties['animation']>
  animationName?: CSSProperties['animationName'] | ResponsiveStyle<CSSProperties['animationName']>
  animationDuration?: CSSProperties['animationDuration'] | ResponsiveStyle<CSSProperties['animationDuration']>
  animationTimingFunction?: CSSProperties['animationTimingFunction'] | ResponsiveStyle<CSSProperties['animationTimingFunction']>
  animationDelay?: CSSProperties['animationDelay'] | ResponsiveStyle<CSSProperties['animationDelay']>
  animationIterationCount?: CSSProperties['animationIterationCount'] | ResponsiveStyle<CSSProperties['animationIterationCount']>
  animationDirection?: CSSProperties['animationDirection'] | ResponsiveStyle<CSSProperties['animationDirection']>
  animationFillMode?: CSSProperties['animationFillMode'] | ResponsiveStyle<CSSProperties['animationFillMode']>
  animationPlayState?: CSSProperties['animationPlayState'] | ResponsiveStyle<CSSProperties['animationPlayState']>
}

const animation: StyledFunction<AnimationProps> = ({ theme, ...styles }) => {
  return createStyles<AnimationProps>(styles, theme, config)
}

export { animation, AnimationProps }