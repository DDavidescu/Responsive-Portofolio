import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero picture.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/BauDavid_CV.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;

    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>

            <img className={styles.hero} 
            src={heroImg} 
            alt="Profile picture of Bau David" />

            <img className={styles.colorMode} 
            src={themeIcon} 
            alt="Color mode icon" 
            onClick={toggleTheme}
            />

        </div>

        <div className={styles.info}>
            <h1>
                Bau <br />
                David
            </h1>
            <h2>
                Junior Full Stack Developer
            </h2>

            <span>
                <a href="https://www.linkedin.com/in/david-bau-67a65628b/" target='_blank'>
                    <img src={linkedinIcon} alt="LinkedIn Icon" />
                </a>
                <a href="https://github.com/DDavidescu" target='_blank'>
                    <img src={githubIcon} alt="GitHub Icon" />
                </a>
            </span>

            <p className={styles.description}>
             Using HTML, CSS, and JavaScript, I bring captivating and innovative projects to life. I am always eager to develop my skills and learn new technologies. Explore my recent work and see how I can contribute to the success of your project!
            </p>

            <a href={CV} download>
                <button className="hover">
                    Download CV
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero
