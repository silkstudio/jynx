// Types
import type { StylePropWithScale } from '../types/css'
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
  boxShadow?: StylePropWithScale<'boxShadow', 'shadows'>
  textShadow?: StylePropWithScale<'textShadow', 'shadows'>
}

const shadow = createStyleFunction<ShadowProps>(config)

export { shadow, config as shadowConfig, ShadowProps }
