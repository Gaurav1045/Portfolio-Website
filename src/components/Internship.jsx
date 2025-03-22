import React from "react";
import styles from "./Internship.module.css";

export default function Internship() {
  const internships = [
    {
      title: "Web Development Intern",
      company: "Trioclust, Amravati",
      duration: "6 Months",
      description: [
        "Worked as a Web Development Intern at Trioclust, Amravati, where I actively contributed to front-end development projects.",
        "Gained hands-on experience in developing responsive and visually appealing web applications using modern web technologies.",
        "Played a key role in designing and maintaining the website for Sipna College of Engineering and Technology, Amravati.",
        "Optimized website performance, improved UI/UX, and ensured cross-browser compatibility.",
        "Collaborated with designers and back-end developers to implement interactive and user-friendly web pages.",
      ],
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      certificateLink:
        "https://drive.google.com/drive/u/0/folders/1qO9PJJRNKkdr7IzH_yy0qQaFenpIVNIP",
    },
    {
      title: "Salesforce Administrator Virtual Intern",
      company: "Smart Internz",
      duration: "2 Months",
      description: [
        "Completed a virtual internship focused on Salesforce Administration, gaining a strong understanding of CRM management.",
        "Configured and maintained Salesforce CRM, assisting with data migration, security settings, and workflow automation.",
        "Worked with process automation tools such as Process Builder, Workflows, and Flows to streamline business operations.",
        "Managed user roles, permissions, and access levels to ensure data security and compliance.",
        "Analyzed and visualized customer data using Salesforce dashboards and reports.",
        "Completed various Salesforce modules and Super Badges to strengthen hands-on skills.",
      ],
      skills: [
        "Salesforce Administration",
        "Data Management",
        "Process Automation",
        "Reports & Dashboards",
      ],
      certificateLink:
        "https://smartinternz.com/internships/salesforce_certificates/e39b9a755406bbf9251a823de002c82d",
    },
  ];

  return (
    <>
      {" "}
      <h2 className={styles.heading}>Internships</h2>
      <div className={styles.internshipSection}>
        <div className={styles.internshipContainer}>
          {internships.map((intern, index) => (
            <div key={index} className={styles.internshipCard}>
              <h3>{intern.title}</h3>
              <h4>{intern.company}</h4>
              <p className={styles.duration}>{intern.duration}</p>
              <ul className={styles.descriptionList}>
                {intern.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <h5>Key Skills:</h5>
              <ul className={styles.skillsList}>
                {intern.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
              {intern.topicsCovered && (
                <>
                  <h5>Topics Covered:</h5>
                  <ul className={styles.skillsList}>
                    {intern.topicsCovered.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </>
              )}

              {intern.certificateLink && (
                <a
                  href={intern.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certificateButton}
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
