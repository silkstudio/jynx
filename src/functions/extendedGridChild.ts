// Utils
import { createStyleFunction } from '../constructors'
import { gridChildConfig, GridChildProps } from './gridChild'

/*








*/

const config = gridChildConfig

config.column = gridChildConfig.gridColumn
config.row = gridChildConfig.gridRow
config.area = gridChildConfig.gridArea
config.rowStart = gridChildConfig.gridRowStart
config.rowEnd = gridChildConfig.gridRowEnd
config.columnStart = gridChildConfig.gridColumnStart
config.columnEnd = gridChildConfig.gridColumnEnd

interface GridChildShorthandProps {
  column?: GridChildProps['gridColumn']
  row?: GridChildProps['gridRow']
  area?: GridChildProps['gridArea']
  rowStart?: GridChildProps['gridRowStart']
  rowEnd?: GridChildProps['gridRowEnd']
  columnStart?: GridChildProps['gridColumnStart']
  columnEnd?: GridChildProps['gridColumnEnd']
}

interface ExtendedGridChildProps extends GridChildProps, GridChildShorthandProps {}

const extendedGridChild = createStyleFunction<ExtendedGridChildProps>(config)

extendedGridChild.config = config

export { extendedGridChild, config as extendedGridChildConfig, ExtendedGridChildProps }
