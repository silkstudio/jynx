// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyledFunction, StyledFunctionConfig } from '../types/functions'

// Utils
import { createStyles } from '../constructors'

/*








*/

const marginConfig: StyledFunctionConfig = {
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
  }
}

interface MarginProps {
  margin?: CSSProperties['margin'] | ResponsiveStyle<CSSProperties['margin']>
  m?: CSSProperties['margin'] | ResponsiveStyle<CSSProperties['margin']>
  marginTop?: CSSProperties['marginTop'] | ResponsiveStyle<CSSProperties['marginTop']>
  mt?: CSSProperties['marginTop'] | ResponsiveStyle<CSSProperties['marginTop']>
  marginRight?: CSSProperties['marginRight'] | ResponsiveStyle<CSSProperties['marginRight']>
  mr?: CSSProperties['marginRight'] | ResponsiveStyle<CSSProperties['marginRight']>
  marginBottom?: CSSProperties['marginBottom'] | ResponsiveStyle<CSSProperties['marginBottom']>
  mb?: CSSProperties['marginBottom'] | ResponsiveStyle<CSSProperties['marginBottom']>
  marginLeft?: CSSProperties['marginLeft'] | ResponsiveStyle<CSSProperties['marginLeft']>
  ml?: CSSProperties['marginLeft'] | ResponsiveStyle<CSSProperties['marginLeft']>
  marginBlock?: CSSProperties['marginBlock'] | ResponsiveStyle<CSSProperties['marginBlock']>
  mbl?: CSSProperties['marginBlock'] | ResponsiveStyle<CSSProperties['marginBlock']>
  marginBlockStart?: CSSProperties['marginBlockStart'] | ResponsiveStyle<CSSProperties['marginBlockStart']>
  mbs?: CSSProperties['marginBlockStart'] | ResponsiveStyle<CSSProperties['marginBlockStart']>
  marginBlockEnd?: CSSProperties['marginBlockEnd'] | ResponsiveStyle<CSSProperties['marginBlockEnd']>
  mbe?: CSSProperties['marginBlockEnd'] | ResponsiveStyle<CSSProperties['marginBlockEnd']>
  marginInline?: CSSProperties['marginInline'] | ResponsiveStyle<CSSProperties['marginInline']>
  mi?: CSSProperties['marginInline'] | ResponsiveStyle<CSSProperties['marginInline']>
  marginInlineStart?: CSSProperties['marginInlineStart'] | ResponsiveStyle<CSSProperties['marginInlineStart']>
  mis?: CSSProperties['marginInlineStart'] | ResponsiveStyle<CSSProperties['marginInlineStart']>
  marginInlineEnd?: CSSProperties['marginInlineEnd'] | ResponsiveStyle<CSSProperties['marginInlineEnd']>
  mie?: CSSProperties['marginInlineEnd'] | ResponsiveStyle<CSSProperties['marginInlineEnd']>
}

const paddingConfig: StyledFunctionConfig = {
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

interface PaddingProps {
  padding?: CSSProperties['padding'] | ResponsiveStyle<CSSProperties['padding']>
  p?: CSSProperties['padding'] | ResponsiveStyle<CSSProperties['padding']>
  paddingTop?: CSSProperties['paddingTop'] | ResponsiveStyle<CSSProperties['paddingTop']>
  pt?: CSSProperties['paddingTop'] | ResponsiveStyle<CSSProperties['paddingTop']>
  paddingRight?: CSSProperties['paddingRight'] | ResponsiveStyle<CSSProperties['paddingRight']>
  pr?: CSSProperties['paddingRight'] | ResponsiveStyle<CSSProperties['paddingRight']>
  paddingBottom?: CSSProperties['paddingBottom'] | ResponsiveStyle<CSSProperties['paddingBottom']>
  pb?: CSSProperties['paddingBottom'] | ResponsiveStyle<CSSProperties['paddingBottom']>
  paddingLeft?: CSSProperties['paddingLeft'] | ResponsiveStyle<CSSProperties['paddingLeft']>
  pl?: CSSProperties['paddingLeft'] | ResponsiveStyle<CSSProperties['paddingLeft']>
  paddingBlock?: CSSProperties['paddingBlock'] | ResponsiveStyle<CSSProperties['paddingBlock']>
  pbl?: CSSProperties['paddingBlock'] | ResponsiveStyle<CSSProperties['paddingBlock']>
  paddingBlockStart?: CSSProperties['paddingBlockStart'] | ResponsiveStyle<CSSProperties['paddingBlockStart']>
  pbls?: CSSProperties['paddingBlockStart'] | ResponsiveStyle<CSSProperties['paddingBlockStart']>
  paddingBlockEnd?: CSSProperties['paddingBlockEnd'] | ResponsiveStyle<CSSProperties['paddingBlockEnd']>
  pble?: CSSProperties['paddingBlockEnd'] | ResponsiveStyle<CSSProperties['paddingBlockEnd']>
  paddingInline?: CSSProperties['paddingInline'] | ResponsiveStyle<CSSProperties['paddingInline']>
  pi?: CSSProperties['paddingInline'] | ResponsiveStyle<CSSProperties['paddingInline']>
  paddingInlineStart?: CSSProperties['paddingInlineStart'] | ResponsiveStyle<CSSProperties['paddingInlineStart']>
  pis?: CSSProperties['paddingInlineStart'] | ResponsiveStyle<CSSProperties['paddingInlineStart']>
  paddingInlineEnd?: CSSProperties['paddingInlineEnd'] | ResponsiveStyle<CSSProperties['paddingInlineEnd']>
  pie?: CSSProperties['paddingInlineEnd'] | ResponsiveStyle<CSSProperties['paddingInlineEnd']>
}

const config: StyledFunctionConfig = { ...marginConfig, ...paddingConfig }

// eslint-disable-next-line
interface SpaceProps extends MarginProps, PaddingProps {}

const space: StyledFunction<SpaceProps> = ({ theme, ...styles }) => {
  return createStyles<SpaceProps>(styles, theme, config)
}

config.m = marginConfig.margin
config.mt = marginConfig.marginTop
config.mr = marginConfig.marginRight
config.mb = marginConfig.marginBottom
config.ml = marginConfig.marginLeft
config.mbl = marginConfig.marginBlock
config.mbs = marginConfig.marginBlockStart
config.mbe = marginConfig.marginBlockEnd
config.mi = marginConfig.marginInline
config.mis = marginConfig.marginInlineStart
config.mie = marginConfig.marginInlineEnd

config.p = paddingConfig.padding
config.pt = paddingConfig.paddingTop
config.pr = paddingConfig.paddingRight
config.pb = paddingConfig.paddingBottom
config.pl = paddingConfig.paddingLeft
config.pbl = paddingConfig.paddingBlock
config.pbs = paddingConfig.paddingBlockStart
config.pbe = paddingConfig.paddingBlockEnd
config.pi = paddingConfig.paddingInline
config.pis = paddingConfig.paddingInlineStart
config.pie = paddingConfig.paddingInlineEnd

export { space, SpaceProps }
