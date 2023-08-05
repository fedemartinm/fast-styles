import { View } from "react-native";
import { styled } from "@fast-styles/react";

export const FastStyledComponent = styled(View, {
  variants: {
    layout: {
      column: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flex: 1,
        padding: 4,
      },
      row: {
        justifyContent: "center",
        alignItems: "stretch",
        flexDirection: "row",
        padding: 4,
        flex: 1,
      },
      fixed: {
        width: 4,
        height: 4,
      },
    },
    colorScheme: {
      color0: {
        backgroundColor: "#14171A",
      },
      color1: {
        backgroundColor: "#AAB8C2",
      },
      color2: {
        backgroundColor: "#E6ECF0",
      },
      color3: {
        backgroundColor: "#FFAD1F",
      },
      color4: {
        backgroundColor: "#F45D22",
      },
      color5: {
        backgroundColor: "#E0245E",
      },
    },
  },
});
