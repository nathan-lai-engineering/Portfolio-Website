import { motion } from "framer-motion";

import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./api.module.scss";

const apiOpen = "<api>";
const apiClose = "</api>";

const API = () => {
  return (
    <div className={styles.api}>
      <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.apiopen}>{apiOpen}</h3>
          <div className={styles.api_content}>
            <a>Under construction, web api interface to api.nathanlai.tech</a>

          </div>
          <h3 className={styles.apiclose}>{apiClose}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default API;
