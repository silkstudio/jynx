// Types

// Utils
import { defaultBreakpoints } from '../../theme'
import { parseBreakpoints } from '../parseBreakpoints'

const breakpointsObj = {
  mobile: 360,
  tablet: 540,
  laptop: 720,
  desktop: 1280
}

const breakpointArr = [360, 540, 720, 1280]

/*









*/

describe('When an object is passed', () => {
  it('should return the originally passed object', () => {
    expect(parseBreakpoints(breakpointsObj)).toMatchObject(breakpointsObj)
  })
})

describe('When an array is passed', () => {
  it('should map the array to an object and return the result', () => {
    expect(parseBreakpoints(breakpointArr)).toMatchObject({ '0': 360, '1': 540, '2': 720, '3': 1280 })
  })
})

describe('When neither an object or array is passed', () => {
  it('should the defaultBreakpoints object if `nothing` is passed to it', () => {
    expect(parseBreakpoints()).toMatchObject(defaultBreakpoints)
  })

  it('should the defaultBreakpoints object if `true` is passed to it', () => {
    // prettier-ignore
    const maybeTrue = (true as unknown) as any[]
    expect(parseBreakpoints(maybeTrue)).toMatchObject(defaultBreakpoints)
  })

  it('should the defaultBreakpoints object if `false` is passed to it', () => {
    // prettier-ignore
    const maybeFalse = (false as unknown) as any[]
    expect(parseBreakpoints(maybeFalse)).toMatchObject(defaultBreakpoints)
  })

  it('should the defaultBreakpoints object if `null` is passed to it', () => {
    // prettier-ignore
    const maybeNull = (null as unknown) as any[]
    expect(parseBreakpoints(maybeNull)).toMatchObject(defaultBreakpoints)
  })

  it('should the defaultBreakpoints object if `undefined` is passed to it', () => {
    // prettier-ignore
    const maybeUndefined = (undefined as unknown) as any[]
    expect(parseBreakpoints(maybeUndefined)).toMatchObject(defaultBreakpoints)
  })
})
