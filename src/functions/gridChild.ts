// Types
import type { StyleFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'
import { gridConfig, GridProps } from './grid'

/*








*/

const config: StyleFunctionConfig = {
  gridColumn: gridConfig.gridColumn,
  gridRow: gridConfig.gridRow,
  gridArea: gridConfig.gridArea,
  gridRowStart: gridConfig.gridRowStart,
  gridRowEnd: gridConfig.gridRowEnd,
  gridColumnStart: gridConfig.gridColumnStart,
  gridColumnEnd: gridConfig.gridColumnEnd,
  alignSelf: gridConfig.alignSelf,
  justifySelf: gridConfig.justifySelf,
  placeSelf: gridConfig.placeSelf
}

type GridChildProps = Pick<
  GridProps,
  | 'gridColumn'
  | 'gridRow'
  | 'gridArea'
  | 'gridRowStart'
  | 'gridRowEnd'
  | 'gridColumnStart'
  | 'gridColumnEnd'
  | 'alignSelf'
  | 'justifySelf'
  | 'placeSelf'
>

const gridChild = createStyleFunction<GridChildProps>(config)

gridChild.config = config

export { gridChild, config as gridChildConfig, GridChildProps }
