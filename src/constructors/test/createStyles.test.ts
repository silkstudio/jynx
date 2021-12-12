// Utils
import { createStyles } from '../createStyles'
import { systemTheme as theme } from '../../theme'
import { ColorProps, config } from '../../functions/color'

/*








*/

describe('When passed a single-item style object', () => {
  it('should return a style object, defining the correct css rule', () => {
    expect(createStyles<ColorProps>({ color: { _: 'red' } }, theme, config)).toEqual({ color: '#F2335D' })
  })
})

describe('When passed a single-item style array', () => {
  it('should return a style object, defining the correct css rule', () => {
    expect(createStyles<ColorProps>({ color: ['red'] }, theme, config)).toEqual({ color: '#F2335D' })
  })
})

describe('When passed a multi-item style object', () => {
  it('should return a style object, defining the correct css rules at the correct breakpoints', () => {
    expect(createStyles<ColorProps>({ color: { _: 'red', sm: 'blue', md: 'green' } }, theme, config)).toEqual({
      color: '#F2335D',
      '@media screen and (min-width: 640px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 960px)': {
        color: '#7CD420'
      }
    })
  })
})

describe('When passed a multi-item style array', () => {
  it('should return a style object, defining the correct css rules at the correct breakpoints', () => {
    expect(createStyles<ColorProps>({ color: ['red', 'blue', 'green'] }, theme, config)).toEqual({
      color: '#F2335D',
      '@media screen and (min-width: 640px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 960px)': {
        color: '#7CD420'
      }
    })
  })
})

describe('When passed a multi-item style object, skipping select breakpoints', () => {
  it('should return a style object, defining the correct css rules at the correct breakpoints', () => {
    expect(createStyles<ColorProps>({ color: { _: 'red', sm: 'blue', lg: 'green' } }, theme, config)).toEqual({
      color: '#F2335D',
      '@media screen and (min-width: 640px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 1280px)': {
        color: '#7CD420'
      }
    })
  })
})

describe('When passed a multi-item style array, skipping select breakpoints', () => {
  it('should return a style object, defining the correct css rules at the correct breakpoints', () => {
    expect(createStyles<ColorProps>({ color: ['red', 'blue', null, 'green'] }, theme, config)).toEqual({
      color: '#F2335D',
      '@media screen and (min-width: 640px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 1280px)': {
        color: '#7CD420'
      }
    })
  })
})

describe('When passed an unsorted multi-item style object, skipping select breakpoints', () => {
  it('should return a SORTED style object, defining the correct css rules at the correct breakpoints', () => {
    expect(createStyles<ColorProps>({ color: { sm: 'blue', _: 'red', lg: 'green' } }, theme, config)).toEqual({
      color: '#F2335D',
      '@media screen and (min-width: 640px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 1280px)': {
        color: '#7CD420'
      }
    })
  })
})

describe('When passed a multi-item style object, using non-theme values', () => {
  it('should return a sorted style object, using the originally passed values if they do not exist within the theme', () => {
    expect(createStyles<ColorProps>({ color: { _: 'aquamarine', sm: 'blue', lg: 'green' } }, theme, config)).toEqual({
      color: 'aquamarine',
      '@media screen and (min-width: 640px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 1280px)': {
        color: '#7CD420'
      }
    })
  })
})

describe('When passed a multi-item style array, using non-theme values', () => {
  it('should return a sorted style object, using the originally passed values if they do not exist within the theme', () => {
    expect(createStyles<ColorProps>({ color: ['aquamarine', 'blue', null, 'green'] }, theme, config)).toEqual({
      color: 'aquamarine',
      '@media screen and (min-width: 640px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 1280px)': {
        color: '#7CD420'
      }
    })
  })
})

describe('When using user-defined breakpoints in a custom theme', () => {
  const customTheme = {
    ...theme,
    breakpoints: {
      small: 540,
      medium: 720,
      large: 1080
    }
  }

  /**
   * The following two tests have the createStyles function hidden under
   * ts-ignore. This is due to the fact that in order to use a custom theme
   * with typescript, the user needs to extend the default theme and merge
   * in there own properties in a declaration (.d.ts) file.
   */

  it('should return a sorted style object, using the newly defined theme breakpoints, when passed styles as a responsive object', () => {
    // @ts-ignore
    expect(createStyles<ColorProps>({ color: { _: 'aquamarine', small: 'blue', large: 'green' } }, customTheme, config)).toEqual({
      color: 'aquamarine',
      '@media screen and (min-width: 540px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 1080px)': {
        color: '#7CD420'
      }
    })
  })

  it('should return a sorted style object, using the newly defined theme breakpoints, when passed styles as a responsive array', () => {
    // @ts-ignore
    expect(createStyles<ColorProps>({ color: ['aquamarine', 'blue', null, 'green'] }, customTheme, config)).toEqual({
      color: 'aquamarine',
      '@media screen and (min-width: 540px)': {
        color: '#12A5EC'
      },
      '@media screen and (min-width: 1080px)': {
        color: '#7CD420'
      }
    })
  })
})
