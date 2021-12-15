// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunction, StyledFunctionConfig } from '../types/functions'

// Utils
import { createStylesObject } from '../constructors'

/*








*/

const config: StyledFunctionConfig = {
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
  fontFamily?: CSSProperties['fontFamily'] | ResponsiveStyle<CSSProperties['fontFamily']>
  fontSize?: CSSProperties['fontSize'] | ResponsiveStyle<CSSProperties['fontSize']>
  fontStyle?: CSSProperties['fontStyle'] | ResponsiveStyle<CSSProperties['fontStyle']>
  fontWeight?: CSSProperties['fontWeight'] | ResponsiveStyle<CSSProperties['fontWeight']>
  letterSpacing?: CSSProperties['letterSpacing'] | ResponsiveStyle<CSSProperties['letterSpacing']>
  lineHeight?: CSSProperties['lineHeight'] | ResponsiveStyle<CSSProperties['lineHeight']>
  textAlign?: CSSProperties['textAlign'] | ResponsiveStyle<CSSProperties['textAlign']>
  textDecoration?: CSSProperties['textDecoration'] | ResponsiveStyle<CSSProperties['textDecoration']>
  textOverflow?: CSSProperties['textOverflow'] | ResponsiveStyle<CSSProperties['textOverflow']>
  textTransform?: CSSProperties['textTransform'] | ResponsiveStyle<CSSProperties['textTransform']>
  whiteSpace?: CSSProperties['whiteSpace'] | ResponsiveStyle<CSSProperties['whiteSpace']>
  wordBreak?: CSSProperties['wordBreak'] | ResponsiveStyle<CSSProperties['wordBreak']>
}

const typography: StyledFunction<TypographyProps> = ({ theme, ...styles }) => {
  return createStylesObject<TypographyProps>(styles, theme, config)
}

export { typography, TypographyProps }
