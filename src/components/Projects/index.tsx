import styles from "src/components/Projects/index.module.css";
import rightArrow from "src/assets/rightArrow.svg";
import ProjectCard from "src/components/ProjectCard";
import moviesGuide from "src/assets/project-screenshots/movies-guide.png";
import foodGuide from "src/assets/project-screenshots/food-guide.png";
import valyrianTranslator from "src/assets/project-screenshots/valyrian-translator.png";
import minionTranslator from "src/assets/project-screenshots/minion-translator.png";
import cosmosQuiz from "src/assets/project-screenshots/cosmos-quiz.png";
import getToKnowMeQuiz from "src/assets/project-screenshots/get-to-know-me-quiz.png";
import pokemonApp from "src/assets/project-screenshots/pokemon-app.png";
import spotifyClone from "src/assets/project-screenshots/spotify-clone.png";
import youtubeClone from "src/assets/project-screenshots/youtube-clone.png";
import easyI from "src/assets/project-screenshots/easy-i.png";
import easyNotes from "src/assets/project-screenshots/easy-notes.png";
import ecommerceApp from "src/assets/project-screenshots/ecommerce-app.png";
import downScrollSignifier from "src/assets/down-scroll-signifier.svg";

const projectData = [
  {
    tags: ["Node.js", "Readline Sync"],
    name: "Cosmos Quiz",
    imageUrl: cosmosQuiz,
    description:
      "This is a CLI app hosted on repl. A fun quiz related to space and cosmos. Play it and i can assure you that you will learn something new today.",
    link: "https://replit.com/@VikrantArora/cosmosQuiz?output=1&embed",
    // backgroundColor: "#ffedd9",
  },
  {
    tags: ["Node.js", "Readline Sync"],
    name: "Get to know me",
    imageUrl: getToKnowMeQuiz,
    description:
      "This is a CLI app hosted on repl. A fun quiz where you will get to know more about me.",
    link: "https://replit.com/@VikrantArora/getToKnowMe?embed=1&output=1",
    backgroundColor: "",
  },

  {
    tags: ["React.js", "React Redux", "Spotify API"],
    name: "Spotify clone",
    imageUrl: spotifyClone,
    description:
      "This is a clone of the famous music streaming app Spotify. It is made in ReactJS and uses the spotify web api to fetch data in real time. You can search for songs and listen to them in the music player.",
    link: "https://spotifynew.netlify.app/",
    // backgroundColor: "#fbe9dd",
  },
  {
    tags: ["React.js", "React Redux", "Youtube API"],
    name: "Youtube clone",
    imageUrl: youtubeClone,
    description:
      "This is a clone of the famous video streaming app Youtube. It is made in ReactJS and uses the youtube data api to fetch data in real time. You can search for videos and watch them in the video player.",
    link: "https://youtubenew.netlify.app/",
    // backgroundColor: "#edf7ff",
  },
  {
    tags: ["React.js", "React Redux", "PokeAPI"],
    name: "Find me a pokemon",
    imageUrl: pokemonApp,
    description:
      "Do you remember watching pokemon when you were young. This app provides you different types of info about all those pokemons. Go and find out all about your favourite pokemon now.",
    link: "https://findmeapokemon.netlify.app/",
    // backgroundColor: "#fff6e7",
  },
  {
    tags: ["HTML", "CSS", "JavaScript", "Fun translations API"],
    name: "Valyrian Translator",
    imageUrl: valyrianTranslator,
    description:
      "Are you a fan of GOT? If yes, then you must know about Daenerys Targaryen, the mother of dragons. Daenerys used to speak in her native language Valyrian. Now you can also talk in valyrian. Use this translator to convert plain text to valyrian language.",
    link: "https://talklikevalyrian.netlify.app/",
  },
  {
    tags: ["HTML", "CSS", "JavaScript", "Fun translations API"],
    name: "Minion Translator",
    imageUrl: minionTranslator,
    description:
      "Are you a fan of minions? Do you know that the jibberish they say is actually a language. Use this translator to convert plain text to minion language.",
    link: "https://chatwithaminion.netlify.app/",
  },
  {
    tags: ["React.js"],
    name: "Movie & TV Series guide",
    imageUrl: moviesGuide,
    description:
      "A react app made in codesandbox which provides a list of some of my favourite movies and tv series.",
    link: "https://fjqbu.csb.app/",
  },
  // {
  //   tags: ["React.js"],
  //   name: "Give me some food",
  //   imageUrl: foodGuide,
  //   description:
  //     "This is a React JS application which gives you information about the food items when a food emoji is given as input.",
  //   link: "https://ixogd.csb.app/",
  // },
  {
    tags: ["React.js", "TypeScript", "Redux"],
    name: "Ecommerce App",
    imageUrl: ecommerceApp,
    description: "An Ecommerce app with all the features",
    link: "https://heroic-dango-a188c7.netlify.app/",
  },
  {
    tags: ["Flask", "HTML", "CSS", "JavaScript", "PostgreSQL"],
    name: "easy-i",
    imageUrl: easyI,
    description:
      "Inventory is an important part of any organization. And thus maintaining inventory itself becomes a very important task. Easy-i is an inventory management system made in full stack flask that helps college departments to keep track of their inventory.",
    link: "https://vikrant-p2.herokuapp.com/",
  },
  {
    tags: ["React.js", "React Redux", "Flask", "PostgreSQL"],
    name: "Easy Notes",
    imageUrl: easyNotes,
    description:
      "Easy Notes is a simple todo application. Here You can can create your account and login and then you can maintain your personal todos.",
    link: "",
  },
];

function Projects() {
  return (
    <div className={styles["container"]}>
      <div className={styles["experience-info"]}>
        <div className={styles["info"]}>
          Over the past few years, I’ve worked on various projects. Here’s few
          of my best
        </div>
        <button>
          Get in touch
          <span className={styles["right-arrow"]}>
            <img src={rightArrow} alt="right arrow" />{" "}
          </span>
        </button>
      </div>
      <div className={styles["projects-grid"]}>
        {projectData.map(
          (
            { tags, name, imageUrl, description, link, backgroundColor },
            index
          ) => {
            return (
              <ProjectCard
                key={index}
                tags={tags}
                name={name}
                imageUrl={imageUrl}
                description={description}
                link={link}
                backgroundColor={backgroundColor}
              />
            );
          }
        )}
        <span className={styles["scroll-down-icon"]}>
          <img
            src={downScrollSignifier}
            alt="scroll down icon"
            title="scroll down projects"
          />
        </span>
      </div>
    </div>
  );
}

export default Projects;
