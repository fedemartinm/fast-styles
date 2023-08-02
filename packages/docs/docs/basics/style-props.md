---
sidebar_position: 5
description: Bind component properties to style attributes
---

# Style Props

If you have a component in which you need to change a specific style every time you use it, creating a separate variant for each case may not be practical.

For this reason, it's possible to expose a specific style as a property of the component. Fast Styles defines these types of properties as `style props`, and you can specify which component property should be connected to a specific style.

:::caution

It's important to emphasize that Fast Styles optimizes the connection between properties and styles at compile-time, but it's not recommended to excessively use this functionality. As a general rule, you should only use style props if each call requires a specific value.
:::

## Adding Style Props to your component

Let's assume we have a `Stack` component that will be used to organize UI elements either vertically or horizontally. In this case, each call to your Stack component must define the orientation of the component, and this direction doesn't correspond to a set of styles but to a **single property**.

```jsx live noInline
const Stack = styled(View, {
  display: "flex",
  flexDirection: "row",
  // In this component, we will map the direction property to the flexDirection style property.
  styleProps: {
    direction: "flex-direction",
  },
});

const Box = styled(View, {
  width: 48,
  height: 48,
  // In this other component, we will map the bg property to backgroundColor
  styleProps: {
    bg: "backgroundColor",
  },
});

render(
  // Here you can see that you can directly assign these
  // styles without the need to pass an object to style.
  <Stack direction="row">
    <Box bg="red" />
    <Box bg="green" />
    <Box bg="blue" />
  </Stack>
);
```
