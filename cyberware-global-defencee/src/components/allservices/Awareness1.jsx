import React from 'react';
import styles from '../../styles/servicestyles/ServiceHero.module.css';
import siem from '../../assets/service1/siem.png';

const Awareness1 = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBackground}>
        <img src={siem} alt="Security Awareness Training" />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.navigation}>
          <span>Home</span>
          <span>/</span>
          <span>Services</span>
          <span>/</span>
          <span>Security Awareness Training</span>
        </div>
        <div className={styles.mainContent}>
          <h1>
            <span className={styles.highlight}>Security</span> Awareness Training:
          </h1>
          <div className={styles.orangeLine}></div>
          <p>
            "Empower your employees to recognize and respond to potential cyber threats. 
            Our comprehensive security awareness program equips your workforce with the knowledge they need to prevent attacks."
          </p>
          <button>Get a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Awareness1;
