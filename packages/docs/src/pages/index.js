import Benchmark from "../components/benchmark";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import React from "react";
import Usage from "../components/usage";
import clsx from "clsx";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero shadow--lw", styles.heroBanner)}>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="hero__title">{siteConfig.title}</h1>
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/basics"
          >
            Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A lightweight and efficient React Native styling package"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Benchmark />
        <Usage />
      </main>
    </Layout>
  );
}
