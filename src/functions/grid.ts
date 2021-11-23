import { css } from 'styled-components'

// Types
import { Properties as CSS } from 'csstype'
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface GridProps {
  gridTemplateColumns?: CSS['gridTemplateColumns'] | ResponsiveStyle<CSS['gridTemplateColumns']>
  gridTemplateRows?: CSS['gridTemplateRows'] | ResponsiveStyle<CSS['gridTemplateRows']>
  gridTemplateAreas?: CSS['gridTemplateAreas'] | ResponsiveStyle<CSS['gridTemplateAreas']>
  gridColumnGap?: CSS['columnGap'] | ResponsiveStyle<CSS['columnGap']>
  gridRowGap?: CSS['rowGap'] | ResponsiveStyle<CSS['rowGap']>
  gridGap?: CSS['gap'] | ResponsiveStyle<CSS['gap']>
  gridJustifyItems?: CSS['justifyItems'] | ResponsiveStyle<CSS['justifyItems']>
  gridAlignItems?: CSS['alignItems'] | ResponsiveStyle<CSS['alignItems']>
  gridJustifyContent?: CSS['justifyContent'] | ResponsiveStyle<CSS['justifyContent']>
  gridAlignContent?: CSS['alignContent'] | ResponsiveStyle<CSS['alignContent']>
  gridAutoColumns?: CSS['gridAutoColumns'] | ResponsiveStyle<CSS['gridAutoColumns']>
  gridAutoRows?: CSS['gridAutoRows'] | ResponsiveStyle<CSS['gridAutoRows']>
  gridAutoFlow?: CSS['gridAutoFlow'] | ResponsiveStyle<CSS['gridAutoFlow']>
  // Child Props
  gridColumn?: CSS['gridColumn'] | ResponsiveStyle<CSS['gridColumn']>
  gridRow?: CSS['gridRow'] | ResponsiveStyle<CSS['gridRow']>
  gridArea?: CSS['gridArea'] | ResponsiveStyle<CSS['gridArea']>
}

export const grid = css<GridProps>`
  ${({ gridTemplateColumns: T, theme }) => T && parser('gridTemplateColumns', T, theme)}
  ${({ gridTemplateRows: T, theme }) => T && parser('gridTemplateRows', T, theme)}
  ${({ gridTemplateAreas: T, theme }) => T && parser('gridTemplateAreas', T, theme)}
  ${({ gridColumnGap: T, theme }) => T && parser('columnGap', T, theme)}
  ${({ gridRowGap: T, theme }) => T && parser('rowGap', T, theme)}
  ${({ gridGap: T, theme }) => T && parser('gap', T, theme)}
  ${({ gridJustifyItems: T, theme }) => T && parser('justifyItems', T, theme)}
  ${({ gridAlignItems: T, theme }) => T && parser('alignItems', T, theme)}
  ${({ gridJustifyContent: T, theme }) => T && parser('justifyContent', T, theme)}
  ${({ gridAlignContent: T, theme }) => T && parser('alignContent', T, theme)}
  ${({ gridAutoColumns: T, theme }) => T && parser('gridAutoColumns', T, theme)}
  ${({ gridAutoRows: T, theme }) => T && parser('gridAutoRows', T, theme)}
  ${({ gridAutoFlow: T, theme }) => T && parser('gridAutoFlow', T, theme)}
  // Child Props
  ${({ gridColumn: T, theme }) => T && parser('gridColumn', T, theme)}
  ${({ gridRow: T, theme }) => T && parser('gridRow', T, theme)}
  ${({ gridArea: T, theme }) => T && parser('gridArea', T, theme)}
`
