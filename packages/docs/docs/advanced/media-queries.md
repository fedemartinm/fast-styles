---
sidebar_position: 3
description: Responsive design with media queries
---

# Responsiveness

Since Fast Styles follows a **variant-oriented** concept and aims to provide optimal performance, we deliberately avoid adding any extra logic to each styled component by design. However, using responsive designs is essential, so we offer an example of how to achieve this using this library.

1. First, you need to create a hook that listens for screen dimension changes.

```jsx title="use-screen-dimensions.js"
// Here's a basic example that you can adapt to your needs.
const useScreenDimensions = () => {
  const [screenData, setScreenData] = useState(Dimensions.get("screen"));

  useEffect(() => {
    const onChange = (result) => {
      setScreenData(result.screen);
    };

    Dimensions.addEventListener("change", onChange);

    return () => Dimensions.removeEventListener("change", onChange);
  });

  return {
    ...screenData,
    isLandscape: screenData.width > screenData.height,
  };
};
```

2. Just like how we applied light/dark mode conditionally, we can also apply other variants based on screen width:

```jsx title="responsive-component.js"
const Layout = styled(TouchableOpacity, {
  display: "flex",
  gap: 10,
  variants: {
    orientation: {
      vertical: {
        padding: 4,
        flexDirection: "column",
      },
      horizontal: {
        padding: 8,
        flexDirection: "row",
      },
    },
  },
});

const App = () => {
  const { width } = useScreenDimensions();
  const orientation = width < 480 ? "vertical" : "horizontal";

  return <Layout orientation={orientation} />;
};
```

:::note
In the near future, we could consider adding this functionality as part of the library, providing tools to simplify its usage. This would allow developers to easily implement responsive designs in their applications without the need for additional complex configurations.
:::
