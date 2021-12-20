// Types
import type { CSSProperties } from '../types/css'
import type { ResponsiveStyle } from '../types/responsive'
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
  boxShadow?: CSSProperties['boxShadow'] | ResponsiveStyle<CSSProperties['boxShadow']>
  textShadow?: CSSProperties['textShadow'] | ResponsiveStyle<CSSProperties['textShadow']>
}

const shadow = createStyleFunction<ShadowProps>(config)

export { shadow, config as shadowConfig, ShadowProps }
