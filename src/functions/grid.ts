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
    property: 'gridColumn'
  },
  gridRow: {
    property: 'gridRow'
  },
  gridArea: {
    property: 'gridArea'
  }
}

interface GridProps {
  grid?: StyleProp<Property.Grid>
  gridTemplateColumns?: StyleProp<Property.GridTemplateColumns>
  gridTemplateRows?: StyleProp<Property.GridTemplateRows>
  gridTemplateAreas?: StyleProp<Property.GridTemplateAreas>
  columnGap?: StyleProp<Property.ColumnGap<string | 0 | number> | ThemeValue<'space'>>
  rowGap?: StyleProp<Property.RowGap<string | 0 | number> | ThemeValue<'space'>>
  gap?: StyleProp<Property.Gap<string | 0 | number> | ThemeValue<'space'>>
  gridJustifyItems?: StyleProp<Property.JustifyItems>
  gridAlignItems?: StyleProp<Property.AlignItems>
  gridJustifyContent?: StyleProp<Property.JustifyContent>
  gridAlignContent?: StyleProp<Property.AlignContent>
  gridAutoColumns?: StyleProp<Property.GridAutoColumns>
  gridAutoRows?: StyleProp<Property.GridAutoRows>
  gridAutoFlow?: StyleProp<Property.GridAutoFlow>

  // Child Props
  gridColumn?: StyleProp<Property.GridColumn>
  gridRow?: StyleProp<Property.GridRow>
  gridArea?: StyleProp<Property.GridArea>
}

const grid = createStyleFunction<GridProps>(config)

export { grid, config as gridConfig, GridProps }
