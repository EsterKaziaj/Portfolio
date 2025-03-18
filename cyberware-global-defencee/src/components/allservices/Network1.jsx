import React from 'react';
import styles from '../../styles/servicestyles/ServiceHero.module.css';
import siem from '../../assets/service1/siem.png';

const Network1 = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBackground}>
        <img src={siem} alt="Network Security" />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.navigation}>
          <span>Home</span>
          <span>/</span>
          <span>Services</span>
          <span>/</span>
          <span>Network Security</span>
        </div>
        <div className={styles.mainContent}>
          <h1>
            <span className={styles.highlight}>Network</span> Security:
          </h1>
          <div className={styles.orangeLine}></div>
          <p>
            "We offer end-to-end network security solutions, optimizing your infrastructure while securing it against unauthorized access."
          </p>
          <button>Get a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Network1;
