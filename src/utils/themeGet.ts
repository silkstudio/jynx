import { CSSProperties as CSS } from 'styled-components'

// Types
import { DefaultTheme, CssProperty } from '../types'

// Utils
import get from 'lodash.get'
import { addUnitIfNeeded } from './addUnitIfNeeded'

/**
 *
 * @param {keyof CSSProperties} property
 * @param {CssProperty} style
 * @param {DefaultTheme[keyof DefaultTheme]} scale
 * @returns {CssProperty}
 */

/*








*/

const themeGet = (property: keyof CSS, style?: CssProperty, scale?: DefaultTheme[keyof DefaultTheme]): CssProperty | undefined => {
  if (!style || !scale) return style

  if (Array.isArray(scale)) {
    if (typeof style === 'number') {
      return addUnitIfNeeded(property, style < scale.length ? scale[style] : style)
    }
    return style
  }

  return get(scale, style, style) || style
}

export { themeGet }
