import CodeBlock from "@theme/CodeBlock";
import Iphone from "../iphone";
import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function Usage() {
  return (
    <div className={styles.usage}>
      <h2 className={styles.usage__title}>Usage</h2>
      <p className={styles.usage__subtitle}>
        See how you can use fast-styles to add variants to your components
      </p>
      <CodeBlock className={styles.codeBlock} language="jsx">
        {DefineCode}
      </CodeBlock>
      <Link
        className="button button--secondary button--lg margin-bottom--lg margin-top--lg"
        to="/docs/intro"
      >
        Get Started
      </Link>
    </div>
  );
}

const DefineCode = `import { TouchableOpacity, Text } from "react-native";
import { styled } from "@fast-styles/react";

// You can use styled in the same way you use StyleSheet.create in React Native. 
export const ButtonRoot = styled(TouchableOpacity, {
  // Here you can define the base styles
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 40,
  width: "100%",
  maxWidth: 200,
  borderRadius: 20,
  // The 'variants' property allows you to define different styles for each variant.
  // Take a look at the 'type' variant.
  variants: {
    type: {
      "primary": {
        positive: "#3578e5",
      },
      "negative": {
        backgroundColor: "#fa383e",
      },
      "disabled": {
        backgroundColor: "#a4a6a8",
      },
    },
    size: {
      small: {
        height: 30,
      },
      large: {
        height: 40,
      },
      // In addition to variant styles, you can use rules to 
      // define which styles should be applied to compound variants.
      "large+primary":{ }
    },
  },
}); 

const App = () => {
  return (
    // Directly use your component and set the desired variant using attributes
    <ButtonRoot type={'positive'}>
      <Text>I'm a fast button</Text>
    </ButtonRoot>
  );
};`;
