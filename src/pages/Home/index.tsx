import { AboutData } from "../../data/AboutData";
import { LinksData } from "../../data/LinksData";
import styles from "./home.module.scss";
import profilePic from "../../assets/profile.png";

const welcomeText = `${AboutData.firstName}  ${AboutData.lastName}`;

const Home = () => {
  return (
    <div className={styles.home}>
      <div>
        <img src={profilePic} alt='Profile' className={styles.image} />
        <h2 className={styles.title}>{welcomeText}</h2>
      </div>
      <div>
      <h3 className={styles.about}>{AboutData.about1}</h3>
        <h3 className={styles.about_next}>{AboutData.about2}</h3>
        <div className={styles.links}>
          {LinksData.map((item) => (
            <a
              href={item.link}
              target='_blank'
              rel='noreferrer'
              key={item.title}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
