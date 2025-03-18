import React from "react";
import styles from "../styles/WhoWeAre.module.css";
import vectorIcon from "../assets/home/Vector.png";
import vectorIcon1 from "../assets/home/Vector (1).png";
import crossIcon from "../assets/home/cross.png";

const WhoWeAre = () => {
  return (
    <section className={styles.whoWeAreSection}>
      <h2 className={styles.title}>Who We Are</h2>
      <p className={styles.description}>
        At Cyberware Global Defense (CGD), we are committed to protecting the
        digital future through innovative solutions that safeguard businesses
        from evolving cyber threats. Our expert team combines cutting-edge
        technology with a proactive approach to cybersecurity, ensuring that
        your organization remains secure, compliant, and resilient in the face
        of emerging challenges.
      </p>

      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <img src={vectorIcon} alt="Trusted Organizations" className={styles.icon} />
          <div className={styles.statText}>
            <p>Trusted by over</p>
            <span className={styles.highlightedText}>100+ Organizations</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <img src={crossIcon} alt="Across Countries" className={styles.icon} />
          <div className={styles.statText}>
            <p>Across</p>
            <span className={styles.highlightedText}>50+ countries</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <img src={vectorIcon1} alt="Innovative Technology" className={styles.icon} />
          <div className={styles.statText}>
            <p>Use 100%</p>
            <span className={styles.highlightedText}>Innovative Technology</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
