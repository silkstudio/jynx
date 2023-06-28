// Types
import type { StyleFunction, StyleFunctionConfig } from '../types/functions'

// Utils
import { gridConfig, GridProps } from './grid'
import { createStylesObject } from '../constructors'
import { fallbackTheme } from '../theme'
import deepmerge from 'deepmerge'

/*








*/

const config: StyleFunctionConfig = gridConfig

interface GridShorthandProps {
  template?: GridProps['gridTemplate']
  templateColumns?: GridProps['gridTemplateColumns']
  templateRows?: GridProps['gridTemplateRows']
  templateAreas?: GridProps['gridTemplateAreas']
  justifyItems?: GridProps['gridJustifyItems']
  alignItems?: GridProps['gridAlignItems']
  placeItems?: GridProps['gridPlaceItems']
  justifyContent?: GridProps['gridJustifyContent']
  alignContent?: GridProps['gridAlignContent']
  placeContent?: GridProps['gridPlaceContent']
  autoColumns?: GridProps['gridAutoColumns']
  autoRows?: GridProps['gridAutoRows']
  autoFlow?: GridProps['gridAutoFlow']

  // Child Props
  column?: GridProps['gridColumn']
  row?: GridProps['gridRow']
  area?: GridProps['gridArea']
  rowStart?: GridProps['gridRowStart']
  rowEnd?: GridProps['gridRowEnd']
  columnStart?: GridProps['gridColumnStart']
  columnEnd?: GridProps['gridColumnEnd']
}

interface ExtendedGridProps extends GridProps, GridShorthandProps {}

config.template = config.gridTemplate
config.templateColumns = config.gridTemplateColumns
config.templateRows = config.gridTemplateRows
config.templateAreas = config.gridTemplateAreas
config.justifyItems = config.gridJustifyItems
config.alignItems = config.gridAlignItems
config.placeItems = config.gridPlaceItems
config.justifyContent = config.gridJustifyContent
config.alignContent = config.gridAlignContent
config.placeContent = config.gridPlaceContent
config.autoColumns = config.gridAutoColumns
config.autoRows = config.gridAutoRows
config.autoFlow = config.gridAutoFlow
config.column = config.gridColumn
config.row = config.gridRow
config.area = config.gridArea
config.rowStart = config.gridRowStart
config.rowEnd = config.gridRowEnd
config.columnStart = config.gridColumnStart
config.columnEnd = config.gridColumnEnd

const extendedGrid: StyleFunction<ExtendedGridProps> = ({ theme = {}, ...styles }) => {
  const _theme = deepmerge(fallbackTheme, theme)

  const result = createStylesObject<ExtendedGridProps>(styles, _theme, config)

  if (Object.values(styles).some(i => !!i)) {
    result.display = 'grid'
  }

  return result
}

extendedGrid.config = config

export { extendedGrid, config as extendedGridConfig, ExtendedGridProps }
