import React from "react";
import styles from "./About.module.css";
import profileImage from "../assets/profile.png"; 
import resumeFile from "../assets/Gaurav_Dhakate_Full Stack_Developer.pdf"; 

const About = () => {
  return (
    <>
      <h2 className={styles.heading}>About Me</h2>

      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <img
              src={profileImage}
              alt="Gaurav Dhakate"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.textContainer}>
            <p>
              Hi, I'm <strong>Gaurav Dhakate</strong>, a passionate <strong>Full Stack Developer</strong> skilled in <strong>Java, JavaScript, React, Spring Boot, and SQL</strong>. I build high-performance, user-friendly web applications that drive business efficiency and innovation.
            </p>

            <p className={styles.last}>
              With a focus on clean, maintainable code, I specialize in creating dynamic frontends with React and ensuring seamless backend functionality with Java and Spring Boot. I'm always evolving my skills to stay at the forefront of technology.
            </p>

            <a 
              href={resumeFile}
              download="Gaurav_Dhakate_Resume.pdf"
              className={`${styles.downloadButton}`}
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
