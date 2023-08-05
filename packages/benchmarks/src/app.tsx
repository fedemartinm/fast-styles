import { Button, DropDown, Page, Row, Title } from "./styles";

import { FastStyledComponent } from "./implementations/fast-styles";
import { Gluestack } from "./implementations/gluestack";
import React from "react";
import RenderTime from "./render-time";
import { StyleSheetComponent } from "./implementations/stylesheet";
import { StyledComponent } from "./implementations/styled-components";
import { StyledProvider } from "@gluestack-style/react";
import { Tamagui } from "./implementations/tamagui";
import { TamaguiProvider } from "tamagui";
import { appConfig } from "../tamagui.config";
import { createTree } from "./tree";
import { gluestackConfig } from "../gluestack-style.config";

const tests = {
  fastStyles: {
    Component: createTree(FastStyledComponent),
    Provider: (props) => props.children,
  },
  styledComponents: {
    Component: createTree(StyledComponent),
    Provider: (props) => props.children,
  },
  styleSheet: {
    Component: createTree(StyleSheetComponent),
    Provider: (props) => props.children,
  },
  tamagui: {
    Component: createTree(Tamagui),
    Provider: (props) => (
      <TamaguiProvider config={appConfig}>{props.children}</TamaguiProvider>
    ),
  },
  gluestack: {
    Component: createTree(Gluestack as any),
    Provider: (props) => (
      <StyledProvider config={gluestackConfig}>{props.children}</StyledProvider>
    ),
  },
};

export const App = () => {
  const [render, setRender] = React.useState(0);
  const [mount, setMount] = React.useState(0);

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("fastStyles");

  const { Provider, Component } = tests[value];

  return (
    <Provider>
      <Page>
        <Title type="heading">Benchmark</Title>
        <DropDown
          open={open}
          value={value}
          items={items}
          setValue={setValue}
          setOpen={setOpen}
        />
        <Row>
          <Button onPress={() => setRender(render + 1)}>{`Re-Render`}</Button>
          <Button onPress={() => setMount(mount + 1)}>{`Re-Mount`}</Button>
        </Row>
        <RenderTime
          key={`${value}${mount}`}
          counter={render}
          Component={Component}
        />
      </Page>
    </Provider>
  );
};

const items = [
  { label: "Fast Styles", value: "fastStyles" },
  { label: "StyleSheet", value: "styleSheet" },
  { label: "Styled Components", value: "styledComponents" },
  { label: "Tamagui", value: "tamagui" },
  { label: "Gluestack", value: "gluestack" },
];
