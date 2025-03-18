import React from 'react';
import styles from '../../styles/servicestyles/ServiceHero.module.css';
import siem from '../../assets/service1/siem.png';

const Incident1 = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBackground}>
        <img src={siem} alt="Incident Response" />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.navigation}>
          <span>Home</span>
          <span>/</span>
          <span>Services</span>
          <span>/</span>
          <span>Incident Response</span>
        </div>
        <div className={styles.mainContent}>
          <h1>
            <span className={styles.highlight}>Incident</span> Response:
          </h1>
          <div className={styles.orangeLine}></div>
          <p>
            "In the event of a breach, our expert team reacts swiftly to minimize damage and restore your systems quickly."
          </p>
          <button>Get a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Incident1;
