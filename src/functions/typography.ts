// Types
import type { CSSProperties } from '../types/css'
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
  fontFamily?: CSSProperties['fontFamily'] | ResponsiveStyle<CSSProperties['fontFamily']>
  fontSize?: CSSProperties['fontSize'] | ResponsiveStyle<CSSProperties['fontSize']>
  fontWeight?: CSSProperties['fontWeight'] | ResponsiveStyle<CSSProperties['fontWeight']>
  lineHeight?: CSSProperties['lineHeight'] | ResponsiveStyle<CSSProperties['lineHeight']>
  letterSpacing?: CSSProperties['letterSpacing'] | ResponsiveStyle<CSSProperties['letterSpacing']>
  textAlign?: CSSProperties['textAlign'] | ResponsiveStyle<CSSProperties['textAlign']>
  fontStyle?: CSSProperties['fontStyle'] | ResponsiveStyle<CSSProperties['fontStyle']>
  textTransform?: CSSProperties['textTransform'] | ResponsiveStyle<CSSProperties['textTransform']>
}

const typography: StyledFunction<TypographyProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { typography, TypographyProps }
