// Types
import type { ThemeProps } from '../../types/theme'
import type { StyledFunction } from '../../types/functions'

// Utils
import { compose } from '../compose'
import { color, ColorProps, layout, LayoutProps, space, SpaceProps } from '../../functions'
import { defaultBreakpoints } from '../../utils'

/*








*/

// Set-up
type Props = ColorProps & LayoutProps & SpaceProps
type StylesProps = Props & ThemeProps<typeof theme>
const theme = { breakpoints: defaultBreakpoints }
const styles: StylesProps = {
  theme,
  color: ['red', 'green', 'orange'],
  width: {
    _: '300px',
    sm: '500px',
    lg: '700px'
  },
  m: [2, 4, null, 8]
}

describe('When passed multiple styledFunctions', () => {
  const composed = compose<Props>(color, layout, space)

  it('should return a single styledFunction', () => {
    expect(typeof composed).toBe('function')
  })

  it('should be able to use the returned function to parse styles for all of constituent styledFunctions', () => {
    expect(composed(styles)).toEqual({
      color: 'red',
      width: '300px',
      margin: '2px',
      '@media screen and (min-width: 640px)': {
        color: 'green',
        width: '500px',
        margin: '4px'
      },
      '@media screen and (min-width: 960px)': {
        color: 'orange'
      },
      '@media screen and (min-width: 1280px)': {
        width: '700px',
        margin: '8px'
      }
    })
  })
})

describe('When passed null', () => {
  // prettier-ignore
  const maybeNull = (null as unknown) as StyledFunction<any>
  // prettier-ignore
  const maybeObj = ({} as unknown) as StyledFunction<any>
  const composed = compose(maybeNull, maybeObj)

  it('should return a single styledFunction', () => {
    expect(typeof composed).toBe('function')
  })

  it('should be able to handle `null` styledFunctions', () => {
    expect(composed(styles)).toEqual({})
  })
})
