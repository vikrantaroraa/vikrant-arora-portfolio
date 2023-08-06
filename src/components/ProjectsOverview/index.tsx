// @ts-nocheck
import ProjectOverviewCard from "src/components/ProjectOverviewCard";
import styles from "src/components/ProjectsOverview/index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import swipeCardsSignifier from "src/assets/swipe-cards-signifier.svg";
import { EffectCards, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import { useDarkTheme } from "src/context/theme-context";

const projectOverviewCardsData = [
  {
    tags: ["React.js + TypeScript", "Redux"],
    name: "Ecommerce App",
    description: "An Ecommerce app with all the features",
  },
  {
    tags: ["React.js", "React Redux", "Spotify API"],
    name: "Spotify clone",
    description:
      "This is a clone of the famous music streaming app Spotify. It uses the spotify web api to fetch data in real time. You can search for songs and listen to them in the music player.",
  },
  {
    tags: ["React.js + Rollup"],
    name: "Video player",
    description: "This is a video player library made in React.js for the web.",
  },
  {
    tags: ["React.js", "React Redux", "Youtube API"],
    name: "Youtube clone",
    description:
      "This is a clone of the famous video streaming app Youtube. It uses the youtube data api to fetch data in real time. You can search for videos and watch them in the video player.",
  },
  {
    tags: ["Flask + PostgreSQL", "HTML", "CSS", "JavaScript"],
    name: "Easy-i",
    description:
      "Easy-i is an inventory management system made in full stack flask that helps college departments to keep track of their inventory.",
  },
  {
    tags: ["Node.js", "Readline Sync"],
    name: "Cosmos Quiz",
    description:
      "This is a CLI app hosted on repl. A fun quiz related to space and cosmos. Play it and i can assure you that you will learn something new today.",
  },
  {
    tags: ["Node.js", "Readline Sync"],
    name: "Get to know me",
    description:
      "This is a CLI app hosted on repl. A fun quiz where you will get to know more about me.",
  },
  {
    tags: ["JavaScript", "HTML", "CSS", "Fun translations API"],
    name: "Valyrian Translator",
    description:
      "Are you a fan of GOT? Then you must know the mother of dragons. She used to speak in her native language Valyrian. Now you can use this translator to convert plain text to valyrian.",
  },
  {
    tags: ["JavaScript", "HTML", "CSS", "Fun translations API"],
    name: "Minion Translator",
    description:
      "Are you a fan of minions? Do you know that the jibberish they say is actually a language. Use this translator to convert plain text to minion language.",
  },
  {
    tags: ["React.js"],
    name: "Movie & TV Series guide",
    description:
      "A react app made in codesandbox which provides a list of some of my favourite movies and tv series.",
  },
  {
    tags: ["React.js", "React Redux", "PokeAPI"],
    name: "Find me a pokemon",
    description:
      "Do you remember watching pokemon when you were young. This app provides you all the information about those pokemons. Go and find out all about your favourite pokemon.",
  },
  {
    tags: ["Flask", "React.js", "React Redux", "PostgreSQL"],
    name: "Easy Notes",
    description:
      "Easy Notes is a simple todo application. Here You can can create your account and login and then you can maintain your personal todos.",
  },
];

function ProjectsOverview() {
  const { darkMode } = useDarkTheme();
  return (
    <div
      className={`${styles["projects-overview"]} ${
        darkMode ? styles["dark"] : ""
      }`}
    >
      {/* Uncomment this when want to use swipe cards icon */}
      {/* <span className={styles["swipe-cards-icon"]}>
        <img
          src={swipeCardsSignifier}
          alt="swipe cards icon"
          title="swipe cards"
        />
      </span> */}
      <div className={styles["heading"]}>My Projects</div>
      <div className={styles["project-cards"]}>
        <Swiper
          effect={"cards"}
          mousewheel={true}
          grabCursor={true}
          centeredSlides={true}
          // loop={true}
          slidesPerView={"auto"}
          cardsEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCards, Mousewheel]}
          className={styles["swiper-container"]}
        >
          {projectOverviewCardsData.map(
            ({ tags, name, description }, index) => {
              return (
                <SwiperSlide className={styles["swiper-slide"]} key={index}>
                  <ProjectOverviewCard
                    tags={tags}
                    name={name}
                    description={description}
                  />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default ProjectsOverview;
