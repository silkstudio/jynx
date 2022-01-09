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
  border?: StyleProp<Property.Border | ThemeValue<'borders'>>
  borderWidth?: StyleProp<Property.BorderWidth<number> | ThemeValue<'borderWidths'>>
  borderStyle?: StyleProp<Property.BorderStyle | ThemeValue<'borderStyles'>>
  borderColor?: StyleProp<Property.BorderColor | ThemeValue<'colors'>>
  borderRadius?: StyleProp<Property.BorderRadius<number> | ThemeValue<'radii'>>
  borderTop?: StyleProp<Property.BorderTop | ThemeValue<'borders'>>
  borderTopWidth?: StyleProp<Property.BorderTopWidth<number> | ThemeValue<'borderWidths'>>
  borderTopStyle?: StyleProp<Property.BorderTopStyle | ThemeValue<'borderStyles'>>
  borderTopColor?: StyleProp<Property.BorderTopColor | ThemeValue<'colors'>>
  borderTopLeftRadius?: StyleProp<Property.BorderTopLeftRadius<number> | ThemeValue<'radii'>>
  borderTopRightRadius?: StyleProp<Property.BorderTopRightRadius<number> | ThemeValue<'radii'>>
  borderRight?: StyleProp<Property.BorderRight | ThemeValue<'borders'>>
  borderRightWidth?: StyleProp<Property.BorderTopWidth<number> | ThemeValue<'borderWidths'>>
  borderRightStyle?: StyleProp<Property.BorderRightStyle | ThemeValue<'borderStyles'>>
  borderRightColor?: StyleProp<Property.BorderRightColor | ThemeValue<'colors'>>
  borderBottom?: StyleProp<Property.BorderBottom | ThemeValue<'borders'>>
  borderBottomWidth?: StyleProp<Property.BorderBottomWidth<number> | ThemeValue<'borderWidths'>>
  borderBottomStyle?: StyleProp<Property.BorderBottomStyle | ThemeValue<'borderStyles'>>
  borderBottomColor?: StyleProp<Property.BorderBottomColor | ThemeValue<'colors'>>
  borderBottomLeftRadius?: StyleProp<Property.BorderBottomLeftRadius<number> | ThemeValue<'radii'>>
  borderBottomRightRadius?: StyleProp<Property.BorderBottomRightRadius<number> | ThemeValue<'radii'>>
  borderLeft?: StyleProp<Property.BorderLeft | ThemeValue<'borders'>>
  borderLeftWidth?: StyleProp<Property.BorderLeftWidth<number> | ThemeValue<'borderWidths'>>
  borderLeftStyle?: StyleProp<Property.BorderLeftStyle | ThemeValue<'borderStyles'>>
  borderLeftColor?: StyleProp<Property.BorderLeftColor | ThemeValue<'colors'>>
}

const border = createStyleFunction<BorderProps>(config)

export { border, config as borderConfig, BorderProps }
