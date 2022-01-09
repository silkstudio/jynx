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
    scale: 'space',
    transformer: spaceMultiTransformer
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transformer: spaceTransformer
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transformer: spaceTransformer
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transformer: spaceTransformer
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transformer: spaceTransformer
  },
  marginBlock: {
    property: 'marginBlock',
    scale: 'space',
    transformer: spaceMultiTransformer
  },
  marginBlockStart: {
    property: 'marginBlockStart',
    scale: 'space',
    transformer: spaceTransformer
  },
  marginBlockEnd: {
    property: 'marginBlockEnd',
    scale: 'space',
    transformer: spaceTransformer
  },
  marginInline: {
    property: 'marginInline',
    scale: 'space',
    transformer: spaceMultiTransformer
  },
  marginInlineStart: {
    property: 'marginInlineStart',
    scale: 'space',
    transformer: spaceTransformer
  },
  marginInlineEnd: {
    property: 'marginInlineEnd',
    scale: 'space',
    transformer: spaceTransformer
  }
}

interface MarginBaseProps {
  margin?: StyleProp<OneOrMany<Property.Margin<number> | ThemeValue<'space'>>>
  marginTop?: StyleProp<Property.MarginTop<number> | ThemeValue<'space'>>
  marginRight?: StyleProp<Property.MarginRight<number> | ThemeValue<'space'>>
  marginBottom?: StyleProp<Property.MarginBottom<number> | ThemeValue<'space'>>
  marginLeft?: StyleProp<Property.MarginLeft<number> | ThemeValue<'space'>>
  marginBlock?: StyleProp<OneOrMany<Property.MarginBlock<number> | ThemeValue<'space'>>>
  marginBlockStart?: StyleProp<Property.MarginBlockStart<number> | ThemeValue<'space'>>
  marginBlockEnd?: StyleProp<Property.MarginBlockEnd<number> | ThemeValue<'space'>>
  marginInline?: StyleProp<OneOrMany<Property.MarginInline<number> | ThemeValue<'space'>>>
  marginInlineStart?: StyleProp<Property.MarginInlineStart<number> | ThemeValue<'space'>>
  marginInlineEnd?: StyleProp<Property.MarginInlineEnd<number> | ThemeValue<'space'>>
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
    scale: 'space',
    transformer: spaceMultiTransformer
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    transformer: spaceTransformer
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    transformer: spaceTransformer
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    transformer: spaceTransformer
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    transformer: spaceTransformer
  },
  paddingBlock: {
    property: 'paddingBlock',
    scale: 'space',
    transformer: spaceMultiTransformer
  },
  paddingBlockStart: {
    property: 'paddingBlockStart',
    scale: 'space',
    transformer: spaceTransformer
  },
  paddingBlockEnd: {
    property: 'paddingBlockEnd',
    scale: 'space',
    transformer: spaceTransformer
  },
  paddingInline: {
    property: 'paddingInline',
    scale: 'space',
    transformer: spaceMultiTransformer
  },
  paddingInlineStart: {
    property: 'paddingInlineStart',
    scale: 'space',
    transformer: spaceTransformer
  },
  paddingInlineEnd: {
    property: 'paddingInlineEnd',
    scale: 'space',
    transformer: spaceTransformer
  }
}

interface PaddingBaseProps {
  padding?: StyleProp<OneOrMany<Property.Padding<ThemeValue<'space'> | number>>>
  paddingTop?: StyleProp<Property.PaddingTop<ThemeValue<'space'> | number>>
  paddingRight?: StyleProp<Property.PaddingRight<ThemeValue<'space'> | number>>
  paddingBottom?: StyleProp<Property.PaddingBottom<ThemeValue<'space'> | number>>
  paddingLeft?: StyleProp<Property.PaddingLeft<ThemeValue<'space'> | number>>
  paddingBlock?: StyleProp<OneOrMany<Property.PaddingBlock<ThemeValue<'space'> | number>>>
  paddingBlockStart?: StyleProp<Property.PaddingBlockStart<ThemeValue<'space'> | number>>
  paddingBlockEnd?: StyleProp<Property.PaddingBlockEnd<ThemeValue<'space'> | number>>
  paddingInline?: StyleProp<OneOrMany<Property.PaddingInline<ThemeValue<'space'> | number>>>
  paddingInlineStart?: StyleProp<Property.PaddingInlineStart<ThemeValue<'space'> | number>>
  paddingInlineEnd?: StyleProp<Property.PaddingInlineEnd<ThemeValue<'space'> | number>>
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
