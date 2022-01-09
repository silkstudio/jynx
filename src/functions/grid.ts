// Types
import type { Property } from 'csstype'
import type { StyleProp } from '../types/css'
import type { ThemeValue } from '../types/theme'
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
    scale: 'space'
  },
  rowGap: {
    property: 'rowGap',
    scale: 'space'
  },
  gap: {
    property: 'gap',
    scale: 'space'
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

type GridChild<T> = T | [T, T]

interface GridProps {
  gridTemplateColumns?: StyleProp<Property.GridTemplateColumns>
  gridTemplateRows?: StyleProp<Property.GridTemplateRows>
  gridTemplateAreas?: StyleProp<Property.GridTemplateAreas>
  columnGap?: StyleProp<Property.ColumnGap<number> | ThemeValue<'space'>>
  rowGap?: StyleProp<Property.RowGap<number> | ThemeValue<'space'>>
  gap?: StyleProp<Property.Gap<number> | ThemeValue<'space'>>
  gridJustifyItems?: StyleProp<Property.JustifyItems>
  gridAlignItems?: StyleProp<Property.AlignItems>
  gridJustifyContent?: StyleProp<Property.JustifyContent>
  gridAlignContent?: StyleProp<Property.AlignContent>
  gridAutoColumns?: StyleProp<Property.GridAutoColumns>
  gridAutoRows?: StyleProp<Property.GridAutoRows>
  gridAutoFlow?: StyleProp<Property.GridAutoFlow>

  // Child Props | Using the type `GridChild<T> = T | [T, T]`
  gridColumn?: StyleProp<GridChild<Property.GridColumn>>
  gridRow?: StyleProp<GridChild<Property.GridRow>>
  gridArea?: StyleProp<GridChild<Property.GridArea>>
}

const grid = createStyleFunction<GridProps>(config)

export { grid, config as gridConfig, GridProps }
