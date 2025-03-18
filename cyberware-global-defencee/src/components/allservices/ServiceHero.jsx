// components/allservices/ServiceHero.jsx
import React from 'react';
import styles from '../../styles/servicestyles/ServiceHero.module.css';
import siem from '../../assets/service1/siem.png';

const ServiceHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBackground}>
        <img src={siem} alt="" />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.navigation}>
          <span>Home</span>
          <span>/</span>
          <span>Services</span>
          <span>/</span>
          <span>SIEM Threat Detection & Response</span>
        </div>
        <div className={styles.mainContent}>
          <h1>
            <span className={styles.highlight}>SIEM</span> 
            Threat Detection & Response:
          </h1>
          <div className={styles.orangeLine}></div>
          <p>
            "Our 24/7 monitoring services use AI-powered tools to detect and
            neutralize threats before they can harm your business."
          </p>
          <button>Get a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;