import styles from './ProjectsStyles.module.css'
import shadowDrive from '../../assets/shadowdrive logo.png'
import medicalAs from '../../assets/logo medicalas.png'
import ProjectCard from '../../common/ProjectCard'
import marieCurie from '../../assets/GearQuest Logo.png'

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
            src={marieCurie} 
            link={`https://ddavidescu.github.io/tribute-page/`}
            h3="GearQuest"
            p="Clothing Website"
            />
        </div>
    </section>
  )
}

export default Projects
