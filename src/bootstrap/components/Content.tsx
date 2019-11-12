import * as React from "react";
import * as styles from "../../common/styles/styles.module.css";

class Content extends React.Component<any> {
  render() {
    const activeContent = this.props.activeContent;
    let content;

    if (activeContent == "calendar") {
      content = <div />;
    } else {
      content = <h1>error</h1>;
    }
    return <div className={styles.content}>{content}</div>;
  }
}

export default Content;
