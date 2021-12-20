// Types
import type { StyleFunction, StyleFunctionConfig } from '../types/functions'

// Utils
import { flexboxConfig, FlexboxProps } from './flexbox'
import { createStylesObject } from '../constructors'

/*








*/

const config: StyleFunctionConfig = flexboxConfig

interface FlexboxShorthandProps {
  direction?: FlexboxProps['flexDirection']
  flow?: FlexboxProps['flexFlow']
  wrap?: FlexboxProps['flexWrap']
  align?: FlexboxProps['alignItems']
  justify?: FlexboxProps['justifyContent']
  grow?: FlexboxProps['flexGrow']
  shrink?: FlexboxProps['flexShrink']
  basis?: FlexboxProps['flexBasis']
}

interface ExtendedFlexboxProps extends FlexboxProps, FlexboxShorthandProps {}

config.direction = config.flexDirection
config.flow = config.flexFlow
config.wrap = config.flexWrap
config.align = config.alignItems
config.justify = config.justifyContent
config.grow = config.flexGrow
config.shrink = config.flexShrink
config.basis = config.flexBasis

const extendedFlexbox: StyleFunction<ExtendedFlexboxProps> = ({ theme, ...styles }) => {
  const result = createStylesObject<ExtendedFlexboxProps>(styles, theme, config)

  if (Object.keys(styles).length) {
    result.display = 'flex'
  }

  return result
}

extendedFlexbox.config = config

export { extendedFlexbox, config as extendedFlexboxConfig, ExtendedFlexboxProps, FlexboxShorthandProps }
