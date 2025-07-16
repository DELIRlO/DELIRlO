import React from "react";
import styles from "../Loading/styles.module.sass";
export default function Loading() {
  return (
    <main className={styles.panetone}>
      <span className={styles.loader}></span>
      <h6>&nbsp;CARREGANDO...</h6>
    </main>
  );
}
