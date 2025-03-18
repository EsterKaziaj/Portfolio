import React from 'react';
import styles from '../../styles/servicestyles/KeyFeatures.module.css';

const Network2 = () => {
  return (
    <div className={styles.features}>
      <div className={styles.featuresContainer}>
        <h2>
          Key Features of <span className={styles.highlight}>Network Security</span>
        </h2>

        <div className={styles.cardsContainer}>
          <div className={styles.featureCard}>
            <h3>Perform Regular Audits</h3>
            <p>
              Conduct thorough network audits to identify vulnerabilities and assess the overall security posture.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Implement Data Loss Prevention (DLP)</h3>
            <p>
              DLP strategies help monitor and control data transfers across the network to prevent unauthorized access or data breaches.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Educate Employees</h3>
            <p>
              Regular training on security awareness helps employees recognize phishing attempts and social engineering tactics, reducing the risk of human error.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Secure Routers</h3>
            <p>
              Change default passwords on routers, relocate them to secure areas, and implement additional security measures such as video surveillance to prevent unauthorized access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network2;
