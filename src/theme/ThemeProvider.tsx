import React from 'react'

// Components
import { ThemeProvider as SCThemeProvider } from 'styled-components'

// Types
import { BaseExtensibleObject } from '../types'

// Utils
import { baseTheme } from '.'
import { merge } from '../utils'

// Props
interface Props {
  theme?: BaseExtensibleObject
}

/*








*/

const ThemeProvider: React.FC<Props> = ({ theme, children }) => {
  return <SCThemeProvider theme={merge(baseTheme, theme)}>{children}</SCThemeProvider>
}

export { ThemeProvider }
