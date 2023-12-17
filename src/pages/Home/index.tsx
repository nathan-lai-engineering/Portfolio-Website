import { AboutData } from "../../data/AboutData";
import { LinksData } from "../../data/LinksData";
import styles from "./home.module.scss";
import profilePic from "../../assets/profile.png";

const welcomeText = `I Am, ${AboutData.firstName}  ${AboutData.lastName}`;

const Home = () => {
  return (
    <div className={styles.home}>
    </div>
  );
};

export default Home;
