import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface FlexboxProps {
  flexDirection?: CSSProperties['flexDirection'] | ResponsiveStyle<CSSProperties['flexDirection']>
  flexFlow?: CSSProperties['flexFlow'] | ResponsiveStyle<CSSProperties['flexFlow']>
  flexWrap?: CSSProperties['flexWrap'] | ResponsiveStyle<CSSProperties['flexWrap']>
  alignItems?: CSSProperties['alignItems'] | ResponsiveStyle<CSSProperties['alignItems']>
  alignContent?: CSSProperties['alignContent'] | ResponsiveStyle<CSSProperties['alignContent']>
  alignSelf?: CSSProperties['alignSelf'] | ResponsiveStyle<CSSProperties['alignSelf']>
  justifyContent?: CSSProperties['justifyContent'] | ResponsiveStyle<CSSProperties['justifyContent']>
  gap?: CSSProperties['gap'] | ResponsiveStyle<CSSProperties['gap']>
  flexGrow?: CSSProperties['flexGrow'] | ResponsiveStyle<CSSProperties['flexGrow']>
  flexShrink?: CSSProperties['flexShrink'] | ResponsiveStyle<CSSProperties['flexShrink']>
  flexBasis?: CSSProperties['flexBasis'] | ResponsiveStyle<CSSProperties['flexBasis']>
  order?: CSSProperties['order'] | ResponsiveStyle<CSSProperties['order']>
}

export const flexbox = css<FlexboxProps>`
  ${({
    flexDirection,
    flexFlow,
    flexWrap,
    alignItems,
    alignContent,
    alignSelf,
    justifyContent,
    gap,
    flexGrow,
    flexShrink,
    flexBasis,
    order
  }) =>
    (flexDirection ||
      flexFlow ||
      flexWrap ||
      order ||
      alignItems ||
      alignContent ||
      alignSelf ||
      justifyContent ||
      gap ||
      flexGrow ||
      flexShrink ||
      flexBasis) &&
    css`
      display: flex;
    `}

  ${({ flexDirection: T, theme }) => T && parser('flexDirection', T, theme)}
  ${({ flexFlow: T, theme }) => T && parser('flexFlow', T, theme)}
  ${({ flexWrap: T, theme }) => T && parser('flexWrap', T, theme)}
  ${({ alignItems: T, theme }) => T && parser('alignItems', T, theme)}
  ${({ alignContent: T, theme }) => T && parser('alignContent', T, theme)}
  ${({ alignSelf: T, theme }) => T && parser('alignSelf', T, theme)}
  ${({ justifyContent: T, theme }) => T && parser('justifyContent', T, theme)}
  ${({ gap: T, theme }) => T && parser('gap', T, theme)}
  ${({ flexGrow: T, theme }) => T && parser('flexGrow', T, theme)}
  ${({ flexShrink: T, theme }) => T && parser('flexShrink', T, theme)}
  ${({ flexBasis: T, theme }) => T && parser('flexBasis', T, theme)}
  ${({ order: T, theme }) => T && parser('order', T, theme)}
`
