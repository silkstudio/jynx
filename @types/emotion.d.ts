// eslint-disable-next-line
import '@emotion/react'
import type { DefaultTheme } from '../src/types/theme'

declare module '@emotion/react' {
  export interface Theme extends DefaultTheme {} // eslint-disable-line
}
