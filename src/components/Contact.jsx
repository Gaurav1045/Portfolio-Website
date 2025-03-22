import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faSalesforce, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons"; 

const contactData = [
  {
    icon: faEnvelope,
    color: "#ff4d4d",
    text: "Email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=gauravdhakategd.01@gmail.com",
  },
  {
    icon: faLinkedin,
    color: "#0077b5",
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/gaurav-dhakate-gd/",
  },
  {
    icon: faSalesforce,
    color: "#00A1E0",
    text: "Salesforce",
    link: "https://www.salesforce.com/trailblazer/gdhakate",
  },
  {
    icon: faGithub,
    color: "#333",
    text: "GitHub",
    link: "https://github.com/Gaurav1045",
  },
  {
    icon: faCode, 
    color: "#FFA116",
    text: "LeetCode",
    link: "https://leetcode.com/u/GauravTheProgrammer/", 
  },
  {
    icon: faPhone,
    color: "#00cc66",
    text: "Call",
    link: "tel:+919579870116",
  },
];

const Contact = () => {
  return (
    <>
      <h2 className={styles.heading}>Connect With Me</h2>
      <section id="contact" className={styles.contact}>
        <div className={styles.contactGrid}>
          {contactData.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={contact.icon} style={{ color: contact.color }} />
              </div>
              <span>{contact.text}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;
