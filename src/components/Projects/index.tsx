import styles from "src/components/Projects/index.module.css";
import rightArrow from "src/assets/rightArrow.svg";
import ProjectCard from "src/components/ProjectCard";
import ecommerceApp from "src/assets/project-screenshots/ecommerce-app.png";
import videoPlayer from "src/assets/project-screenshots/video-player.png";
import canaryDesign from "src/assets/project-screenshots/canary-design.png";
import downScrollSignifier from "src/assets/down-scroll-signifier.svg";
import { useDarkTheme } from "src/context/theme-context";
import { useRef } from "react";
// import moviesGuide from "src/assets/project-screenshots/movies-guide.png";
// import valyrianTranslator from "src/assets/project-screenshots/valyrian-translator.png";
// import minionTranslator from "src/assets/project-screenshots/minion-translator.png";
// import cosmosQuiz from "src/assets/project-screenshots/cosmos-quiz.png";
// import getToKnowMeQuiz from "src/assets/project-screenshots/get-to-know-me-quiz.png";
// import spotifyClone from "src/assets/project-screenshots/spotify-clone.png";
// import youtubeClone from "src/assets/project-screenshots/youtube-clone.png";
// import easyI from "src/assets/project-screenshots/easy-i.png";

const projectData = [
  {
    tags: ["React", "TypeScript", "Vite"],
    name: "Canary Design",
    imageUrl: canaryDesign,
    description: "A component library built using Vite, React and TypeScript.",
    link: "https://canary-design.netlify.app/",
  },
  {
    tags: ["React", "TypeScript", "Stripe"],
    name: "Ecommerce App",
    imageUrl: ecommerceApp,
    description: "An Ecommerce app with all the features.",
    // link: "https://curious-crumble-3f54ff.netlify.app/",
    link: "https://beautiful-cobbler-7d0481.netlify.app/",
    projectStatus: "Note:- This project is a work-in-progress.",
  },
  {
    tags: ["React", "Rollup"],
    name: "Video Player",
    imageUrl: videoPlayer,
    description: "This is a video player library made in React.js for the web.",
    link: "https://github.com/vikrantaroraa/javascript-video-player#readme",
  },
  // {
  //   tags: ["React.js", "React Redux", "Spotify API"],
  //   name: "Spotify clone",
  //   imageUrl: spotifyClone,
  //   description:
  //     "This is a clone of the famous music streaming app Spotify. It is made in ReactJS and uses the spotify web api to fetch data in real time. You can search for songs and listen to them in the music player.",
  //   link: "https://spotifynew.netlify.app/",
  // },

  // {
  //   tags: ["React.js", "React Redux", "Youtube API"],
  //   name: "Youtube clone",
  //   imageUrl: youtubeClone,
  //   description:
  //     "This is a clone of the famous video streaming app Youtube. It is made in ReactJS and uses the youtube data api to fetch data in real time. You can search for videos and watch them in the video player.",
  //   link: "https://youtubenew.netlify.app/",
  // },
  // {
  //   tags: ["Flask", "HTML", "CSS", "JavaScript", "PostgreSQL"],
  //   name: "Easy-i",
  //   imageUrl: easyI,
  //   description:
  //     "Inventory is an important part of any organization. And thus maintaining inventory itself becomes a very important task. Easy-i is an inventory management system made in full stack flask that helps college departments to keep track of their inventory.",
  //   link: "https://vikrant-p2.herokuapp.com/",
  //   projectStatus:
  //     "Note : This project is currently down because heroku went private.",
  // },
  // {
  //   tags: ["React.js", "React Redux", "PokeAPI"],
  //   name: "Find me a pokemon",
  //   imageUrl: pokemonApp,
  //   description:
  //     "Do you remember watching pokemon when you were young. This app provides you different types of info about all those pokemons. Go and find out all about your favourite pokemon now.",
  //   link: "https://findmeapokemon.netlify.app/",
  // },
  // {
  //   tags: ["Node.js", "Readline Sync"],
  //   name: "Cosmos Quiz",
  //   imageUrl: cosmosQuiz,
  //   description:
  //     "This is a CLI app hosted on repl. A fun quiz related to space and cosmos. Play it and i can assure you that you will learn something new today.",
  //   link: "https://replit.com/@VikrantArora/cosmosQuiz?output=1&embed",
  // },
  // {
  //   tags: ["Node.js", "Readline Sync"],
  //   name: "Get to know me",
  //   imageUrl: getToKnowMeQuiz,
  //   description:
  //     "This is a CLI app hosted on repl. A fun quiz where you will get to know more about me.",
  //   link: "https://replit.com/@VikrantArora/getToKnowMe?embed=1&output=1",
  // },
  // {
  //   tags: ["HTML", "CSS", "JavaScript", "Fun translations API"],
  //   name: "Valyrian Translator",
  //   imageUrl: valyrianTranslator,
  //   description:
  //     "Are you a fan of GOT? If yes, then you must know about Daenerys Targaryen, the mother of dragons. Daenerys used to speak in her native language Valyrian. Now you can also talk in valyrian. Use this translator to convert plain text to valyrian language.",
  //   link: "https://talklikevalyrian.netlify.app/",
  // },
  // {
  //   tags: ["HTML", "CSS", "JavaScript", "Fun translations API"],
  //   name: "Minion Translator",
  //   imageUrl: minionTranslator,
  //   description:
  //     "Are you a fan of minions? Do you know that the jibberish they say is actually a language. Use this translator to convert plain text to minion language.",
  //   link: "https://chatwithaminion.netlify.app/",
  // },
  // {
  //   tags: ["React.js"],
  //   name: "Movie & TV Series guide",
  //   imageUrl: moviesGuide,
  //   description:
  //     "A react app made in codesandbox which provides a list of some of my favourite movies and tv series.",
  //   link: "https://fjqbu.csb.app/",
  // },
  // {
  //   tags: ["React.js", "React Redux", "Flask", "PostgreSQL"],
  //   name: "Easy Notes",
  //   imageUrl: easyNotes,
  //   description: `Easy Notes is a simple todo application. Here you can can create your account and maintain your personal todos.`,
  //   link: "",
  //   projectStatus:
  //     "Note : This project is currently down because heroku went private",
  // },
];

function Projects() {
  const { darkMode } = useDarkTheme();
  const projectsGridRef = useRef<HTMLDivElement>(null);

  const scrollDownProjects = () => {
    const projectsGridDiv = projectsGridRef.current;
    if (projectsGridDiv) {
      projectsGridDiv.scrollTo({
        top: projectsGridDiv.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles["container"]}>
      <div
        className={`${styles["experience-info"]} ${
          darkMode ? styles["dark"] : ""
        }`}
      >
        <div className={styles["info"]}>
          Over the past few years, I’ve worked on various projects. Here’s few
          of my best
        </div>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=theinsanelearner@gmail.com&su={MAIL SUBJECT} [Reference - Portfolio]&body={MAIL BODY}"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            Get in touch
            <span className={styles["right-arrow"]}>
              <img src={rightArrow} alt="right arrow" />{" "}
            </span>
          </button>
        </a>
      </div>
      <div
        className={`${styles["projects-grid"]} ${
          darkMode ? styles["dark-grid"] : ""
        }`}
        ref={projectsGridRef}
      >
        {projectData.map(
          (
            { tags, name, imageUrl, description, link, projectStatus },
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
                projectStatus={projectStatus}
              />
            );
          }
        )}
        <span
          className={styles["scroll-down-icon"]}
          onClick={scrollDownProjects}
        >
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
