---
sidebar_position: 3
description: Fast Styles introduction
---

# Getting Started

Fast Styles uses the HOC `styled` to apply styles to your components. By using this function, you'll get a new component with the styles incorporated.

This function simplifies the creation and assignment of styles because it:

- Eliminates the need to assign the `style` attribute.
- Avoids the use of conditionals to construct your variants
- Automatically maps specific style properties.

Throughout this guide, we will learn how to use styled to achieve these goals.

## Styling your first component

In the following example, we will see how we can create an alert using fast-styles:

```jsx live noInline
// The styled function should be called outside of other components.
// In this case, it creates an Alert component by using a <View/> element
// If you are targeting React or React Native Web, it will also work with native elements.
const Alert = styled(View, {
  color: "#fbfbfb",
  backgroundColor: "#087ea4",
  padding: 16,
  borderRadius: 8,
});

render(<Alert> This is an alert.</Alert>);
```

## Applying styles to nested components

Fast Styles does not use underscore props to pass props to child components. Conceptually, each call to styled should be responsible for applying styles to a single component.

```jsx live noInline
const ButtonRoot = styled(TouchableOpacity, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#087ea4",
  width: 200,
  padding: 12,
});

const ButtonText = styled(Text, {
  color: "#fbfbfb",
  fontWeight: 700,
});

render(
  <ButtonRoot>
    <ButtonText>Button</ButtonText>
  </ButtonRoot>
);
```

:::note
If you think that not using underscore props means losing a feature, just wait and see how fast-styles handles variants. You will be surprised and realize that underscore props are not needed at all.
:::
