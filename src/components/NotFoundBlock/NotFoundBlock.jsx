import React from "react";

import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Nothing
      </h1>
      <p className={styles.description}>Cannot find such page</p>
    </div>
  );
};

export default NotFoundBlock;
