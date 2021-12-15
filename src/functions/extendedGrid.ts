// Types
import type { StyledFunction, StyledFunctionConfig } from '../types/functions'

// Utils
import { createStyles } from '../constructors'
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

const grid: StyledFunction<ExtendedGridProps> = ({ theme, ...styles }) => {
  return createStyles<ExtendedGridProps>(styles, theme, config)
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
config.area = config.griAarea

export { grid, config as extendedGridConfig, ExtendedGridProps }
