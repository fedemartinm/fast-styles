import Iphone from "../iphone";
import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useIntersection from "../../hooks/use-intersection-observer";

export default function Benchmark() {
  const [iphoneRef, triggered] = useIntersection(0.5);
  return (
    <div className={clsx(styles.benchmark, "container")}>
      <h2 className={styles.benchmark__title}>
        Fast, faster, and then there's us.
      </h2>
      <p className={styles.benchmark__subtitle}>
        See how we stack up against other libraries in our{" "}
        <Link to="/docs/category/basics">benchmark results</Link>
      </p>
      <div className={styles.benchmark_columns}>
        <Iphone animated={triggered} ref={iphoneRef} />
        {triggered && (
          <div className={styles.chart}>
            <div className={styles.barContainer}>
              <div className={clsx(styles.bar, styles.fast)} />
              <div className={clsx(styles.text, styles.fast)}>
                Fast Styles - 254ms
              </div>
            </div>
            <div className={styles.barContainer}>
              <div className={clsx(styles.bar, styles.vanilla)} />
              <div className={clsx(styles.text, styles.vanilla)}>
                React Native Vanilla - 282ms
              </div>
            </div>
            <div className={styles.barContainer}>
              <div className={clsx(styles.bar, styles.styled)} />
              <div className={clsx(styles.text, styles.styled)}>
                Styled Components - 360ms
              </div>
            </div>
            <div className={styles.barContainer}>
              <div className={clsx(styles.bar, styles.tamagui)} />
              <div className={clsx(styles.text, styles.tamagui)}>
                Tamagui - 760ms
              </div>
            </div>
            <div className={styles.barContainer}>
              <div className={clsx(styles.bar, styles.nativebase)} />
              <div className={clsx(styles.text, styles.nativebase)}>
                NativeBase - 1400ms
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
