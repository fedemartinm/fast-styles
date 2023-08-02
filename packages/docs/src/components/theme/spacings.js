import { defaultTheme, styled } from "@fast-styles/react";

import React from "react";

export const pixelValues = [
  //
  "$1px",
  "$2px",
  "$3px",
  "$5px",
  "$10px",
];
export const unitValues = [
  //
  "$0",
  "$1",
  "$2",
  "$3",
  "$4",
  "$5",
  "$6",
  "$7",
  "$8",
  "$9",
  "$10",
  "$11",
  "$12",
  "$20",
  "$30",
];
export const percentValues = [
  "$oneFifth",
  "$oneFourth",
  "$oneThird",
  "$twoFifths",
  "$oneHalf",
  "$threeFifths",
  "$twoThirds",
  "$threeFourths",
  "$fourFifths",
  "$full",
];

const Container = styled("div", {
  overflowX: "scroll",
  flexDirection: "row",
  display: "flex",
  width: defaultTheme.spacings.$full,
  gap: defaultTheme.spacings.$10px,
});

const BoxContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Label = styled("p", {
  marginBottom: defaultTheme.spacings.$1,
  variants: {
    variant: {
      title: {
        fontWeight: defaultTheme.fontWeights.$bold,
        fontSize: defaultTheme.fontSizes.$sm,
      },
      value: {
        fontSize: defaultTheme.fontSizes.$xs,
      },
    },
  },
});

const Box = styled("div", {
  display: "flex",
  justifyContent: "center",
  backgroundColor: defaultTheme.colors.$blue3,
  height: defaultTheme.spacings.$4,
  styleProps: {
    w: "width",
    h: "height",
  },
});

const format = (value) => {
  if (typeof value === "string") {
    return value;
  }
  return `${value}px`;
};

// We don't display all spacings at once.
// Instead, we receive a prop type that defines whether to show
// pixel values, spacing units, or percentages
export const Spacings = (props) => {
  const keys =
    props.type === "unitValues"
      ? unitValues
      : props.type === "pixelValues"
      ? pixelValues
      : percentValues;

  return (
    <Container>
      {keys.map((key, index) => {
        const value = defaultTheme.spacings[key];
        return (
          <BoxContainer key={index}>
            <Label variant="title">{key}</Label>
            <Label variant="value">{format(value)}</Label>
            {/* For percentage values, we don't display any box */}
            {String(value).includes("%") ? null : (
              <Box key={index} w={value} h={value} />
            )}
          </BoxContainer>
        );
      })}
    </Container>
  );
};
