import React from "react";
import { ContentRoutes } from "../../bootstrap/ContentRoutes";
import { MainMenu } from "components";
import { MAIN_MENU_CONFIG } from "../../constants/mainMenuConfig";
import styles from "./Content.module.css";

export const Content: React.FC = () => {
  return (
    <div className={styles.content_block}>
      <MainMenu menuItems={MAIN_MENU_CONFIG} />
      <ContentRoutes/>
    </div>
  );
};

export default Content;
