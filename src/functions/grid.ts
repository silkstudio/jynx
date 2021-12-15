// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'
import { gridSpanTransformer } from '../transformers/grid'

/*








*/

const config: StyledFunctionConfig = {
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
    transform: gridSpanTransformer
  },
  gridRow: {
    property: 'gridRow',
    transform: gridSpanTransformer
  },
  gridArea: {
    property: 'gridArea',
    transform: gridSpanTransformer
  }
}

type GridChildProp<T extends keyof CSSProperties> = CSSProperties[T] | [CSSProperties[T], CSSProperties[T]]

interface GridProps {
  gridTemplateColumns?: CSSProperties['gridTemplateColumns'] | ResponsiveStyle<CSSProperties['gridTemplateColumns']>
  gridTemplateRows?: CSSProperties['gridTemplateRows'] | ResponsiveStyle<CSSProperties['gridTemplateRows']>
  gridTemplateAreas?: CSSProperties['gridTemplateAreas'] | ResponsiveStyle<CSSProperties['gridTemplateAreas']>
  columnGap?: CSSProperties['columnGap'] | ResponsiveStyle<CSSProperties['columnGap']>
  rowGap?: CSSProperties['rowGap'] | ResponsiveStyle<CSSProperties['rowGap']>
  gap?: CSSProperties['gap'] | ResponsiveStyle<CSSProperties['gap']>
  gridJustifyItems?: CSSProperties['justifyItems'] | ResponsiveStyle<CSSProperties['justifyItems']>
  gridAlignItems?: CSSProperties['alignItems'] | ResponsiveStyle<CSSProperties['alignItems']>
  gridJustifyContent?: CSSProperties['justifyContent'] | ResponsiveStyle<CSSProperties['justifyContent']>
  gridAlignContent?: CSSProperties['alignContent'] | ResponsiveStyle<CSSProperties['alignContent']>
  gridAutoColumns?: CSSProperties['gridAutoColumns'] | ResponsiveStyle<CSSProperties['gridAutoColumns']>
  gridAutoRows?: CSSProperties['gridAutoRows'] | ResponsiveStyle<CSSProperties['gridAutoRows']>
  gridAutoFlow?: CSSProperties['gridAutoFlow'] | ResponsiveStyle<CSSProperties['gridAutoFlow']>
  // Child Props
  gridColumn?: GridChildProp<'gridColumn'> | ResponsiveStyle<GridChildProp<'gridColumn'>>
  gridRow?: GridChildProp<'gridRow'> | ResponsiveStyle<GridChildProp<'gridRow'>>
  gridArea?: GridChildProp<'gridArea'> | ResponsiveStyle<GridChildProp<'gridArea'>>
}

const grid = createStyleFunction<GridProps>(config)

export { grid, config as gridConfig, GridProps }
