// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunction, StyledFunctionConfig } from '../types/functions'

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
  margin?: CSSProperties['margin'] | ResponsiveStyle<CSSProperties['margin']>
  marginTop?: CSSProperties['marginTop'] | ResponsiveStyle<CSSProperties['marginTop']>
  marginRight?: CSSProperties['marginRight'] | ResponsiveStyle<CSSProperties['marginRight']>
  marginBottom?: CSSProperties['marginBottom'] | ResponsiveStyle<CSSProperties['marginBottom']>
  marginLeft?: CSSProperties['marginLeft'] | ResponsiveStyle<CSSProperties['marginLeft']>
  marginBlock?: CSSProperties['marginBlock'] | ResponsiveStyle<CSSProperties['marginBlock']>
  marginBlockStart?: CSSProperties['marginBlockStart'] | ResponsiveStyle<CSSProperties['marginBlockStart']>
  marginBlockEnd?: CSSProperties['marginBlockEnd'] | ResponsiveStyle<CSSProperties['marginBlockEnd']>
  marginInline?: CSSProperties['marginInline'] | ResponsiveStyle<CSSProperties['marginInline']>
  marginInlineStart?: CSSProperties['marginInlineStart'] | ResponsiveStyle<CSSProperties['marginInlineStart']>
  marginInlineEnd?: CSSProperties['marginInlineEnd'] | ResponsiveStyle<CSSProperties['marginInlineEnd']>
  padding?: CSSProperties['padding'] | ResponsiveStyle<CSSProperties['padding']>
  paddingTop?: CSSProperties['paddingTop'] | ResponsiveStyle<CSSProperties['paddingTop']>
  paddingRight?: CSSProperties['paddingRight'] | ResponsiveStyle<CSSProperties['paddingRight']>
  paddingBottom?: CSSProperties['paddingBottom'] | ResponsiveStyle<CSSProperties['paddingBottom']>
  paddingLeft?: CSSProperties['paddingLeft'] | ResponsiveStyle<CSSProperties['paddingLeft']>
  paddingBlock?: CSSProperties['paddingBlock'] | ResponsiveStyle<CSSProperties['paddingBlock']>
  paddingBlockStart?: CSSProperties['paddingBlockStart'] | ResponsiveStyle<CSSProperties['paddingBlockStart']>
  paddingBlockEnd?: CSSProperties['paddingBlockEnd'] | ResponsiveStyle<CSSProperties['paddingBlockEnd']>
  paddingInline?: CSSProperties['paddingInline'] | ResponsiveStyle<CSSProperties['paddingInline']>
  paddingInlineStart?: CSSProperties['paddingInlineStart'] | ResponsiveStyle<CSSProperties['paddingInlineStart']>
  paddingInlineEnd?: CSSProperties['paddingInlineEnd'] | ResponsiveStyle<CSSProperties['paddingInlineEnd']>
}

const space: StyledFunction<SpaceProps> = ({ theme, ...styles }) => {
  return createStyles<typeof styles>(styles, theme, config)
}

export { space, SpaceProps }
