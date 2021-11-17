import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { styleParser } from '../parsers/styleParser'

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

  ${({ flexDirection: T, theme }) => T && styleParser('flexDirection', T, theme)}
  ${({ flexFlow: T, theme }) => T && styleParser('flexFlow', T, theme)}
  ${({ flexWrap: T, theme }) => T && styleParser('flexWrap', T, theme)}
  ${({ alignItems: T, theme }) => T && styleParser('alignItems', T, theme)}
  ${({ alignContent: T, theme }) => T && styleParser('alignContent', T, theme)}
  ${({ alignSelf: T, theme }) => T && styleParser('alignSelf', T, theme)}
  ${({ justifyContent: T, theme }) => T && styleParser('justifyContent', T, theme)}
  ${({ gap: T, theme }) => T && styleParser('gap', T, theme)}
  ${({ flexGrow: T, theme }) => T && styleParser('flexGrow', T, theme)}
  ${({ flexShrink: T, theme }) => T && styleParser('flexShrink', T, theme)}
  ${({ flexBasis: T, theme }) => T && styleParser('flexBasis', T, theme)}
  ${({ order: T, theme }) => T && styleParser('order', T, theme)}
`
