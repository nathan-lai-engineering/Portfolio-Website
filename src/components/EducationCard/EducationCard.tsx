import { FC } from 'react';
import { IoIosSchool, IoIosConstruct } from 'react-icons/io';

import styles from './educationCard.module.scss';

interface EducationCardProps {
  title: string;
  date: string;
  details: string[];
  isLeft?: boolean;
  icon?: string;
}

const EducationCard: FC<EducationCardProps> = (props) => {

  return (
    <div className={`${styles.row} ${props.isLeft ? styles.row_1 : styles.row_2}`}>
      <section>
        {props.icon=="education" && <IoIosSchool className={styles.icon} />}
        {props.icon=="experience" && <IoIosConstruct className={styles.icon} />}
        <div className={styles.details}>
          <span className={styles.title}>{props.title}</span>
          <span>{props.date}</span>
        </div>
        {props.details.map((item) => (
          <p key={item}>◉ {item}</p>
        ))}
      </section>
    </div>
  );
};

export { EducationCard };
