import React from 'react';
import styles from '../../styles/servicestyles/ServiceHero.module.css';
import siem from '../../assets/service1/siem.png';

const Penetration1 = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBackground}>
        <img src={siem} alt="Penetration Testing" />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.navigation}>
          <span>Home</span>
          <span>/</span>
          <span>Services</span>
          <span>/</span>
          <span>Penetration Testing</span>
        </div>
        <div className={styles.mainContent}>
          <h1>
            <span className={styles.highlight}>Penetration</span> Testing
          </h1>
          <div className={styles.orangeLine}></div>
          <p>
            "Identify and eliminate vulnerabilities in your network with our comprehensive penetration testing services."
          </p>
          <button>Get a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Penetration1;
