// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyleFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'
import { spaceMultiTransformer, spaceTransformer } from '../transformers/space'

/*








*/

// Margin
const marginConfig: StyleFunctionConfig = {
  margin: {
    property: 'margin',
    scale: 'spaces',
    transformer: spaceMultiTransformer
  },
  marginTop: {
    property: 'marginTop',
    scale: 'spaces',
    transformer: spaceTransformer
  },
  marginRight: {
    property: 'marginRight',
    scale: 'spaces',
    transformer: spaceTransformer
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'spaces',
    transformer: spaceTransformer
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'spaces',
    transformer: spaceTransformer
  },
  marginBlock: {
    property: 'marginBlock',
    scale: 'spaces',
    transformer: spaceMultiTransformer
  },
  marginBlockStart: {
    property: 'marginBlockStart',
    scale: 'spaces',
    transformer: spaceTransformer
  },
  marginBlockEnd: {
    property: 'marginBlockEnd',
    scale: 'spaces',
    transformer: spaceTransformer
  },
  marginInline: {
    property: 'marginInline',
    scale: 'spaces',
    transformer: spaceMultiTransformer
  },
  marginInlineStart: {
    property: 'marginInlineStart',
    scale: 'spaces',
    transformer: spaceTransformer
  },
  marginInlineEnd: {
    property: 'marginInlineEnd',
    scale: 'spaces',
    transformer: spaceTransformer
  }
}

interface MarginBaseProps {
  margin?: CSSProperties['margin'] | CSSProperties['margin'][] | ResponsiveStyle<CSSProperties['margin'] | CSSProperties['margin'][]>
  marginTop?: CSSProperties['marginTop'] | ResponsiveStyle<CSSProperties['marginTop']>
  marginRight?: CSSProperties['marginRight'] | ResponsiveStyle<CSSProperties['marginRight']>
  marginBottom?: CSSProperties['marginBottom'] | ResponsiveStyle<CSSProperties['marginBottom']>
  marginLeft?: CSSProperties['marginLeft'] | ResponsiveStyle<CSSProperties['marginLeft']>
  marginBlock?:
    | CSSProperties['marginBlock']
    | CSSProperties['marginBlock'][]
    | ResponsiveStyle<CSSProperties['marginBlock'] | CSSProperties['marginBlock'][]>
  marginBlockStart?: CSSProperties['marginBlockStart'] | ResponsiveStyle<CSSProperties['marginBlockStart']>
  marginBlockEnd?: CSSProperties['marginBlockEnd'] | ResponsiveStyle<CSSProperties['marginBlockEnd']>
  marginInline?:
    | CSSProperties['marginInline']
    | CSSProperties['marginInline'][]
    | ResponsiveStyle<CSSProperties['marginInline'] | CSSProperties['marginInline'][]>
  marginInlineStart?: CSSProperties['marginInlineStart'] | ResponsiveStyle<CSSProperties['marginInlineStart']>
  marginInlineEnd?: CSSProperties['marginInlineEnd'] | ResponsiveStyle<CSSProperties['marginInlineEnd']>
}

interface MarginShorthandProps {
  m?: MarginBaseProps['margin']
  mt?: MarginBaseProps['marginTop']
  mr?: MarginBaseProps['marginRight']
  mb?: MarginBaseProps['marginBottom']
  ml?: MarginBaseProps['marginLeft']
  mbl?: MarginBaseProps['marginBlock']
  mbs?: MarginBaseProps['marginBlockStart']
  mbe?: MarginBaseProps['marginBlockEnd']
  mi?: MarginBaseProps['marginInline']
  mis?: MarginBaseProps['marginInlineStart']
  mie?: MarginBaseProps['marginInlineEnd']
}

interface MarginProps extends MarginBaseProps, MarginShorthandProps {}

// Padding
const paddingConfig: StyleFunctionConfig = {
  padding: {
    property: 'padding',
    scale: 'spaces',
    transformer: spaceMultiTransformer
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'spaces',
    transformer: spaceTransformer
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'spaces',
    transformer: spaceTransformer
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'spaces',
    transformer: spaceTransformer
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'spaces',
    transformer: spaceTransformer
  },
  paddingBlock: {
    property: 'paddingBlock',
    scale: 'spaces',
    transformer: spaceMultiTransformer
  },
  paddingBlockStart: {
    property: 'paddingBlockStart',
    scale: 'spaces',
    transformer: spaceTransformer
  },
  paddingBlockEnd: {
    property: 'paddingBlockEnd',
    scale: 'spaces',
    transformer: spaceTransformer
  },
  paddingInline: {
    property: 'paddingInline',
    scale: 'spaces',
    transformer: spaceMultiTransformer
  },
  paddingInlineStart: {
    property: 'paddingInlineStart',
    scale: 'spaces',
    transformer: spaceTransformer
  },
  paddingInlineEnd: {
    property: 'paddingInlineEnd',
    scale: 'spaces',
    transformer: spaceTransformer
  }
}

interface PaddingBaseProps {
  padding?:
    | CSSProperties['padding']
    | CSSProperties['padding'][]
    | ResponsiveStyle<CSSProperties['padding'] | CSSProperties['padding'][]>
  paddingTop?: CSSProperties['paddingTop'] | ResponsiveStyle<CSSProperties['paddingTop']>
  paddingRight?: CSSProperties['paddingRight'] | ResponsiveStyle<CSSProperties['paddingRight']>
  paddingBottom?: CSSProperties['paddingBottom'] | ResponsiveStyle<CSSProperties['paddingBottom']>
  paddingLeft?: CSSProperties['paddingLeft'] | ResponsiveStyle<CSSProperties['paddingLeft']>
  paddingBlock?:
    | CSSProperties['paddingBlock']
    | CSSProperties['paddingBlock'][]
    | ResponsiveStyle<CSSProperties['paddingBlock'] | CSSProperties['paddingBlock'][]>
  paddingBlockStart?: CSSProperties['paddingBlockStart'] | ResponsiveStyle<CSSProperties['paddingBlockStart']>
  paddingBlockEnd?: CSSProperties['paddingBlockEnd'] | ResponsiveStyle<CSSProperties['paddingBlockEnd']>
  paddingInline?:
    | CSSProperties['paddingInline']
    | CSSProperties['paddingInline'][]
    | ResponsiveStyle<CSSProperties['paddingInline'] | CSSProperties['paddingInline'][]>
  paddingInlineStart?: CSSProperties['paddingInlineStart'] | ResponsiveStyle<CSSProperties['paddingInlineStart']>
  paddingInlineEnd?: CSSProperties['paddingInlineEnd'] | ResponsiveStyle<CSSProperties['paddingInlineEnd']>
}

interface PaddingShorthandProps {
  p?: PaddingBaseProps['padding']
  pt?: PaddingBaseProps['paddingTop']
  pr?: PaddingBaseProps['paddingRight']
  pb?: PaddingBaseProps['paddingBottom']
  pl?: PaddingBaseProps['paddingLeft']
  pbl?: PaddingBaseProps['paddingBlock']
  pbls?: PaddingBaseProps['paddingBlockStart']
  pble?: PaddingBaseProps['paddingBlockEnd']
  pi?: PaddingBaseProps['paddingInline']
  pis?: PaddingBaseProps['paddingInlineStart']
  pie?: PaddingBaseProps['paddingInlineEnd']
}

interface PaddingProps extends PaddingBaseProps, PaddingShorthandProps {}

// Space
const config: StyleFunctionConfig = { ...marginConfig, ...paddingConfig }

interface SpaceProps extends MarginProps, PaddingProps {}

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

const space = createStyleFunction<SpaceProps>(config)

export {
  space,
  marginConfig,
  paddingConfig,
  config as spaceConfig,
  SpaceProps,
  MarginProps,
  MarginBaseProps,
  MarginShorthandProps,
  PaddingProps,
  PaddingBaseProps,
  PaddingShorthandProps
}
