import React from 'react'

// Libraries
import styled from 'styled-components'
import emotion from '@emotion/styled'

// Utils
import { flexbox, FlexboxProps } from '../functions'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

// Components
const StyledComponentsInterpolation = styled('div')<FlexboxProps>`
  ${flexbox}
`

const StyledComponentsObject = styled('div')<FlexboxProps>(flexbox)

const EmotionInterpolation = emotion('div')<FlexboxProps>`
  ${flexbox}
`

const EmotionObject = emotion('div')<FlexboxProps>(flexbox)

// Children

const children = {
  styledComponentsInterpolation: 'styledComponentsInterpolation',
  styledComponentsObject: 'styledComponentsObject',
  emotionInterpolation: 'emotionInterpolation',
  emotionObject: 'emotionObject'
}

/*




*/

export const TestComponents: React.FC = () => {
  const props: FlexboxProps = {
    flex: 'content',
    alignItems: ['baseline', 'center'],
    justifyContent: { _: 'flex-end', sm: 'end' }
  }

  return (
    <>
      <StyledComponentsInterpolation {...props} style={{ color: 'green' }}>
        <>{children.styledComponentsInterpolation}</>
      </StyledComponentsInterpolation>

      <StyledComponentsObject {...props}>
        <>{children.styledComponentsObject}</>
      </StyledComponentsObject>

      <EmotionInterpolation {...props}>
        <>{children.emotionInterpolation}</>
      </EmotionInterpolation>

      <EmotionObject {...props}>
        <>{children.emotionObject}</>
      </EmotionObject>
    </>
  )
}

describe('Mounting tests', () => {
  const component = render(<TestComponents />)

  it('mounts styled-components interpolation', () => {
    expect(component.findByText(children.styledComponentsInterpolation)).toBeDefined()
  })

  it('mounts styled-components object', () => {
    expect(component.findByText(children.styledComponentsObject)).toBeDefined()
  })

  it('mounts emotion interpolation', () => {
    expect(component.findByText(children.emotionInterpolation)).toBeDefined()
  })

  it('mounts emotion object', () => {
    expect(component.findByText(children.emotionObject)).toBeDefined()
  })
})
