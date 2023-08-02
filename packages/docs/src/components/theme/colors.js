import { defaultTheme, styled } from "@fast-styles/react";

import React from "react";

const Palette = styled("div", {
  gap: defaultTheme.spacings.$1,
  flexDirection: "row",
  flexWrap: "wrap",
  display: "flex",
});

const ColorBox = styled("div", {
  borderRadius: defaultTheme.borderRadiuses.$3,
  height: defaultTheme.spacings.$6,
  width: defaultTheme.spacings.$6,
  cursor: "pointer",
  styleProps: {
    bg: "backgroundColor",
  },
});

export const ColorPalette = () => {
  const copyToClipboard = (value) => () => {
    navigator.clipboard.writeText(value);
  };
  return (
    <Palette>
      {Object.entries(defaultTheme.colors).map(([key, value], index) => (
        <ColorBox key={index} bg={value} onClick={copyToClipboard(key)} />
      ))}
    </Palette>
  );
};
