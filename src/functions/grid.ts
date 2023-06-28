// Types
import type { Property } from 'csstype'
import type { StyleProp } from '../types/css'
import type { ThemeValue } from '../types/theme'
import type { StyleFunction, StyleFunctionConfig } from '../types/functions'

// Utils
import { createStylesObject } from '../constructors'
import { fallbackTheme } from '../theme'
import deepmerge from 'deepmerge'

/*








*/

const config: StyleFunctionConfig = {
  grid: {
    property: 'grid'
  },
  gridTemplate: {
    property: 'gridTemplate'
  },
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
  gridPlaceItems: {
    property: 'placeItems'
  },
  gridJustifyContent: {
    property: 'justifyContent'
  },
  gridAlignContent: {
    property: 'alignContent'
  },
  gridPlaceContent: {
    property: 'placeContent'
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

  // Child Props
  gridColumn: {
    property: 'gridColumn'
  },
  gridRow: {
    property: 'gridRow'
  },
  gridArea: {
    property: 'gridArea'
  },
  gridRowStart: {
    property: 'gridRowStart'
  },
  gridRowEnd: {
    property: 'gridRowEnd'
  },
  gridColumnStart: {
    property: 'gridColumnStart'
  },
  gridColumnEnd: {
    property: 'gridColumnEnd'
  },
  alignSelf: {
    property: 'alignSelf'
  },
  justifySelf: {
    property: 'justifySelf'
  },
  placeSelf: {
    property: 'placeSelf'
  }
}

interface GridProps {
  grid?: StyleProp<Property.Grid>
  gridTemplate?: StyleProp<Property.GridTemplate>
  gridTemplateColumns?: StyleProp<Property.GridTemplateColumns>
  gridTemplateRows?: StyleProp<Property.GridTemplateRows>
  gridTemplateAreas?: StyleProp<Property.GridTemplateAreas>
  columnGap?: StyleProp<Property.ColumnGap<string | 0 | number> | ThemeValue<'space'>>
  rowGap?: StyleProp<Property.RowGap<string | 0 | number> | ThemeValue<'space'>>
  gap?: StyleProp<Property.Gap<string | 0 | number> | ThemeValue<'space'>>
  gridJustifyItems?: StyleProp<Property.JustifyItems>
  gridAlignItems?: StyleProp<Property.AlignItems>
  gridPlaceItems?: StyleProp<Property.PlaceItems>
  gridJustifyContent?: StyleProp<Property.JustifyContent>
  gridAlignContent?: StyleProp<Property.AlignContent>
  gridPlaceContent?: StyleProp<Property.PlaceContent>
  gridAutoColumns?: StyleProp<Property.GridAutoColumns>
  gridAutoRows?: StyleProp<Property.GridAutoRows>
  gridAutoFlow?: StyleProp<Property.GridAutoFlow>

  // Child Props
  gridColumn?: StyleProp<Property.GridColumn>
  gridRow?: StyleProp<Property.GridRow>
  gridArea?: StyleProp<Property.GridArea>
  gridRowStart?: StyleProp<Property.GridRowStart>
  gridRowEnd?: StyleProp<Property.GridRowEnd>
  gridColumnStart?: StyleProp<Property.GridColumnStart>
  gridColumnEnd?: StyleProp<Property.GridColumnEnd>
  alignSelf?: StyleProp<Property.AlignSelf>
  justifySelf?: StyleProp<Property.JustifySelf>
  placeSelf?: StyleProp<Property.PlaceSelf>
}

const grid: StyleFunction<GridProps> = ({ theme = {}, ...styles }) => {
  const _theme = deepmerge(fallbackTheme, theme)

  const result = createStylesObject<GridProps>(styles, _theme, config)

  if (Object.values(styles).some(i => !!i)) {
    result.display = 'grid'
  }

  return result
}

grid.config = config

export { grid, config as gridConfig, GridProps }
