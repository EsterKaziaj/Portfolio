import React from 'react';
import styles from '../../styles/servicestyles/KeyFeatures.module.css';

const Awareness2 = () => {
  return (
    <div className={styles.features}>
      <div className={styles.featuresContainer}>
        <h2>
          Key Features of <span className={styles.highlight}>Security Awareness Training</span>
        </h2>

        <div className={styles.cardsContainer}>
          <div className={styles.featureCard}>
            <h3>Customized Content</h3>
            <p>
              Tailor training materials to different roles within the organization 
              to ensure relevance and engagement.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Regular Training Sessions</h3>
            <p>
              Conduct training sessions every four to six months, 
              as retention of knowledge tends to decline after this period.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Diverse Learning Methods</h3>
            <p>
              Utilize various formats such as videos, quizzes, and 
              simulations to cater to different learning styles and 
              keep content engaging.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Phishing Simulations</h3>
            <p>
              Regularly test employees with simulated phishing attacks 
              to reinforce learning and gauge awareness levels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awareness2;
