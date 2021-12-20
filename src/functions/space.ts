// Types
import type { Property } from 'csstype'
import type { StyleFunctionConfig } from '../types/functions'
import type { StyleProp } from '../types/css'
import type { ThemeValue } from '../types/theme'
import type { OneOrMany } from '../types/common'

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
  margin?: StyleProp<OneOrMany<Property.Margin<ThemeValue<'spaces'> | number>>>
  marginTop?: StyleProp<Property.MarginTop<ThemeValue<'spaces'> | number>>
  marginRight?: StyleProp<Property.MarginRight<ThemeValue<'spaces'> | number>>
  marginBottom?: StyleProp<Property.MarginBottom<ThemeValue<'spaces'> | number>>
  marginLeft?: StyleProp<Property.MarginLeft<ThemeValue<'spaces'> | number>>
  marginBlock?: StyleProp<OneOrMany<Property.MarginBlock<ThemeValue<'spaces'> | number>>>
  marginBlockStart?: StyleProp<Property.MarginBlockStart<ThemeValue<'spaces'> | number>>
  marginBlockEnd?: StyleProp<Property.MarginBlockEnd<ThemeValue<'spaces'> | number>>
  marginInline?: StyleProp<OneOrMany<Property.MarginInline<ThemeValue<'spaces'> | number>>>
  marginInlineStart?: StyleProp<Property.MarginInlineStart<ThemeValue<'spaces'> | number>>
  marginInlineEnd?: StyleProp<Property.MarginInlineEnd<ThemeValue<'spaces'> | number>>
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
  padding?: StyleProp<OneOrMany<Property.Padding<ThemeValue<'spaces'> | number>>>
  paddingTop?: StyleProp<Property.PaddingTop<ThemeValue<'spaces'> | number>>
  paddingRight?: StyleProp<Property.PaddingRight<ThemeValue<'spaces'> | number>>
  paddingBottom?: StyleProp<Property.PaddingBottom<ThemeValue<'spaces'> | number>>
  paddingLeft?: StyleProp<Property.PaddingLeft<ThemeValue<'spaces'> | number>>
  paddingBlock?: StyleProp<OneOrMany<Property.PaddingBlock<ThemeValue<'spaces'> | number>>>
  paddingBlockStart?: StyleProp<Property.PaddingBlockStart<ThemeValue<'spaces'> | number>>
  paddingBlockEnd?: StyleProp<Property.PaddingBlockEnd<ThemeValue<'spaces'> | number>>
  paddingInline?: StyleProp<OneOrMany<Property.PaddingInline<ThemeValue<'spaces'> | number>>>
  paddingInlineStart?: StyleProp<Property.PaddingInlineStart<ThemeValue<'spaces'> | number>>
  paddingInlineEnd?: StyleProp<Property.PaddingInlineEnd<ThemeValue<'spaces'> | number>>
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
