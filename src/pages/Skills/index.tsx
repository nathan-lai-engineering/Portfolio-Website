import { motion } from "framer-motion";

import { SkillsData } from "../../data/SkillsData";
import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./skills.module.scss";

const skillsOpen = "<resume>";
const skillsClose = "</resume>";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.skillsopen}>{skillsOpen}</h3>
          <div className={styles.skills_content}>
            <iframe src="./resume.pdf" width="100%" height="750px"/>

          </div>
          <h3 className={styles.skillsclose}>{skillsClose}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
