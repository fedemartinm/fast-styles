import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const Iphone = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(styles.iphone, props.animated && styles.animate)}
    >
      <i />
      <b />
      <div className={styles.banner}>
        <div className={styles.circle} />
      </div>
      <div className={styles.content}>
        <div className={clsx(styles.bar, styles.title)} />
        <div className={clsx(styles.bar, styles.subtitle)} />
        <div className={styles.row}>
          <div className={styles.square} />
          <div className={styles.column}>
            <div className={clsx(styles.bar, styles.medium)} />
            <div className={clsx(styles.bar, styles.large)} />
            <div className={clsx(styles.bar, styles.small)} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.square} />
          <div className={styles.column}>
            <div className={styles.bar} />
            <div className={clsx(styles.bar, styles.small)} />
            <div className={clsx(styles.bar, styles.medium)} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.square} />
          <div className={styles.column}>
            <div className={clsx(styles.bar, styles.small)} />
            <div className={clsx(styles.bar, styles.medium)} />
            <div className={clsx(styles.bar, styles.large)} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Iphone;
