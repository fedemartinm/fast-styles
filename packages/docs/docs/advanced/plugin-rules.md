---
sidebar_position: 3
description: Babel plugin rules
---

# Plugin Rules

The `fast-styles-runtime-next` rule allows skipping the generation of the style map during transpilation.

```jsx
//fast-styles-runtime-next
const StyledView = styled(View, {
  ...
});
```

:::caution
Whenever possible, avoid using the "fast-styles-runtime-next" rule. It is included primarily for development purposes and situations where the plugin may encounter conflicts. In general, it is recommended to rely on the default behavior of Fast Styles without the need to skip style map generation during transpilation.
:::
