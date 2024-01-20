import { motion } from "framer-motion";

import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./hobbies.module.scss";

const hobbiesOpen = "<hobbies>";
const hobbiesClose = "</hobbies>";

const Hobbies = () => {
  return (
    <div className={styles.hobbies}>
      <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.hobbiesopen}>{hobbiesOpen}</h3>
          <div className={styles.hobbies_content}>
            <a>Under construction, low priority</a>
          </div>
          <h3 className={styles.hobbiesclose}>{hobbiesClose}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default Hobbies;
