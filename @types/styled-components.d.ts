// eslint-disable-next-line
import 'styled-components'
import type { DefaultTheme as LocalDefaultTheme } from '../src/types/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends LocalDefaultTheme {} // eslint-disable-line
}
