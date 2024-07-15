import styles from './ProjectsStyles.module.css'
import shadowDrive from '../../assets/shadowdrive logo.png'
import medicalAs from '../../assets/logo medicalas.png'
import ProjectCard from '../../common/ProjectCard'
import GearQuest from '../../assets/GearQuest Logo.png'
import RoyalFitness from '../../assets/Royal Fitness Logo.png'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={medicalAs} 
            link={`https://medicalas.ro/`}
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
        </div>
    </section>
  )
}

export default Projects
