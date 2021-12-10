// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle, StyledFunction, StyledFunctionConfig } from '../types'

// Utils
import { createStyles } from '../constructors'

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
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights'
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings'
  },
  textAlign: {
    property: 'textAlign'
  },
  fontStyle: {
    property: 'fontStyle'
  },
  textTransform: {
    property: 'textTransform'
  }
}

interface TypographyProps {
  fontFamily?: CSS['fontFamily'] | ResponsiveStyle<CSS['fontFamily']>
  fontSize?: CSS['fontSize'] | ResponsiveStyle<CSS['fontSize']>
  fontWeight?: CSS['fontWeight'] | ResponsiveStyle<CSS['fontWeight']>
  lineHeight?: CSS['lineHeight'] | ResponsiveStyle<CSS['lineHeight']>
  letterSpacing?: CSS['letterSpacing'] | ResponsiveStyle<CSS['letterSpacing']>
  textAlign?: CSS['textAlign'] | ResponsiveStyle<CSS['textAlign']>
  fontStyle?: CSS['fontStyle'] | ResponsiveStyle<CSS['fontStyle']>
  textTransform?: CSS['textTransform'] | ResponsiveStyle<CSS['textTransform']>
}

const typography: StyledFunction<TypographyProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { typography, TypographyProps }
