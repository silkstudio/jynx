// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle, StyledFunction, StyledFunctionConfig } from '../types'

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
    property: 'gridColumnGap',
    scale: 'spaces'
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'spaces'
  },
  gridGap: {
    property: 'gridGap',
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
  gridTemplateColumns?: CSS['gridTemplateColumns'] | ResponsiveStyle<CSS['gridTemplateColumns']>
  gridTemplateRows?: CSS['gridTemplateRows'] | ResponsiveStyle<CSS['gridTemplateRows']>
  gridTemplateAreas?: CSS['gridTemplateAreas'] | ResponsiveStyle<CSS['gridTemplateAreas']>
  gridColumnGap?: CSS['columnGap'] | ResponsiveStyle<CSS['columnGap']>
  gridRowGap?: CSS['rowGap'] | ResponsiveStyle<CSS['rowGap']>
  gridGap?: CSS['gap'] | ResponsiveStyle<CSS['gap']>
  gridJustifyItems?: CSS['justifyItems'] | ResponsiveStyle<CSS['justifyItems']>
  gridAlignItems?: CSS['alignItems'] | ResponsiveStyle<CSS['alignItems']>
  gridJustifyContent?: CSS['justifyContent'] | ResponsiveStyle<CSS['justifyContent']>
  gridAlignContent?: CSS['alignContent'] | ResponsiveStyle<CSS['alignContent']>
  gridAutoColumns?: CSS['gridAutoColumns'] | ResponsiveStyle<CSS['gridAutoColumns']>
  gridAutoRows?: CSS['gridAutoRows'] | ResponsiveStyle<CSS['gridAutoRows']>
  gridAutoFlow?: CSS['gridAutoFlow'] | ResponsiveStyle<CSS['gridAutoFlow']>
  // Child Props
  gridColumn?: CSS['gridColumn'] | ResponsiveStyle<CSS['gridColumn']>
  gridRow?: CSS['gridRow'] | ResponsiveStyle<CSS['gridRow']>
  gridArea?: CSS['gridArea'] | ResponsiveStyle<CSS['gridArea']>
}

const grid: StyledFunction<GridProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { grid, GridProps }
