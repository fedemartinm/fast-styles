---
sidebar_position: 4
description: Discover our guiding principles
---

# Philosophy

This package aims to solve the performance issues related to style calculations by minimizing the amount of work required at runtime.

To achieve this, unlike other libraries, we have defined the following rules:

- The only place where calculations are performed is when applying the `styled` HOC, so that the component returned by that function only needs to access the styles using bracket notation. This helps keep the render time under control.
- All the operations performed in the `syled` HOC should be possible to do at compile-time using the Babel plugin.
- The library can provide utilities for working with dynamic styles (e.g., percentages or breakpoints) but in an isolated manner. This ensures that **no extra lines of code are added to components** that don't require them. Many libraries fail in this aspect.

A visual way to understand these rules is as follows: The outcome of applying `styled()` to a component should always look something like this:

```jsx
const StyledComponent = (props) => {
  // injected by fast-styles
  const __injectedStyles = {...}
  const key = __injectedKeyExtractor(props)

  let styles;
  if (props.style) {
    styles = {...__injectedStyles[key], ...props.style};
  } else {
    styles = __injectedStyles[key];
  }

  return <Component {...props} style={styles}/>
};
```
