// Types
import { Properties as CSS } from 'csstype'
import { DefaultTheme, CSSProperty } from '../types'

// Utils
import get from 'lodash.get'
import { addUnitIfNeeded } from './addUnitIfNeeded'

/**
 *
 * @param {keyof CSSProperties} property
 * @param {CSSProperty} style
 * @param {DefaultTheme[keyof DefaultTheme]} scale
 * @returns {CSSProperty}
 */

/*








*/

const themeGet = (property: keyof CSS, style?: CSSProperty, scale?: DefaultTheme[keyof DefaultTheme]): CSSProperty | undefined => {
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
