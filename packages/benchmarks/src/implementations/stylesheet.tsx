import React from "react";
import { View } from "react-native";

export const StyleSheetComponent = (props) => {
  const { colorScheme, layout } = props;
  return (
    <View
      {...props}
      style={[
        styles.colorScheme[colorScheme],
        layout === "fixed" && styles.fixed,
        layout === "row" && styles.row,
        layout === "column" && styles.column,
      ]}
    />
  );
};

const styles = {
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
};
const stylemap = {
  "color0+column": {
    backgroundColor: "#14171A",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    padding: 4,
  },
  "color0+fixed": { backgroundColor: "#14171A", width: 4, height: 4 },
  "color0+row": {
    backgroundColor: "#14171A",
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "row",
    padding: 4,
    flex: 1,
  },
  "color1+column": {
    backgroundColor: "#AAB8C2",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    padding: 4,
  },
  "color1+fixed": { backgroundColor: "#AAB8C2", width: 4, height: 4 },
  "color1+row": {
    backgroundColor: "#AAB8C2",
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "row",
    padding: 4,
    flex: 1,
  },
  "color2+column": {
    backgroundColor: "#E6ECF0",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    padding: 4,
  },
  "color2+fixed": { backgroundColor: "#E6ECF0", width: 4, height: 4 },
  "color2+row": {
    backgroundColor: "#E6ECF0",
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "row",
    padding: 4,
    flex: 1,
  },
  "color3+column": {
    backgroundColor: "#FFAD1F",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    padding: 4,
  },
  "color3+fixed": { backgroundColor: "#FFAD1F", width: 4, height: 4 },
  "color3+row": {
    backgroundColor: "#FFAD1F",
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "row",
    padding: 4,
    flex: 1,
  },
  "color4+column": {
    backgroundColor: "#F45D22",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    padding: 4,
  },
  "color4+fixed": { backgroundColor: "#F45D22", width: 4, height: 4 },
  "color4+row": {
    backgroundColor: "#F45D22",
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "row",
    padding: 4,
    flex: 1,
  },
  "color5+column": {
    backgroundColor: "#E0245E",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    padding: 4,
  },
  "color5+fixed": { backgroundColor: "#E0245E", width: 4, height: 4 },
  "color5+row": {
    backgroundColor: "#E0245E",
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "row",
    padding: 4,
    flex: 1,
  },
};
