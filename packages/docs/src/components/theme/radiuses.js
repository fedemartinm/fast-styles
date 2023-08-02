import { defaultTheme, styled } from "@fast-styles/react";

import React from "react";

const borderRadiuses = [
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
  "$15",
  "$20",
  "$50",
];
const Container = styled("div", {
  gap: defaultTheme.spacings.$1,
  flexDirection: "row",
  flexWrap: "wrap",
  display: "flex",
});

const RoundedBox = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: defaultTheme.colors.$blue3,
  height: 100,
  width: 100,
  styleProps: {
    r: "borderRadius",
  },
});

export const BorderRadiuses = () => {
  return (
    <Container>
      {borderRadiuses.map((key, index) => (
        <RoundedBox key={index} r={defaultTheme.borderRadiuses[key]}>
          {key}
        </RoundedBox>
      ))}
    </Container>
  );
};
