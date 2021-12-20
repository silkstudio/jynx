// Types
import type { StylePropWithScale, StyleProp } from '../types/css'
import type { StyleFunction, StyleFunctionConfig } from '../types/functions'

// Utils
import { createStylesObject } from '../constructors'

/*








*/

const config: StyleFunctionConfig = {
  flexDirection: {
    property: 'flexDirection'
  },
  flexFlow: {
    property: 'flexFlow'
  },
  flexWrap: {
    property: 'flexWrap'
  },
  alignItems: {
    property: 'alignItems'
  },
  alignContent: {
    property: 'alignContent'
  },
  alignSelf: {
    property: 'alignSelf'
  },
  justifyContent: {
    property: 'justifyContent'
  },
  gap: {
    property: 'gap',
    scale: 'spaces'
  },
  flexGrow: {
    property: 'flexGrow'
  },
  flexShrink: {
    property: 'flexShrink'
  },
  flexBasis: {
    property: 'flexBasis'
  },
  order: {
    property: 'order'
  }
}

interface FlexboxProps {
  flexDirection?: StyleProp<'flexDirection'>
  flexFlow?: StyleProp<'flexFlow'>
  flexWrap?: StyleProp<'flexWrap'>
  alignItems?: StyleProp<'alignItems'>
  alignContent?: StyleProp<'alignContent'>
  alignSelf?: StyleProp<'alignSelf'>
  justifyContent?: StyleProp<'justifyContent'>
  gap?: StylePropWithScale<'gap', 'spaces'>
  flexGrow?: StyleProp<'flexGrow'>
  flexShrink?: StyleProp<'flexShrink'>
  flexBasis?: StyleProp<'flexBasis'>
  order?: StyleProp<'order'>
}

const flexbox: StyleFunction<FlexboxProps> = ({ theme, ...styles }) => {
  const result = createStylesObject<FlexboxProps>(styles, theme, config)

  if (Object.keys(styles).length) {
    result.display = 'flex'
  }

  return result
}

flexbox.config = config

export { flexbox, config as flexboxConfig, FlexboxProps }
