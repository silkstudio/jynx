// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunction, StyledFunctionConfig } from '../types/functions'

// Utils
import { createStyles } from '../constructors'

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
  gridColumnGap: {
    property: 'columnGap',
    scale: 'spaces'
  },
  gridRowGap: {
    property: 'rowGap',
    scale: 'spaces'
  },
  gridGap: {
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
  gridTemplateColumns?: CSSProperties['gridTemplateColumns'] | ResponsiveStyle<CSSProperties['gridTemplateColumns']>
  gridTemplateRows?: CSSProperties['gridTemplateRows'] | ResponsiveStyle<CSSProperties['gridTemplateRows']>
  gridTemplateAreas?: CSSProperties['gridTemplateAreas'] | ResponsiveStyle<CSSProperties['gridTemplateAreas']>
  gridColumnGap?: CSSProperties['columnGap'] | ResponsiveStyle<CSSProperties['columnGap']>
  gridRowGap?: CSSProperties['rowGap'] | ResponsiveStyle<CSSProperties['rowGap']>
  gridGap?: CSSProperties['gap'] | ResponsiveStyle<CSSProperties['gap']>
  gridJustifyItems?: CSSProperties['justifyItems'] | ResponsiveStyle<CSSProperties['justifyItems']>
  gridAlignItems?: CSSProperties['alignItems'] | ResponsiveStyle<CSSProperties['alignItems']>
  gridJustifyContent?: CSSProperties['justifyContent'] | ResponsiveStyle<CSSProperties['justifyContent']>
  gridAlignContent?: CSSProperties['alignContent'] | ResponsiveStyle<CSSProperties['alignContent']>
  gridAutoColumns?: CSSProperties['gridAutoColumns'] | ResponsiveStyle<CSSProperties['gridAutoColumns']>
  gridAutoRows?: CSSProperties['gridAutoRows'] | ResponsiveStyle<CSSProperties['gridAutoRows']>
  gridAutoFlow?: CSSProperties['gridAutoFlow'] | ResponsiveStyle<CSSProperties['gridAutoFlow']>
  // Child Props
  gridColumn?: CSSProperties['gridColumn'] | ResponsiveStyle<CSSProperties['gridColumn']>
  gridRow?: CSSProperties['gridRow'] | ResponsiveStyle<CSSProperties['gridRow']>
  gridArea?: CSSProperties['gridArea'] | ResponsiveStyle<CSSProperties['gridArea']>
}

const grid: StyledFunction<GridProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { grid, GridProps }
