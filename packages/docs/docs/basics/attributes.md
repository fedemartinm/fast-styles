---
sidebar_position: 6
description: Directly pass attributes to components
---

# Attributes

Sometimes we apply styles to components that do not use the `styles` property. A basic example is when using icons, where the icon color may depend on the color property, the size on size property, etc. To specify these attributes using styled, you should use the attributes property.

```jsx live noInline
const StyledCoffee = styled(Coffee, {
  // These attributes will be passed directly to the component
  attributes: {
    color: "#ffc72c",
    size: 36,
  },
});

render(<StyledCoffee />);
```

With this, we have learned the basic concepts of fast-styles. In the next section, we will continue with more advanced concepts, such as themes and responsive styles.
