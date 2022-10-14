import React from "react";

import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>404</h1>
      <br />
      <p>Ничего не найдено :(</p>
    </div>
  );
};
export default NotFoundBlock;
