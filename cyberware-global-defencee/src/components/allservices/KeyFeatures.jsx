// components/allservices/KeyFeatures.jsx
import React from 'react';
import styles from '../../styles/servicestyles/KeyFeatures.module.css';

const KeyFeatures = () => {
  return (
    <div className={styles.features}>
      <div className={styles.featuresContainer}>
        <h2>
          Key Features of <span className={styles.highlight}>SIEM</span>
        </h2>

        <div className={styles.cardsContainer}>
          <div className={styles.featureCard}>
            <h3>Data Aggregation</h3>
            <p>
              SIEM solutions collect event data from diverse sources, including user activities, 
              endpoints, applications, and security hardware like firewalls and antivirus software.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Event Correlation</h3>
            <p>
              By correlating related events, SIEM systems can identify patterns that may indicate 
              potential threats.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Real-Time Monitoring</h3>
            <p>
              SIEM tools provide near-real-time analysis of security alerts, enabling security teams 
              to respond swiftly to incidents.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Automated Response</h3>
            <p>
              Many SIEM solutions incorporate automation features that can respond to certain types 
              of threats automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;