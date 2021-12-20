// Types
import type { CSSProperties, StyleProp, StylePropWithScale } from '../types/css'
import type { ThemeValue } from '../types/theme'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyleFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'
import { gridSpanTransformer } from '../transformers/grid'

/*








*/

const config: StyleFunctionConfig = {
  gridTemplateColumns: {
    property: 'gridTemplateColumns'
  },
  gridTemplateRows: {
    property: 'gridTemplateRows'
  },
  gridTemplateAreas: {
    property: 'gridTemplateAreas'
  },
  columnGap: {
    property: 'columnGap',
    scale: 'spaces'
  },
  rowGap: {
    property: 'rowGap',
    scale: 'spaces'
  },
  gap: {
    property: 'gap',
    scale: 'spaces'
  },
  gridJustifyItems: {
    property: 'justifyItems'
  },
  gridAlignItems: {
    property: 'alignItems'
  },
  gridJustifyContent: {
    property: 'justifyContent'
  },
  gridAlignContent: {
    property: 'alignContent'
  },
  gridAutoColumns: {
    property: 'gridAutoColumns'
  },
  gridAutoRows: {
    property: 'gridAutoColumns'
  },
  gridAutoFlow: {
    property: 'gridAutoFlow'
  },
  gridColumn: {
    property: 'gridColumn',
    transformer: gridSpanTransformer
  },
  gridRow: {
    property: 'gridRow',
    transformer: gridSpanTransformer
  },
  gridArea: {
    property: 'gridArea',
    transformer: gridSpanTransformer
  }
}

type GridChildType<T extends keyof CSSProperties> =
  | CSSProperties[T]
  | ThemeValue<'spaces'>
  | [CSSProperties[T] | ThemeValue<'spaces'>, CSSProperties[T] | ThemeValue<'spaces'>]

interface GridProps {
  gridTemplateColumns?: StyleProp<'gridTemplateColumns'>
  gridTemplateRows?: StyleProp<'gridTemplateRows'>
  gridTemplateAreas?: StyleProp<'gridTemplateAreas'>
  columnGap?: StylePropWithScale<'columnGap', 'sizes'>
  rowGap?: StylePropWithScale<'rowGap', 'sizes'>
  gap?: StylePropWithScale<'gap', 'sizes'>
  gridJustifyItems?: StyleProp<'justifyItems'>
  gridAlignItems?: StyleProp<'alignItems'>
  gridJustifyContent?: StyleProp<'justifyContent'>
  gridAlignContent?: StyleProp<'alignContent'>
  gridAutoColumns?: StyleProp<'gridAutoColumns'>
  gridAutoRows?: StyleProp<'gridAutoRows'>
  gridAutoFlow?: StyleProp<'gridAutoFlow'>
  // Child Props
  gridColumn?: GridChildType<'gridColumn'> | ResponsiveStyle<GridChildType<'gridColumn'>>
  gridRow?: GridChildType<'gridRow'> | ResponsiveStyle<GridChildType<'gridRow'>>
  gridArea?: GridChildType<'gridArea'> | ResponsiveStyle<GridChildType<'gridArea'>>
}

const grid = createStyleFunction<GridProps>(config)

export { grid, config as gridConfig, GridProps }
