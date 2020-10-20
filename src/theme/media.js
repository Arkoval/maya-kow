export const breakpoints = {
  xxl: 1700,
  xl: 1440,
  lg: 1150,
  md: 1020,
  sm: 767,
  xs: 374,
};
export const media = Object.keys(breakpoints).reduce((acc, breakpoint) => {
  acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
  return acc;
}, {});
