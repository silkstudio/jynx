import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { parser } from '../parsers/parser'

/*








*/

export interface GridProps {
  gridTemplateColumns?: CSSProperties['gridTemplateColumns'] | ResponsiveStyle<CSSProperties['gridTemplateColumns']>
  gridTemplateRows?: CSSProperties['gridTemplateRows'] | ResponsiveStyle<CSSProperties['gridTemplateRows']>
  gridTemplateAreas?: CSSProperties['gridTemplateAreas'] | ResponsiveStyle<CSSProperties['gridTemplateAreas']>
  gridColumnGap?: CSSProperties['columnGap'] | ResponsiveStyle<CSSProperties['columnGap']>
  gridRowGap?: CSSProperties['rowGap'] | ResponsiveStyle<CSSProperties['rowGap']>
  gridGap?: CSSProperties['gap'] | ResponsiveStyle<CSSProperties['gap']>
  gridJustifyItems?: CSSProperties['justifyItems'] | ResponsiveStyle<CSSProperties['justifyItems']>
  gridAlignItems?: CSSProperties['alignItems'] | ResponsiveStyle<CSSProperties['alignItems']>
  gridJustifyContent?: CSSProperties['justifyContent'] | ResponsiveStyle<CSSProperties['justifyContent']>
  gridAlignContent?: CSSProperties['alignContent'] | ResponsiveStyle<CSSProperties['alignContent']>
  gridAutoColumns?: CSSProperties['gridAutoColumns'] | ResponsiveStyle<CSSProperties['gridAutoColumns']>
  gridAutoRows?: CSSProperties['gridAutoRows'] | ResponsiveStyle<CSSProperties['gridAutoRows']>
  gridAutoFlow?: CSSProperties['gridAutoFlow'] | ResponsiveStyle<CSSProperties['gridAutoFlow']>
  // Child Props
  gridColumn?: CSSProperties['gridColumn'] | ResponsiveStyle<CSSProperties['gridColumn']>
  gridRow?: CSSProperties['gridRow'] | ResponsiveStyle<CSSProperties['gridRow']>
  gridArea?: CSSProperties['gridArea'] | ResponsiveStyle<CSSProperties['gridArea']>
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
