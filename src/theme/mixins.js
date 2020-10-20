const flex = (display, direction, align, justify) => `
  display: ${display};
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};`;

export const mixins = {
  flex,
};
