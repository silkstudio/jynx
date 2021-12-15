// Types
import type { StyledFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'
import { gridConfig, GridProps } from './grid'

/*








*/

const config: StyledFunctionConfig = gridConfig

interface ExtendedGridProps extends GridProps {
  templateColumns?: GridProps['gridTemplateColumns']
  templateRows?: GridProps['gridTemplateRows']
  templateAreas?: GridProps['gridTemplateAreas']
  justifyItems?: GridProps['gridJustifyItems']
  alignItems?: GridProps['gridAlignItems']
  justifyContent?: GridProps['gridJustifyContent']
  alignContent?: GridProps['gridAlignContent']
  autoColumns?: GridProps['gridAutoColumns']
  autoRows?: GridProps['gridAutoRows']
  autoFlow?: GridProps['gridAutoFlow']
  // Child Props
  column?: GridProps['gridColumn']
  row?: GridProps['gridRow']
  area?: GridProps['gridArea']
}

config.templateColumns = config.gridTemplateColumns
config.templateRows = config.gridTemplateRows
config.templateAreas = config.gridTemplateAreas
config.justifyItems = config.gridJustifyItems
config.alignItems = config.gridAlignItems
config.justifyContent = config.gridJustifyContent
config.alignContent = config.gridAlignContent
config.autoColumns = config.gridAutoColumns
config.autoRows = config.gridAutoRows
config.autoFlow = config.gridAutoFlow
config.column = config.gridColumn
config.row = config.gridRow
config.area = config.gridAarea

const grid = createStyleFunction<ExtendedGridProps>(config)

export { grid, config as extendedGridConfig, ExtendedGridProps }
