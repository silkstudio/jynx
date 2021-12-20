// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyleFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'

/*








*/

const config: StyleFunctionConfig = {
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
  border?: CSSProperties['border'] | ResponsiveStyle<CSSProperties['border']>
  borderWidth?: CSSProperties['borderWidth'] | ResponsiveStyle<CSSProperties['borderWidth']>
  borderStyle?: CSSProperties['borderStyle'] | ResponsiveStyle<CSSProperties['borderStyle']>
  borderColor?: CSSProperties['borderColor'] | ResponsiveStyle<CSSProperties['borderColor']>
  borderRadius?: CSSProperties['borderRadius'] | ResponsiveStyle<CSSProperties['borderRadius']>
  borderTop?: CSSProperties['borderTop'] | ResponsiveStyle<CSSProperties['borderTop']>
  borderTopWidth?: CSSProperties['borderTopWidth'] | ResponsiveStyle<CSSProperties['borderTopWidth']>
  borderTopStyle?: CSSProperties['borderTopStyle'] | ResponsiveStyle<CSSProperties['borderTopStyle']>
  borderTopColor?: CSSProperties['borderTopColor'] | ResponsiveStyle<CSSProperties['borderTopColor']>
  borderTopLeftRadius?: CSSProperties['borderTopLeftRadius'] | ResponsiveStyle<CSSProperties['borderTopLeftRadius']>
  borderTopRightRadius?: CSSProperties['borderTopRightRadius'] | ResponsiveStyle<CSSProperties['borderTopRightRadius']>
  borderRight?: CSSProperties['borderRight'] | ResponsiveStyle<CSSProperties['borderRight']>
  borderRightWidth?: CSSProperties['borderRightWidth'] | ResponsiveStyle<CSSProperties['borderRightWidth']>
  borderRightStyle?: CSSProperties['borderRightStyle'] | ResponsiveStyle<CSSProperties['borderRightStyle']>
  borderRightColor?: CSSProperties['borderRightColor'] | ResponsiveStyle<CSSProperties['borderRightColor']>
  borderBottom?: CSSProperties['borderBottom'] | ResponsiveStyle<CSSProperties['borderBottom']>
  borderBottomWidth?: CSSProperties['borderBottomWidth'] | ResponsiveStyle<CSSProperties['borderBottomWidth']>
  borderBottomStyle?: CSSProperties['borderBottomStyle'] | ResponsiveStyle<CSSProperties['borderBottomStyle']>
  borderBottomColor?: CSSProperties['borderBottomColor'] | ResponsiveStyle<CSSProperties['borderBottomColor']>
  borderBottomLeftRadius?: CSSProperties['borderBottomLeftRadius'] | ResponsiveStyle<CSSProperties['borderBottomLeftRadius']>
  borderBottomRightRadius?: CSSProperties['borderBottomRightRadius'] | ResponsiveStyle<CSSProperties['borderBottomRightRadius']>
  borderLeft?: CSSProperties['borderLeft'] | ResponsiveStyle<CSSProperties['borderLeft']>
  borderLeftWidth?: CSSProperties['borderLeftWidth'] | ResponsiveStyle<CSSProperties['borderLeftWidth']>
  borderLeftStyle?: CSSProperties['borderLeftStyle'] | ResponsiveStyle<CSSProperties['borderLeftStyle']>
  borderLeftColor?: CSSProperties['borderLeftColor'] | ResponsiveStyle<CSSProperties['borderLeftColor']>
}

const border = createStyleFunction<BorderProps>(config)

export { border, config as borderConfig, BorderProps }
