import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import styles from "./Skills.module.css";

// Skills Data with Links (Sorted Alphabetically)
const skillsData = [
  { 
    name: "Angular", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    link: "https://angular.io"
  },
  { 
    name: "Bootstrap", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    link: "https://getbootstrap.com"
  },
  { 
    name: "CSS3", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  { 
    name: "HTML5", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  { 
    name: "Java", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    link: "https://www.java.com"
  },
  { 
    name: "JavaScript", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  { 
    name: "ReactJS", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    link: "https://react.dev"
  },
  { 
    name: "Spring Boot", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    link: "https://spring.io/projects/spring-boot"
  },
  { 
    name: "SQL", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    link: "https://www.mysql.com"
  }
].sort((a, b) => a.name.localeCompare(b.name)); // Sort skills alphabetically

const Skills = () => {
  return (
    <>
      <h2 className={`${styles.heading} text-center mb-4`}>My Skills</h2>
      <section id="skills" className={`${styles.skills} container py-5`}>
        <div className="row justify-content-center">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center" 
              onClick={() => window.open(skill.link, "_blank")}
            >
              <div className={styles.card}>
                <img src={skill.logo} alt={skill.name} className={styles.skillLogo} />
                <h5 className={styles.skillName}>{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
