// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunction, StyledFunctionConfig } from '../types/functions'

// Utils
import { createStyles } from '../constructors'
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

type GridProp<T extends keyof CSSProperties> = CSSProperties[T] | [CSSProperties[T], CSSProperties[T]]

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
  gridColumn?: GridProp<'gridColumn'> | ResponsiveStyle<GridProp<'gridColumn'>>
  gridRow?: CSSProperties['gridRow'] | ResponsiveStyle<CSSProperties['gridRow']>
  gridArea?: CSSProperties['gridArea'] | ResponsiveStyle<CSSProperties['gridArea']>
}

const grid: StyledFunction<GridProps> = ({ theme, ...styles }) => {
  return createStyles<GridProps>(styles, theme, config)
}

export { grid, GridProps }
