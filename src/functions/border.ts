// Types
import type { StylePropWithScale } from '../types/css'
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
  border?: StylePropWithScale<'border', 'borders'>
  borderWidth?: StylePropWithScale<'borderWidth', 'borderWidths'>
  borderStyle?: StylePropWithScale<'borderStyle', 'borderStyles'>
  borderColor?: StylePropWithScale<'borderColor', 'colors'>
  borderRadius?: StylePropWithScale<'borderRadius', 'radii'>
  borderTop?: StylePropWithScale<'borderTop', 'borders'>
  borderTopWidth?: StylePropWithScale<'borderTopWidth', 'borderWidths'>
  borderTopStyle?: StylePropWithScale<'borderTopStyle', 'borderStyles'>
  borderTopColor?: StylePropWithScale<'borderTopColor', 'colors'>
  borderTopLeftRadius?: StylePropWithScale<'borderTopLeftRadius', 'radii'>
  borderTopRightRadius?: StylePropWithScale<'borderTopRightRadius', 'radii'>
  borderRight?: StylePropWithScale<'borderRight', 'borders'>
  borderRightWidth?: StylePropWithScale<'borderRightWidth', 'borderWidths'>
  borderRightStyle?: StylePropWithScale<'borderRightStyle', 'borderStyles'>
  borderRightColor?: StylePropWithScale<'borderRightColor', 'colors'>
  borderBottom?: StylePropWithScale<'borderBottom', 'borders'>
  borderBottomWidth?: StylePropWithScale<'borderBottomWidth', 'borderWidths'>
  borderBottomStyle?: StylePropWithScale<'borderBottomStyle', 'borderStyles'>
  borderBottomColor?: StylePropWithScale<'borderBottomColor', 'colors'>
  borderBottomLeftRadius?: StylePropWithScale<'borderBottomLeftRadius', 'radii'>
  borderBottomRightRadius?: StylePropWithScale<'borderBottomRightRadius', 'radii'>
  borderLeft?: StylePropWithScale<'borderLeft', 'borders'>
  borderLeftWidth?: StylePropWithScale<'borderLeftWidth', 'borderWidths'>
  borderLeftStyle?: StylePropWithScale<'borderLeftStyle', 'borderStyles'>
  borderLeftColor?: StylePropWithScale<'borderLeftColor', 'colors'>
}

const border = createStyleFunction<BorderProps>(config)

export { border, config as borderConfig, BorderProps }
