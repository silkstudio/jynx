// Types
import type { Property } from 'csstype'
import type { StyleProp } from '../types/css'
import type { ThemeValue } from '../types/theme'
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
  fontFamily?: StyleProp<Property.FontFamily | ThemeValue<'fonts'>>
  fontSize?: StyleProp<Property.FontSize<number> | ThemeValue<'fontSizes'>>
  fontStyle?: StyleProp<Property.FontStyle>
  fontWeight?: StyleProp<Property.FontWeight | ThemeValue<'fontWeights'> | number>
  letterSpacing?: StyleProp<Property.LetterSpacing<number> | ThemeValue<'letterSpacings'>>
  lineHeight?: StyleProp<Property.LineHeight<number> | ThemeValue<'lineHeights'>>
  textAlign?: StyleProp<Property.TextAlign>
  textDecoration?: StyleProp<Property.TextDecoration>
  textOverflow?: StyleProp<Property.TextOverflow>
  textTransform?: StyleProp<Property.TextTransform>
  whiteSpace?: StyleProp<Property.WhiteSpace>
  wordBreak?: StyleProp<Property.WordBreak>
}

const typography = createStyleFunction<TypographyProps>(config)

export { typography, config as typographyConfig, TypographyProps }
