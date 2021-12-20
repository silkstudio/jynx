// Types
import type { Property } from 'csstype'
import type { StyleProp } from '../types/css'
import type { ThemeValue } from '../types/theme'
import type { StyleFunctionConfig } from '../types/functions'

// Utils
import { createStyleFunction } from '../constructors'

/*








*/

const config: StyleFunctionConfig = {
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows'
  }
}

interface ShadowProps {
  boxShadow?: StyleProp<Property.BoxShadow | ThemeValue<'shadows'>>
  textShadow?: StyleProp<Property.TextShadow | ThemeValue<'shadows'>>
}

const shadow = createStyleFunction<ShadowProps>(config)

export { shadow, config as shadowConfig, ShadowProps }
