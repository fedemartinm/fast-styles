import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { defaultTheme, styled } from "@fast-styles/react";

import DropDownPicker from "react-native-dropdown-picker";
import React from "react";

//fast-styles-runtime-next
const DropDown = styled(DropDownPicker, {
  attributes: {
    containerStyle: { width: "80%" },
  } as any,
});

const Page = styled(SafeAreaView, {
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: defaultTheme.colors.$white,
  flex: 1,
});

const Title = styled(Text, {
  color: defaultTheme.colors.$grey3,
  marginBottom: defaultTheme.spacings.$3,
  fontWeight: defaultTheme.fontWeights.$normal,
  fontSize: defaultTheme.fontSizes.$lg,
});

const ButtonRoot = styled(TouchableOpacity, {
  color: defaultTheme.colors.$blue5,
  marginVertical: defaultTheme.spacings.$3,
});

const ButtonText = styled(Text, {
  fontSize: defaultTheme.fontSizes.$lg,
  color: defaultTheme.colors.$blue5,
});

const Result = styled(Text, {
  textAlign: "center",
  width: defaultTheme.spacings.$full,
  fontSize: defaultTheme.fontSizes.$lg,
  color: defaultTheme.colors.$white,
  backgroundColor: defaultTheme.colors.$black,
});

const Row = styled(View, {
  flexDirection: "row",
  gap: defaultTheme.spacings.$5,
});

const Button = (props) => {
  return (
    <ButtonRoot onPress={props.onPress}>
      <ButtonText>{props.children}</ButtonText>
    </ButtonRoot>
  );
};

export { Result, DropDown, Page, Button, Title, Row };
