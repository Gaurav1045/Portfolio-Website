import React from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <>
      <h2 className={styles.heading}>Projects</h2>
      <section id="projects" className={styles.projects}>
        <div className={styles.projectsContainer}>

          <div className={styles.projectCard}>
            <h3>To-Do App</h3>
            <p>
              A task management application built with <strong>React.js</strong>. Users can add tasks with a specific date, track their progress, and mark tasks as completed.
            </p>
            <p><strong>Technologies:</strong> React, React Hooks, JavaScript, CSS</p>
            <div className={styles.buttonContainer}>
              <a href="https://todo-app-made-by-gaurav.netlify.app/" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                View Project
              </a>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3>Course Management System</h3>
            <p>
              A full-stack course management system built with <strong>ReactJS</strong> and <strong>Spring Boot</strong>.
            </p>
            <p><strong>Technologies:</strong> React, Axios, Spring Boot, MySQL</p>
            <div className={styles.buttonContainer}>
              <a href="https://your-project-link.com" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                View Project
              </a>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3>Pizza Bill Generator</h3>
            <p>
              A simple billing system built using <strong>Core Java</strong>. Users can order a pizza, customize it, and generate a detailed bill.
            </p>
            <p><strong>Technologies:</strong> Java, OOP (Inheritance, Encapsulation, Method Overriding)</p>
            <div className={styles.buttonContainer}>
              <a href="https://github.com/Gaurav1045/PizzaBillGenerator" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                View Project
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;
