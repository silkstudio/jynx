import { CSSProperties, css } from 'styled-components'

// Types
import { ResponsiveStyle } from '../types'

// Utils
import { styleParser } from '../parsers/styleParser'

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
  ${({ gridTemplateColumns: T, theme }) => T && styleParser('gridTemplateColumns', T, theme)}
  ${({ gridTemplateRows: T, theme }) => T && styleParser('gridTemplateRows', T, theme)}
  ${({ gridTemplateAreas: T, theme }) => T && styleParser('gridTemplateAreas', T, theme)}
  ${({ gridColumnGap: T, theme }) => T && styleParser('columnGap', T, theme)}
  ${({ gridRowGap: T, theme }) => T && styleParser('rowGap', T, theme)}
  ${({ gridGap: T, theme }) => T && styleParser('gap', T, theme)}
  ${({ gridJustifyItems: T, theme }) => T && styleParser('justifyItems', T, theme)}
  ${({ gridAlignItems: T, theme }) => T && styleParser('alignItems', T, theme)}
  ${({ gridJustifyContent: T, theme }) => T && styleParser('justifyContent', T, theme)}
  ${({ gridAlignContent: T, theme }) => T && styleParser('alignContent', T, theme)}
  ${({ gridAutoColumns: T, theme }) => T && styleParser('gridAutoColumns', T, theme)}
  ${({ gridAutoRows: T, theme }) => T && styleParser('gridAutoRows', T, theme)}
  ${({ gridAutoFlow: T, theme }) => T && styleParser('gridAutoFlow', T, theme)}
  // Child Props
  ${({ gridColumn: T, theme }) => T && styleParser('gridColumn', T, theme)}
  ${({ gridRow: T, theme }) => T && styleParser('gridRow', T, theme)}
  ${({ gridArea: T, theme }) => T && styleParser('gridArea', T, theme)}
`
