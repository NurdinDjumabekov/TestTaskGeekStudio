import React from "react";
import styles from "./MiniPreloader.module.css";

const MiniPreloader = () => {
  return (
    <div className={styles.parent_preloader}>
      <div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};

export default MiniPreloader;
