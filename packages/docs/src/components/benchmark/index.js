import Iphone from "../iphone";
import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useIntersection from "../../hooks/use-intersection-observer";
import useMediaQuery from "../../hooks/use-media-query";

export default function Benchmark() {
  const [iphoneRef, triggered] = useIntersection(0.5);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={clsx(styles.benchmark, "container")}>
      <h2 className={styles.benchmark__title}>
        Fast, faster, and then there's us.
      </h2>
      <p className={styles.benchmark__subtitle}>
        See how we stack up against other libraries in our{" "}
        <Link to="https://github.com/fedemartinm/fast-styles/tree/main/packages/benchmarks#fast-styles-benchmark">
          benchmark results
        </Link>
      </p>
      <div className={styles.benchmark_columns}>
        <Iphone animated={triggered || isMobile} ref={iphoneRef} />
        {(triggered || isMobile) && (
          <div className={styles.chart}>
            <div className={styles.barContainer}>
              <div className={clsx(styles.bar, styles.fast)} />
              <div className={clsx(styles.text, styles.fast)}>
                Fast Styles - 76ms
              </div>
            </div>
            <div className={styles.barContainer}>
              <div className={clsx(styles.bar, styles.vanilla)} />
              <div className={clsx(styles.text, styles.vanilla)}>
                React Native Vanilla - 84ms
              </div>
            </div>
            <div className={styles.barContainer}>
              <div className={clsx(styles.bar, styles.styled)} />
              <div className={clsx(styles.text, styles.styled)}>
                Styled Components - 102ms
              </div>
            </div>
            <div className={styles.barContainer}>
              <div className={clsx(styles.bar, styles.tamagui)} />
              <div className={clsx(styles.text, styles.tamagui)}>
                Tamagui - 284ms
              </div>
            </div>
            <div className={styles.barContainer}>
              <div className={clsx(styles.bar, styles.gluestack)} />
              <div className={clsx(styles.text, styles.gluestack)}>
                Gluestack - 832ms
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
