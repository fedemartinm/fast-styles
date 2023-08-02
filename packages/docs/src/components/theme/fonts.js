import { defaultTheme, styled } from "@fast-styles/react";

import React from "react";

export const TextRoot = styled("p", {
  fontFamily: defaultTheme.fonts.$body,
  fontWeight: defaultTheme.fontWeights.$normal,
  marginBottom: defaultTheme.spacings.$0,
  styleProps: {
    size: "fontSize",
  },
});

export const Text = (props) => {
  const size = defaultTheme.fontSizes[props.size];
  return (
    <TextRoot size={size}>
      {`${props.size} is equivalent to ${size}px`}
    </TextRoot>
  );
};
