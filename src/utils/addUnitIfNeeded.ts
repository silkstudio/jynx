import { unitless } from './unitless'

// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
const addUnitIfNeeded = (property: string, value: any): string => {
  if (value == null || typeof value === 'boolean' || value === '') {
    return ''
  }

  if (typeof value === 'number' && value !== 0 && !(property in unitless)) {
    return `${value}px` // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim()
}

export { addUnitIfNeeded }