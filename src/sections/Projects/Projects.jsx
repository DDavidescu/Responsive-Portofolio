import styles from "./ProjectsStyles.module.css";
import shadowDrive from "../../assets/shadowdrive logo.png";
import medicalAs from "../../assets/logo medicalas.png";
import ProjectCard from "../../common/ProjectCard";
import GearQuest from "../../assets/GearQuest Logo.png";
import RoyalFitness from "../../assets/Royal Fitness Logo.png";
import Pokedex from "../../assets/Pokedex logo.png";
import timeTracker from "../../assets/TimeTrackerLogo.png";
import geoTrio from "../../assets/GeotrioLogo.png";
import chefChristian from "../../assets/ChefChristian Logo.png";
import robloxGameStudio from "../../assets/RobloxGameStudioLogo.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={robloxGameStudio}
          link={`https://ddavidescu.github.io/Roblox-Studio-Site/`}
          h3="Roblox Game Studio"
          p="Roblox Game Studio Presentation Site."
        />
        <ProjectCard
          src={chefChristian}
          link={`https://ddavidescu.github.io/Chef-Christian/`}
          h3="Chef Christian"
          p="Modern Showcase Website"
        />
        <ProjectCard
          src={geoTrio}
          link={`https://ddavidescu.github.io/GEOTRIO/`}
          h3="GEOTRIO"
          p="Location-based Gaming Platform"
        />
        <ProjectCard
          src={timeTracker}
          link={`https://ddavidescu.github.io/TimeTracker/`}
          h3="Time Tracker"
          p="Daily Progress Tracker"
        />
        <ProjectCard
          src={medicalAs}
          link={`https://ddavidescu.github.io/MedicalAs-2.0/`}
          h3="MedicalAs"
          p="Elderly Assistance Website"
        />
        <ProjectCard
          src={shadowDrive}
          link={`https://ddavidescu.github.io/ShadowDrive-Rentals/`}
          h3="ShadowDrive"
          p="Car Rental Website"
        />
        <ProjectCard
          src={GearQuest}
          link={`https://ddavidescu.github.io/GearQuest-Clothing-Website/`}
          h3="GearQuest"
          p="Clothing Website"
        />
        <ProjectCard
          src={RoyalFitness}
          link={`https://ddavidescu.github.io/Royal-Fitness-Gym-Website/`}
          h3="Royal Fitness"
          p="Gym Website"
        />
        <ProjectCard
          src={Pokedex}
          link={`https://ddavidescu.github.io/Pokedex/`}
          h3="Pokédex"
          p="Search Pokémon by Name/Number."
        />
      </div>
    </section>
  );
}

export default Projects;
