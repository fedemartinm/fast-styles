---
sidebar_position: 3
title: API Reference
---

# API Reference

## Function: styled

#### Description

The `styled` function is used to create a fast styled component. It allows you to apply styles, variants, and properties to a given component and returns the enhanced styled component.

#### Parameters

- `Component` The component to be styled.

- `styledObject` An object containing styles, variants, and properties to apply to the component.

#### Return Value

A fast styled component that incorporates the specified styles, variants, and properties.

#### Usage

The `styled` function takes two arguments, the `Component` and the `styledObject`. The `styledObject` should be an object that contains the following properties:

- `variants` _(optional)_ An object that contains different variants as keys. Each variant, in turn, has options as keys. Each option is an object of styles.

- `compoundVariants` _(optional)_ An object where the key is the composition of two variants, and the content of each key is the styles to apply.

- `attributes` _(optional)_ An object containing attributes to be applied to the component.

- `styleProps` _(optional)_ An object containing style properties to be mapped to the component.

- `defaultVariants` _(optional)_ An object specifying the default variants for the component.

#### Internal Implementation

The `styled` function internally uses the provided `styledObject` to generate a style map and resolves keys and styles for the given component based on the provided props.

---

## Function: createTheme

#### Description

Creates a new theme object based on the provided theme and freezes it.

#### Parameters

- `theme` The theme object to create a new theme from.

#### Return Value

A new theme object that is based on the provided theme, with all properties frozen.

---

## Function: mergeTheme

#### Description

Merges two theme objects and returns the resulting merged theme object, which is then frozen.

#### Parameters

- `themeA` The first theme object to be merged.

- `themeB` The second theme object to be merged.

#### Return Value

A merged theme object that combines the properties from both `themeA` and `themeB`, with all properties frozen.

---

## Function: extendDefaultTheme

#### Description

Extends the default theme object with the provided theme object and returns the resulting merged theme object, which is then frozen.

#### Parameters

- `theme` The theme object to extend the default theme with.

#### Return Value

An extended theme object that includes properties from both the default `theme` and the provided theme, with all properties frozen.

---

## Custom Hook: useMode

#### Description

A custom hook to access the current mode and its setter function from the context.

#### Return Value

An array containing the current mode and its setter function.

---

## Provider Component: ModeProvider

#### Description

A provider component to wrap the components that need access to the mode context.

#### Props

- `children` (ReactNode): The children components that need access to the mode context.

#### Return Value

The wrapped component tree with access to the mode context.
