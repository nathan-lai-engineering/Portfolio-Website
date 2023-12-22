
interface ProjectsType {
  title: string
  description: string
  image: string
  GitHub: string
  hosted: string
}

export const ProjectsData: ProjectsType[] = [
  {
    title: 'Personal Website | Personal',
    description: `Personal portfolio website using React.js hosted on Firebase Hosting.`,
    image: '',
    GitHub: 'https://github.com/nathan-lai-engineering/Portfolio-Website',
    hosted: 'https://www.nathanlai.tech/',
  },

  {
    title: 'Discord Bot | Personal',
    description: `Discord bot created using the Discord.js API with data hosted on Oracle Autonomous Database. Using TikWM & Riot Web API.`,
    image: '../assets/projects/discord_bot_example.png',
    GitHub: 'https://github.com/nathan-lai-engineering/discord-bot',
    hosted: '',
  },

  {
    title: 'FeastReview | School',
    description: `Senior programming team project around restaurant reviews heavily inspired by Yelp with improvements. Created using React Native Javascript framework, Yelp Fusion, & Firebase.`,
    image: '../assets/projects/feastreview_example.png',
    GitHub: 'https://github.com/dolan77/FeastReview',
    hosted: '',
  },

  {
    title: 'Cody the Crab | BeachHacks 2021',
    description: `Discord bot created in Python using Discord.py focused on managing academic servers as a team submission. Stores data using Firestore database.`,
    image: '',
    GitHub: 'https://github.com/nathan-lai-engineering/Cody-the-Crab',
    hosted: '',
  },

  {
    title: 'RationBytes | LAHacks 2020',
    description: `iOS mobile application created in Javacript using React Native & Expo as a team submission. Keeps track of inventory & expiration dates intended for use during quarantine.`,
    image: '',
    GitHub: 'https://github.com/nathan-lai-engineering/ration-bytes-mobile-app',
    hosted: '',
  },

  {
    title: 'Objective Koala | HackSC 2020',
    description: `Website focused on JavaScript game created as a team submission. Winner of Xpring’s sustainability challenge. Created using Bootstrap, JavaScript, CSS, & HTML.`,
    image: '',
    GitHub: 'https://github.com/nathan-lai-engineering/byte-me-3',
    hosted: '',
  },

  {
    title: 'Kinematics Calculator | Personal',
    description: `My first ever code project, created in Java using Swing for graphical interface. Calculates values using kinematics equations learned in mechanics in physics.`,
    image: '',
    GitHub: 'https://github.com/nathan-lai-engineering/kinematics-calculator',
    hosted: '',
  },
];
