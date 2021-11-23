import { css } from 'styled-components'

// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface FlexboxProps {
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
