// pages/ServiceSIEM.jsx
import React from 'react';
import ServiceHero from '../components/allservices/ServiceHero';

import styles from '../styles/servicestyles/ServiceSIEM.module.css';
import KeyFeatures from '../components/allservices/KeyFeatures';
import ServiceOverview from '../components/allservices/ServiceOverview';

const ServiceSIEM = () => {
  return (
    <div className={styles.siemPage}>
      <ServiceHero />
      <KeyFeatures />
      <ServiceOverview />
     
    </div>
  );
};

export default ServiceSIEM;