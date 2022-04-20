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

/*








*/

const shouldForwardProp = (prop: any): boolean =>
  !Object.keys({
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
  }).includes(prop)

export { shouldForwardProp }
