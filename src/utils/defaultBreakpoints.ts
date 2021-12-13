const defaultBreakpoints = {
  sm: 640,
  md: 960,
  lg: 1280,
  xl: 1366,
  xxl: 1600
} as const

type DefaultBreakpoints = typeof defaultBreakpoints

type DefaultBreakpoint = keyof DefaultBreakpoints

export { defaultBreakpoints, DefaultBreakpoints, DefaultBreakpoint }
