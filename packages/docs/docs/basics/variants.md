---
sidebar_position: 4
description: Custom styles for every case
---

# Variants

Fast Styles supports **variants**, which allows you to define different styles for a component based on specific variations or conditions.

Variants are a fundamental part of this library, and they are designed to offer **maximum performance**, surpassing other libraries or even react-native vanilla.

## Adding Variants to your component

Let's assume that we want to enhance the button we created earlier and add the `colorScheme` variant. This variant allows the user to choose a predefined color scheme for the button. In this case, we will add the options `primary`, `positive`, and `negative`.

```jsx live noInline
const ButtonRoot = styled(TouchableOpacity, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: 200,
  padding: 12,
  // You need to define the variants attribute.
  // Each key you add will represent a variant
  variants: {
    colorScheme: {
      // Each attribute in the variant will be a possible option to choose from.
      // Here we will define the styles for "primary"
      primary: {
        backgroundColor: "#087ea4",
      },
      positive: {
        backgroundColor: "#527717",
      },
      negative: {
        backgroundColor: "#ff393f",
      },
    },
  },
});

const ButtonText = styled(Text, {
  color: "#fbfbfb",
  fontWeight: 700,
});

render(
  // Then you can assign the variant directly as a property.
  // Try choosing another value, such as "primary" or "negative"!
  <ButtonRoot colorScheme="negative">
    <ButtonText>Button</ButtonText>
  </ButtonRoot>
);
```

:::tip
All the examples in this guide use a live editor. You can try the examples in real-time and see how the code behaves. Feel free to make changes and experiment with different styles.
:::

## Default variants

If you don't define any **default variants**, Fast Styles will take the first option you have defined for each variant as the default. However, if you wish, you can set default variants using the `defaultVariants` attribute:

```jsx
const ButtonRoot = styled(TouchableOpacity, {
  //...
  defaultVariants: {
    colorScheme: "primary",
  },
});
```

## Compound Variants

Fast Styles goes beyond supporting basic variants and also includes **compound variants**. Compound variants are a powerful feature that allows you to define styles based on combinations of multiple variations.

For example, you can create styles for a button that is both `outlined` and `primary`, or `solid` and `primary`. This provides you with finer control over the styles applied to your components, making them highly versatile and customizable.

```jsx live noInline
const ButtonRoot = styled(TouchableOpacity, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: 200,
  padding: 12,
  variants: {
    // We have added the "type" variant that allows you to define whether
    // the button will be solid or outline.
    type: {
      solid: {},
      outline: {
        borderWidth: 1,
      },
    },
    // Now, the style applied by the color scheme depends on the button type,
    // so we will define it in compound variants.
    colorScheme: {
      primary: {},
      positive: {},
      negative: {},
    },
  },
  //To define styles for a combination of variants, you just need to create a rule
  //by concatenating the involved variants with a '+'.
  compoundVariants: {
    "outline+primary": {
      borderColor: "#087ea4",
    },
    "outline+positive": {
      borderColor: "#527717",
    },
    "outline+negative": {
      borderColor: "#ff393f",
    },
    "solid+primary": {
      backgroundColor: "#087ea4",
    },
    "solid+positive": {
      backgroundColor: "#527717",
    },
    "solid+negative": {
      backgroundColor: "#ff393f",
    },
  },
});

const ButtonText = styled(Text, {
  color: "#fbfbfb",
  fontWeight: 700,
});

render(
  <ButtonRoot type="outline" colorScheme="negative">
    <ButtonText>Button</ButtonText>
  </ButtonRoot>
);
```

## Variants and Nested Components

In the previous section, we mentioned that Fast Styles avoids using **underscore props** to pass props to child components. This is because it's easy to ensure that child components respond to the same variant.

This approach makes each component responsible for its own changes, simplifying component creation and keeping the code clean.

```jsx live noInline
// the button root defined in the previous example
const ButtonRoot = PreviouslyDefinedButtonRoot;

// The text component will respond to the colorScheme variant
const ButtonText = styled(Text, {
  color: "#fbfbfb",
  fontWeight: 700,
  variants: {
    type: {
      solid: {
        color: "white",
      },
      outline: {},
    },
    colorScheme: {
      primary: {
        color: "#087ea4",
      },
      positive: {
        color: "#527717",
      },
      negative: {
        color: "#ff393f",
      },
    },
  },
});

// Let's create a button component composed of the TouchableOpacity and Text components
const Button = (props) => (
  <ButtonRoot type={props.type} colorScheme={props.colorScheme}>
    <ButtonText type={props.type} colorScheme={props.colorScheme}>
      {props.children}
    </ButtonText>
  </ButtonRoot>
);

// If you try changing a variant, it will modify both the container and the text together
render(
  <Button type="outline" colorScheme="negative">
    Button
  </Button>
);
```

## To Conclude

At this point, we have already seen how to create and use basic **variants** and **compound variants**.

In the examples, we created a button and demonstrated the functionality by changing colors.
However, you might wonder if all this is necessary just to define a color. <u>The answer is no.</u> If your component has a few properties that will change with each use, fast styles provides a way to map these properties to styles called `styleProps`, and we will explore that in the next section.
