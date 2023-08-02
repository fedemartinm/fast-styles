import {
  ModeProvider,
  createTheme,
  defaultTheme,
  extendDefaultTheme,
  styled,
  useMode,
} from "@fast-styles/react";

import { Coffee } from "react-feather";
import React from "react";
import { TouchableOpacity } from "./TouchableOpacity";

// Add react-live imports you need here

const View = "div";
const Text = "div";

const PreviouslyDefinedButtonRoot = styled(TouchableOpacity, {
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

const ReactLiveScope = {
  React,
  View,
  Text,
  Coffee,
  defaultTheme,
  ModeProvider,
  useMode,
  createTheme,
  extendDefaultTheme,
  PreviouslyDefinedButtonRoot,
  TouchableOpacity,
  styled,
  ...React,
};
export default ReactLiveScope;
