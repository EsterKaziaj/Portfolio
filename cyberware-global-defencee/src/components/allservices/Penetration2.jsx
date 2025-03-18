import React from 'react';
import styles from '../../styles/servicestyles/KeyFeatures.module.css';

const Penetration2 = () => {
  return (
    <div className={styles.features}>
      <div className={styles.featuresContainer}>
        <h2>
          Key Features of <span className={styles.highlight}>Penetration Testing</span>
        </h2>

        <div className={styles.cardsContainer}>
          <div className={styles.featureCard}>
            <h3>Reconnaissance</h3>
            <p>
              Gathering information about the target system, which may include identifying network services 
              and potential entry points.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Scanning</h3>
            <p>
              Using tools to discover live hosts, open ports, and services running on the target network. 
              This phase helps in mapping the attack surface.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Gaining Access</h3>
            <p>
              Exploiting identified vulnerabilities using various tools and techniques to gain unauthorized 
              access to the system.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Maintaining Access</h3>
            <p>
              Establishing a persistent presence within the target environment to gather further data 
              and assess the extent of control that can be achieved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Penetration2;
