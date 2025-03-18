import React from "react";
import styles from "../styles/Partnership.module.css";

// Import Images
import brainsterOffice from "../assets/partnerships/brainsterOffice.png";
import brainsterTeam from "../assets/partnerships/Brainsterteam.png";
import microsoft from "../assets/partnerships/microsoft.png";
import salesforce from "../assets/partnerships/Salesforce.png";
import azure from "../assets/partnerships/azure.png";

import emilyTestimonial from "../assets/partnerships/emilytestimonial.png";
import lindaTestimonial from "../assets/partnerships/lindatest.png";
import jestimonial from "../assets/partnerships/jestestimonial.png";
import stars from "../assets/partnerships/stars.png";
import upVector from "../assets/partnerships/up vector.png";
import downVector from "../assets/partnerships/downVector.png";

const Partnership = () => {
  return (
    <div className={styles.partnershipPage}>
      {/* Header */}
      <header className={styles.header}>
        <h1>
          Meet Our <span className={styles.orange}>Partners</span> &<br />
          <span className={styles.orange}>Collaborations</span>
        </h1>
        <p>
          At Cyberware Global Defense, we are proud to collaborate with the
          following industry leaders and organizations to provide the best
          cybersecurity solutions to our clients:
        </p>
      </header>

      {/* Partnership Sections */}
      <section className={styles.partnershipSection}>
        {/* Brainster Partnership */}
        <div className={styles.partnershipCardTop}>
          <div className={styles.imageGrid}>
            <img src={brainsterOffice} alt="Brainster Office" />
            <img src={brainsterTeam} alt="Brainster Team" />
          </div>
          <div className={styles.textBlock}>
            <h2>
              Partnership with <span className={styles.orange}>Brainster</span>
            </h2>
            <p>
              Our partnership with Brainster enables us to recruit and train the
              next generation of cybersecurity professionals. Together, we bring
              fresh ideas and cutting-edge solutions to the forefront of cyber
              defense. By combining Brainster’s forward-thinking education
              programs with our industry expertise, we are building a stronger,
              more resilient cybersecurity workforce. This collaboration ensures
              that our team stays ahead of emerging threats, equipped with the
              skills and knowledge to protect businesses and individuals in an
              ever-evolving digital landscape.
            </p>
          </div>
        </div>

        {/* Microsoft Partnership */}
        <div className={`${styles.partnershipCard} ${styles.darkBackground}`}>
          <img src={microsoft} alt="Microsoft" className={styles.fullImage} />
          <div className={styles.textBlock}>
            <h2>
              Partnership with <span className={styles.orange}>Microsoft</span>
            </h2>
            <p>
              Our collaboration with Microsoft enables us to integrate top-tier
              cloud security solutions with our existing cybersecurity
              framework. By leveraging Microsoft's trusted technologies, we help
              businesses enhance security, improve resilience, and drive
              innovation.
            </p>
          </div>
        </div>

        {/* Salesforce Partnership */}
        <div className={`${styles.partnershipCard} ${styles.darkBackground}`}>
          <div className={styles.textBlock}>
            <h2>
              Partnership with{" "}
              <span className={styles.orange}>Salesforce IQ</span>
            </h2>
            <p>
              Our partnership with Salesforce IQ allows us to strengthen
              cybersecurity strategies for businesses using AI-driven insights.
              This collaboration enhances risk management capabilities and helps
              protect customer data.
            </p>
          </div>
          <img
            src={salesforce}
            alt="Salesforce IQ"
            className={styles.fullImage}
          />
        </div>

        {/* Azure Partnership */}
        <div className={styles.partnershipCardTop}>
          <div className={styles.imageGrid}>
            <img src={brainsterOffice} alt="Azure Collaboration" />
            <img src={azure} alt="Azure Agreement" />
          </div>
          <div className={styles.textBlock}>
            <h2>
              Partnership with <span className={styles.orange}>Azure</span>
            </h2>
            <p>
              By partnering with Microsoft Azure, we bring industry-leading
              cloud security and infrastructure solutions to businesses. This
              enables enhanced data protection, scalability, and compliance for
              organizations of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialMain}>
          <img src={emilyTestimonial} alt="Emily R." />
          <div className={styles.testimonialText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </p>
            <h4>
              — Emily R. <img src={stars} alt="Rating" />
            </h4>
          </div>
        </div>

        <div className={styles.testimonialSide}>
          <div className={styles.testimonialItem}>
            <img src={lindaTestimonial} alt="Linda T." />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>
            <h4>
              — Linda T. <img src={stars} alt="Rating" />
            </h4>
          </div>

          <div className={styles.testimonialItem}>
            <img src={jestimonial} alt="Jessica M." />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>
            <h4>
              — Jessica M. <img src={stars} alt="Rating" />
            </h4>
          </div>
          {/* Navigation Arrows */}
          <div className={styles.navigation}>
            <img src={upVector} alt="Up" />
            <img src={downVector} alt="Down" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
