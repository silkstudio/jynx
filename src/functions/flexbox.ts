// Types
import type { Property } from 'csstype'
import type { StyleProp } from '../types/css'
import type { ThemeValue } from '../types/theme'
import type { StyleFunction, StyleFunctionConfig } from '../types/functions'

// Utils
import { createStylesObject } from '../constructors'

/*








*/

const config: StyleFunctionConfig = {
  flex: {
    property: 'flex'
  },
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
    scale: 'space'
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
  flex?: StyleProp<Property.Flex>
  flexDirection?: StyleProp<Property.FlexDirection>
  flexFlow?: StyleProp<Property.FlexFlow>
  flexWrap?: StyleProp<Property.FlexWrap>
  alignItems?: StyleProp<Property.AlignItems>
  alignContent?: StyleProp<Property.AlignContent>
  alignSelf?: StyleProp<Property.AlignSelf>
  justifyContent?: StyleProp<Property.JustifyContent>
  gap?: StyleProp<Property.Gap<ThemeValue<'space'> | number>>
  flexGrow?: StyleProp<Property.FlexGrow>
  flexShrink?: StyleProp<Property.FlexShrink>
  flexBasis?: StyleProp<Property.FlexBasis>
  order?: StyleProp<Property.Order>
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
