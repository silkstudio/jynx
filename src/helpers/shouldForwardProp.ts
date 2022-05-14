import {
  animationConfig,
  backgroundConfig,
  borderConfig,
  colorConfig,
  extendedFlexboxConfig,
  extendedGridConfig,
  flexboxConfig,
  gridConfig,
  layoutConfig,
  positionConfig,
  shadowConfig,
  spaceConfig,
  transitionConfig,
  typographyConfig
} from '../functions'

// Utils
import { memoize } from '../utils'

/*








*/

const allProps = Object.keys({
  ...animationConfig,
  ...backgroundConfig,
  ...borderConfig,
  ...colorConfig,
  ...extendedFlexboxConfig,
  ...extendedGridConfig,
  ...flexboxConfig,
  ...gridConfig,
  ...layoutConfig,
  ...positionConfig,
  ...shadowConfig,
  ...spaceConfig,
  ...transitionConfig,
  ...typographyConfig
})

const shouldForwardProp = memoize((prop: any): boolean => typeof prop !== 'string' || !allProps.includes(prop))

export { shouldForwardProp }
