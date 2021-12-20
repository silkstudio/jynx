// Types
import type { StyleProp, StylePropWithScale } from '../types/css'
import type { StyleFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'

/*








*/

const config: StyleFunctionConfig = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts'
  },
  fontSize: {
    property: 'fontSize'
  },
  fontStyle: {
    property: 'fontStyle'
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights'
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings'
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  },
  textAlign: {
    property: 'textAlign'
  },
  textDecoration: {
    property: 'textDecoration'
  },
  textOverflow: {
    property: 'textOverflow'
  },
  textTransform: {
    property: 'textTransform'
  },
  whiteSpace: {
    property: 'whiteSpace'
  },
  wordBreak: {
    property: 'wordBreak'
  }
}

interface TypographyProps {
  fontFamily?: StylePropWithScale<'fontFamily', 'fonts'>
  fontSize?: StylePropWithScale<'fontSize', 'fontSizes'>
  fontStyle?: StyleProp<'fontStyle'>
  fontWeight?: StylePropWithScale<'fontWeight', 'fontWeights'>
  letterSpacing?: StylePropWithScale<'letterSpacing', 'letterSpacings'>
  lineHeight?: StylePropWithScale<'lineHeight', 'lineHeights'>
  textAlign?: StyleProp<'textAlign'>
  textDecoration?: StyleProp<'textDecoration'>
  textOverflow?: StyleProp<'textOverflow'>
  textTransform?: StyleProp<'textTransform'>
  whiteSpace?: StyleProp<'whiteSpace'>
  wordBreak?: StyleProp<'wordBreak'>
}

const typography = createStyleFunction<TypographyProps>(config)

export { typography, config as typographyConfig, TypographyProps }
