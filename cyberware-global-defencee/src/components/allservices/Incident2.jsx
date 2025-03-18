import React from 'react';
import styles from '../../styles/servicestyles/KeyFeatures.module.css';

const Incident2 = () => {
  return (
    <div className={styles.features}>
      <div className={styles.featuresContainer}>
        <h2>
          Key Features of <span className={styles.highlight}>Incident Response</span>
        </h2>

        <div className={styles.cardsContainer}>
          <div className={styles.featureCard}>
            <h3>Reduce Response Time</h3>
            <p>
              A clear plan enables quicker identification and remediation of threats, minimizing potential damage.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Enhance Coordination</h3>
            <p>
              Clearly defined roles and responsibilities facilitate teamwork during high-stakes situations.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Ensure Compliance</h3>
            <p>
              Many regulations require documented incident response procedures, helping organizations avoid legal repercussions.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Improve Security Posture</h3>
            <p>
              Post-incident analysis allows organizations to learn from incidents and strengthen defenses against future threats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incident2;
