import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Zero Runtime Overhead",
    Svg: require("@site/static/img/thunder-icon.png").default,
    description: (
      <>
        Our Babel plugin ensures the fastest runtime implementation possible,
        even surpassing React Native vanilla.
      </>
    ),
  },
  {
    title: "Variant-focused Design",
    Svg: require("@site/static/img/colors-icon.png").default,
    description: (
      <>Full support for variants, compound variants, themes, and tokens.</>
    ),
  },
  {
    title: "Enhanced Dev Experience",
    Svg: require("@site/static/img/red-heart-icon.png").default,
    description: (
      <>
        Effortlessly customize your components with prop-based variants and
        enjoy full TypeScript support
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md margin-top--md">
        <img height={24} width={"auto"} src={Svg} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
