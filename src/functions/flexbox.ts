// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle, StyledFunction, StyledFunctionConfig } from '../types'

// Utils
import { createStyles } from '../constructors'

/*








*/

const config: StyledFunctionConfig = {
  flexDirection: {
    property: 'flexDirection'
  },
  flexFlow: {
    property: 'flexFlow'
  },
  flexWrap: {
    property: 'flexWrap'
  },
  alignItems: {
    property: 'alignItems'
  },
  alignContent: {
    property: 'alignContent'
  },
  alignSelf: {
    property: 'alignSelf'
  },
  justifyContent: {
    property: 'justifyContent'
  },
  gap: {
    property: 'gap',
    scale: 'spaces'
  },
  flexGrow: {
    property: 'flexGrow'
  },
  flexShrink: {
    property: 'flexShrink'
  },
  flexBasis: {
    property: 'flexBasis'
  },
  order: {
    property: 'order'
  }
}

interface FlexboxProps {
  flexDirection?: CSS['flexDirection'] | ResponsiveStyle<CSS['flexDirection']>
  flexFlow?: CSS['flexFlow'] | ResponsiveStyle<CSS['flexFlow']>
  flexWrap?: CSS['flexWrap'] | ResponsiveStyle<CSS['flexWrap']>
  alignItems?: CSS['alignItems'] | ResponsiveStyle<CSS['alignItems']>
  alignContent?: CSS['alignContent'] | ResponsiveStyle<CSS['alignContent']>
  alignSelf?: CSS['alignSelf'] | ResponsiveStyle<CSS['alignSelf']>
  justifyContent?: CSS['justifyContent'] | ResponsiveStyle<CSS['justifyContent']>
  gap?: CSS['gap'] | ResponsiveStyle<CSS['gap']>
  flexGrow?: CSS['flexGrow'] | ResponsiveStyle<CSS['flexGrow']>
  flexShrink?: CSS['flexShrink'] | ResponsiveStyle<CSS['flexShrink']>
  flexBasis?: CSS['flexBasis'] | ResponsiveStyle<CSS['flexBasis']>
  order?: CSS['order'] | ResponsiveStyle<CSS['order']>
}

const flexbox: StyledFunction<FlexboxProps> = ({ theme, ...styles }) => {
  const result = createStyles<typeof styles>(styles, theme, config)

  if (Object.keys(styles).length) {
    result.display = 'flex'
  }

  return result
}

export { flexbox, FlexboxProps }
