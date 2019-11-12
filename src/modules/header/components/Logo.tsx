import * as React from "react";
import * as styles from "../../../common/styles/styles.module.css";

export default class Logo extends React.Component {
  render() {
    return (
      <div className={styles.logo}>
        <div className={styles.img}></div>
        <h1>
          <span className={styles.fit}>Fit</span>
          <span>Plan</span>
        </h1>
      </div>
    );
  }
}
