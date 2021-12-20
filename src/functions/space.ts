// Types
import type { CSSProperties, StylePropWithScale } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
import type { StyleFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'
import { spaceMultiTransformer, spaceTransformer } from '../transformers/space'
import { ThemeValue } from '..'

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

type SpaceArrayProp<T extends keyof CSSProperties> =
  | CSSProperties[T]
  | ThemeValue<'spaces'>
  | (CSSProperties[T] | ThemeValue<'spaces'>)[]

interface MarginBaseProps {
  margin?: SpaceArrayProp<'margin'> | ResponsiveStyle<SpaceArrayProp<'margin'>>
  marginTop?: StylePropWithScale<'marginTop', 'spaces'>
  marginRight?: StylePropWithScale<'marginRight', 'spaces'>
  marginBottom?: StylePropWithScale<'marginBottom', 'spaces'>
  marginLeft?: StylePropWithScale<'marginLeft', 'spaces'>
  marginBlock?: SpaceArrayProp<'marginBlock'> | ResponsiveStyle<SpaceArrayProp<'marginBlock'>>
  marginBlockStart?: StylePropWithScale<'marginBlockStart', 'spaces'>
  marginBlockEnd?: StylePropWithScale<'marginBlockEnd', 'spaces'>
  marginInline?: SpaceArrayProp<'marginInline'> | ResponsiveStyle<SpaceArrayProp<'marginInline'>>
  marginInlineStart?: StylePropWithScale<'marginInlineStart', 'spaces'>
  marginInlineEnd?: StylePropWithScale<'marginInlineEnd', 'spaces'>
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
  padding?: SpaceArrayProp<'padding'> | ResponsiveStyle<SpaceArrayProp<'padding'>>
  paddingTop?: StylePropWithScale<'paddingTop', 'spaces'>
  paddingRight?: StylePropWithScale<'paddingRight', 'spaces'>
  paddingBottom?: StylePropWithScale<'paddingBottom', 'spaces'>
  paddingLeft?: StylePropWithScale<'paddingLeft', 'spaces'>
  paddingBlock?: SpaceArrayProp<'paddingBlock'> | ResponsiveStyle<SpaceArrayProp<'paddingBlock'>>
  paddingBlockStart?: StylePropWithScale<'paddingBlockStart', 'spaces'>
  paddingBlockEnd?: StylePropWithScale<'paddingBlockEnd', 'spaces'>
  paddingInline?: SpaceArrayProp<'paddingInline'> | ResponsiveStyle<SpaceArrayProp<'paddingInline'>>
  paddingInlineStart?: StylePropWithScale<'paddingInlineStart', 'spaces'>
  paddingInlineEnd?: StylePropWithScale<'paddingInlineEnd', 'spaces'>
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
