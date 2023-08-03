import CodeBlock from "@theme/CodeBlock";
import Link from "@docusaurus/Link";
import React from "react";
import styles from "./styles.module.css";

export default function Usage() {
  return (
    <div className={styles.usage}>
      <h2 className={styles.usage__title}>Usage</h2>
      <p className={styles.usage__subtitle}>
        See how you can use fast-styles to add variants to your components
      </p>
      <div className={styles.codeBlockContainer}>
        <CodeBlock live noInline className={styles.codeBlock} language="jsx">
          {DefineCode}
        </CodeBlock>
      </div>
      <Link
        className="button button--secondary button--lg margin-bottom--lg margin-top--lg"
        to="/docs/category/basics"
      >
        Get Started
      </Link>
    </div>
  );
}

const DefineCode = `
const WelcomeMessage = styled(Text, {
  textAlign: "center",
  fontWeight: "700",
  padding: 12,
  variants:{
    type:{
      primary:{ 
        color: "#020202",
        backgroundColor: "#ffc72c" 
      },
      secondary:{ 
        color: "white",
        backgroundColor: "#149eca" 
      }
    }
  },
  attributes:{
    children: "Welcome to fast styles"
  }
});



render(
  <WelcomeMessage type="secondary"/>
);`;
