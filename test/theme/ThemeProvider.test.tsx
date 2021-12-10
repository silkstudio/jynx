import React from 'react'
import styled from 'styled-components'

// Components
import { ThemeProvider } from '../../src/theme'

// Utils
import { render, cleanup } from '@testing-library/react'
/*








*/

afterEach(cleanup)

describe('When an external theme is not provided', () => {
  // Setup
  const Component = styled.div`
    color: ${({ theme }) => theme.colors.blue};
    padding: ${({ theme }) => theme.spaces[1]}px;
    font-weight: ${({ theme }) => theme.fontWeights.light};
    border-style: ${({ theme }) => theme.borderStyles[0]};
    border-color: ${({ theme }) => theme.colors.rainbow};
  `

  render(
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  )

  const [root] = document.getElementsByClassName(Component.styledComponentId)
  const style = window.getComputedStyle(root)

  // Tests
  it('should use string props from an object-based scale in the the system theme', () => {
    expect(style).toHaveProperty('color', 'rgb(18, 165, 236)')
  })

  it('should use numeric props from an object-based scale in the the system theme', () => {
    expect(style).toHaveProperty('fontWeight', '300')
  })

  it('should use string props from an array-based scale in the the system theme', () => {
    expect(style).toHaveProperty('borderStyle', 'solid')
  })

  it('should use numeric props from an array-based scale in the system theme', () => {
    expect(style).toHaveProperty('padding', '4px')
  })

  it('should return an empty string as style if the theme property being accessed does not exists', () => {
    expect(style).toHaveProperty('borderColor', '')
  })
})

describe('When an external theme is provided', () => {
  // Setup
  const Component = styled.div`
    // External theme
    color: ${({ theme }) => theme.color.primary};
    font-weight: ${({ theme }) => theme.weight.bold};
    overflow: ${({ theme }) => theme.overflow[1]};
    padding: ${({ theme }) => theme.space[1]}px;
    font-family: ${({ theme }) => theme.fonts.main};

    // System Theme
    background-color: ${({ theme }) => theme.colors.green};
    line-height: ${({ theme }) => theme.lineHeights.spaced};
    border-style: ${({ theme }) => theme.borderStyles[0]};
    border-width: ${({ theme }) => theme.borderWidths.sm}px;
    margin: ${({ theme }) => theme.spaces[1]}px;

    // Undefined
    border-color: ${({ theme }) => theme.colors.rainbow};
  `
  const theme = {
    color: {
      primary: 'black'
    },
    space: [4, 8, 12, 16],
    weight: {
      light: 300,
      normal: 400,
      bold: 700
    },
    borderStyle: ['dashed', 'solid'],
    overflow: ['hidden', 'scroll', 'auto'],
    fonts: {
      main: 'comic sans'
    },
    borderWidths: {
      xl: 4
    }
  }

  render(
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  )

  const [root] = document.getElementsByClassName(Component.styledComponentId)
  const style = window.getComputedStyle(root)

  // Tests
  it('should use string props from an object-based scale in the the external theme', () => {
    expect(style).toHaveProperty('color', 'black')
  })

  it('should use numeric props from an object-based scale in the the external theme', () => {
    expect(style).toHaveProperty('fontWeight', '700')
  })

  it('should use string props from an array-based scale in the the external theme', () => {
    expect(style).toHaveProperty('overflow', 'scroll')
  })

  it('should use numeric props from an array-based scale in the external theme', () => {
    expect(style).toHaveProperty('padding', '8px')
  })

  it('should still use string props from an object-based scale in the the system theme for values not overriden by the external theme', () => {
    expect(style).toHaveProperty('backgroundColor', 'rgb(124, 212, 32)')
  })

  it('should still use numeric props from an object-based scale in the the system theme for values not overriden by the external theme', () => {
    expect(style).toHaveProperty('lineHeight', '2')
  })

  it('should still use string props from an array-based scale in the the system theme for values not overriden by the external theme', () => {
    expect(style).toHaveProperty('borderStyle', 'solid')
  })

  it('should still use numeric props from an array-based scale in the system theme for values not overriden by the external theme', () => {
    expect(style).toHaveProperty('margin', '4px')
  })

  it("should return an empty string as style if the theme property being accessed does not exists (regardless of whether it's in the external or system theme)", () => {
    expect(style).toHaveProperty('borderColor', '')
  })

  it('should allow external theme values to override system theme values', () => {
    expect(style).toHaveProperty('fontFamily', 'comic sans')
  })

  it('should ensure defining a property in the external theme overwrites all properties from system theme', () => {
    expect(style).not.toHaveProperty('borderWidth', '1px')
  })
})
