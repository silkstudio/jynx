// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle, StyledFunction, StyledFunctionConfig } from '../types'

// Utils
import { createStyles } from '../constructors'

/*








*/

const config: StyledFunctionConfig = {
  margin: {
    property: 'margin',
    scale: 'spaces'
  },
  marginTop: {
    property: 'marginTop',
    scale: 'spaces'
  },
  marginRight: {
    property: 'marginRight',
    scale: 'spaces'
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'spaces'
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'spaces'
  },
  marginBlock: {
    property: 'marginBlock',
    scale: 'spaces'
  },
  marginBlockStart: {
    property: 'marginBlockStart',
    scale: 'spaces'
  },
  marginBlockEnd: {
    property: 'marginBlockEnd',
    scale: 'spaces'
  },
  marginInline: {
    property: 'marginInline',
    scale: 'spaces'
  },
  marginInlineStart: {
    property: 'marginInlineStart',
    scale: 'spaces'
  },
  marginInlineEnd: {
    property: 'marginInlineEnd',
    scale: 'spaces'
  },
  padding: {
    property: 'padding',
    scale: 'spaces'
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'spaces'
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'spaces'
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'spaces'
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'spaces'
  },
  paddingBlock: {
    property: 'paddingBlock',
    scale: 'spaces'
  },
  paddingBlockStart: {
    property: 'paddingBlockStart',
    scale: 'spaces'
  },
  paddingBlockEnd: {
    property: 'paddingBlockEnd',
    scale: 'spaces'
  },
  paddingInline: {
    property: 'paddingInline',
    scale: 'spaces'
  },
  paddingInlineStart: {
    property: 'paddingInlineStart',
    scale: 'spaces'
  },
  paddingInlineEnd: {
    property: 'paddingInlineEnd',
    scale: 'spaces'
  }
}

interface SpaceProps {
  margin?: CSS['margin'] | ResponsiveStyle<CSS['margin']>
  marginTop?: CSS['marginTop'] | ResponsiveStyle<CSS['marginTop']>
  marginRight?: CSS['marginRight'] | ResponsiveStyle<CSS['marginRight']>
  marginBottom?: CSS['marginBottom'] | ResponsiveStyle<CSS['marginBottom']>
  marginLeft?: CSS['marginLeft'] | ResponsiveStyle<CSS['marginLeft']>
  marginBlock?: CSS['marginBlock'] | ResponsiveStyle<CSS['marginBlock']>
  marginBlockStart?: CSS['marginBlockStart'] | ResponsiveStyle<CSS['marginBlockStart']>
  marginBlockEnd?: CSS['marginBlockEnd'] | ResponsiveStyle<CSS['marginBlockEnd']>
  marginInline?: CSS['marginInline'] | ResponsiveStyle<CSS['marginInline']>
  marginInlineStart?: CSS['marginInlineStart'] | ResponsiveStyle<CSS['marginInlineStart']>
  marginInlineEnd?: CSS['marginInlineEnd'] | ResponsiveStyle<CSS['marginInlineEnd']>
  padding?: CSS['padding'] | ResponsiveStyle<CSS['padding']>
  paddingTop?: CSS['paddingTop'] | ResponsiveStyle<CSS['paddingTop']>
  paddingRight?: CSS['paddingRight'] | ResponsiveStyle<CSS['paddingRight']>
  paddingBottom?: CSS['paddingBottom'] | ResponsiveStyle<CSS['paddingBottom']>
  paddingLeft?: CSS['paddingLeft'] | ResponsiveStyle<CSS['paddingLeft']>
  paddingBlock?: CSS['paddingBlock'] | ResponsiveStyle<CSS['paddingBlock']>
  paddingBlockStart?: CSS['paddingBlockStart'] | ResponsiveStyle<CSS['paddingBlockStart']>
  paddingBlockEnd?: CSS['paddingBlockEnd'] | ResponsiveStyle<CSS['paddingBlockEnd']>
  paddingInline?: CSS['paddingInline'] | ResponsiveStyle<CSS['paddingInline']>
  paddingInlineStart?: CSS['paddingInlineStart'] | ResponsiveStyle<CSS['paddingInlineStart']>
  paddingInlineEnd?: CSS['paddingInlineEnd'] | ResponsiveStyle<CSS['paddingInlineEnd']>
}

const space: StyledFunction<SpaceProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { space, SpaceProps }
