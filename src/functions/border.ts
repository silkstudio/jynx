// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle, StyledFunction, StyledFunctionConfig } from '../types'

// Utils
import { createStyles } from '../constructors'

/*








*/

const config: StyledFunctionConfig = {
  border: {
    property: 'border',
    scale: 'borders'
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths'
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles'
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors'
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii'
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders'
  },
  borderTopWidth: {
    property: 'borderTopWidth',
    scale: 'borderWidths'
  },
  borderTopStyle: {
    property: 'borderTopStyle',
    scale: 'borderStyles'
  },
  borderTopColor: {
    property: 'borderTopColor',
    scale: 'colors'
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii'
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii'
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders'
  },
  borderRightWidth: {
    property: 'borderRightWidth',
    scale: 'borderWidths'
  },
  borderRightStyle: {
    property: 'borderRightStyle',
    scale: 'borderStyles'
  },
  borderRightColor: {
    property: 'borderRightColor',
    scale: 'colors'
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders'
  },
  borderBottomWidth: {
    property: 'borderBottomWidth',
    scale: 'borderWidths'
  },
  borderBottomStyle: {
    property: 'borderBottomStyle',
    scale: 'borderStyles'
  },
  borderBottomColor: {
    property: 'borderBottomColor',
    scale: 'colors'
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii'
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders'
  },
  borderLeftWidth: {
    property: 'borderLeftWidth',
    scale: 'borderWidths'
  },
  borderLeftStyle: {
    property: 'borderLeftStyle',
    scale: 'borderStyles'
  },
  borderLeftColor: {
    property: 'borderLeftColor',
    scale: 'colors'
  }
}

interface BorderProps {
  border?: CSS['border'] | ResponsiveStyle<CSS['border']>
  borderWidth?: CSS['borderWidth'] | ResponsiveStyle<CSS['borderWidth']>
  borderStyle?: CSS['borderStyle'] | ResponsiveStyle<CSS['borderStyle']>
  borderColor?: CSS['borderColor'] | ResponsiveStyle<CSS['borderColor']>
  borderRadius?: CSS['borderRadius'] | ResponsiveStyle<CSS['borderRadius']>
  borderTop?: CSS['borderTop'] | ResponsiveStyle<CSS['borderTop']>
  borderTopWidth?: CSS['borderTopWidth'] | ResponsiveStyle<CSS['borderTopWidth']>
  borderTopStyle?: CSS['borderTopStyle'] | ResponsiveStyle<CSS['borderTopStyle']>
  borderTopColor?: CSS['borderTopColor'] | ResponsiveStyle<CSS['borderTopColor']>
  borderTopLeftRadius?: CSS['borderTopLeftRadius'] | ResponsiveStyle<CSS['borderTopLeftRadius']>
  borderTopRightRadius?: CSS['borderTopRightRadius'] | ResponsiveStyle<CSS['borderTopRightRadius']>
  borderRight?: CSS['borderRight'] | ResponsiveStyle<CSS['borderRight']>
  borderRightWidth?: CSS['borderRightWidth'] | ResponsiveStyle<CSS['borderRightWidth']>
  borderRightStyle?: CSS['borderRightStyle'] | ResponsiveStyle<CSS['borderRightStyle']>
  borderRightColor?: CSS['borderRightColor'] | ResponsiveStyle<CSS['borderRightColor']>
  borderBottom?: CSS['borderBottom'] | ResponsiveStyle<CSS['borderBottom']>
  borderBottomWidth?: CSS['borderBottomWidth'] | ResponsiveStyle<CSS['borderBottomWidth']>
  borderBottomStyle?: CSS['borderBottomStyle'] | ResponsiveStyle<CSS['borderBottomStyle']>
  borderBottomColor?: CSS['borderBottomColor'] | ResponsiveStyle<CSS['borderBottomColor']>
  borderBottomLeftRadius?: CSS['borderBottomLeftRadius'] | ResponsiveStyle<CSS['borderBottomLeftRadius']>
  borderBottomRightRadius?: CSS['borderBottomRightRadius'] | ResponsiveStyle<CSS['borderBottomRightRadius']>
  borderLeft?: CSS['borderLeft'] | ResponsiveStyle<CSS['borderLeft']>
  borderLeftWidth?: CSS['borderLeftWidth'] | ResponsiveStyle<CSS['borderLeftWidth']>
  borderLeftStyle?: CSS['borderLeftStyle'] | ResponsiveStyle<CSS['borderLeftStyle']>
  borderLeftColor?: CSS['borderLeftColor'] | ResponsiveStyle<CSS['borderLeftColor']>
}

const border: StyledFunction<BorderProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { border, BorderProps }
