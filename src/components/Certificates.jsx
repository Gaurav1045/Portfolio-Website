import React from "react";
import styles from "./Certificates.module.css";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: "Complete JavaScript Basics & Fundamentals",
      issuer: "Udemy",
      year: 2022,
      link: "https://www.udemy.com/certificate/UC-8318db4e-1647-4996-bf37-7cccd4f385f7/",
    },
    {
      id: 2,
      name: "Web Development Masterclass - Online Certification Course",
      issuer: "Udemy",
      year: 2022,
      link: "https://www.udemy.com/certificate/UC-014ff2d2-e96c-4905-9fb1-eae7537af4c7/",
    },
    {
      id: 3,
      name: "Getting Started with Data Analytics on AWS",
      issuer: "Coursera",
      year: 2022,
      link: "https://www.coursera.org/account/accomplishments/certificate/W9SKTT382HGQ",
    },
    {
      id: 4,
      name: "Build a Full Website using WordPress",
      issuer: "Coursera",
      year: 2022,
      link: "https://www.coursera.org/account/accomplishments/certificate/7SLVTL9PR4DE",
    },
    {
      id: 5,
      name: "Foundations of Cybersecurity",
      issuer: "Coursera",
      year: 2023,
      link: "https://www.coursera.org/account/accomplishments/certificate/VCE8NV2X86N8",
    },
    {
      id: 6,
      name: "Salesforce Associate",
      issuer: "Salesforce",
      year: 2023,
      link: "https://thc-public-files-nonproduction.s3.amazonaws.com/th-profile/credentials/sf-certs/sf-cert-associate.zip",
    },
  ];

  return (
    <>
      <h2 className={styles.heading}>Certificates</h2>
      <section className={styles.certificatesSection}>
        <div className={styles.certificatesGrid}>
          {certificates.map((cert) => (
            <div key={cert.id} className={styles.card}>
              <h3 className={styles.certName}>
                <FaCertificate className={styles.icon} /> {cert.name}
              </h3>
              <p className={styles.issuer}>
                <strong>Issued by:</strong> {cert.issuer}
              </p>
              <p className={styles.year}>
                <MdDateRange className={styles.icon} /> {cert.year}
              </p>
              <a
                href={cert.link}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Certificates;
