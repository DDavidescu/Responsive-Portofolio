import styles from './ProjectsStyles.module.css'
import shadowDrive from '../../assets/ShadowDriveLogo.png'
import medicalAs from '../../assets/MedicalAsLogo.png'
import ProjectCard from '../../common/ProjectCard'
import marieCurie from '../../assets/marie-curie.jpg'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={medicalAs} 
            link={`https://medicalas.ro/`}
            h3="MedicalAs"
            p="Medical Care"
            />
            <ProjectCard 
            src={shadowDrive} 
            link={`https://ddavidescu.github.io/ShadowDrive/`}
            h3="ShadowDrive"
            p="Car Rental Website"
            />
            <ProjectCard 
            src={marieCurie} 
            link={`https://ddavidescu.github.io/tribute-page/`}
            h3="Tribute Page"
            p="for Marie Curie"
            />
        </div>
    </section>
  )
}

export default Projects
