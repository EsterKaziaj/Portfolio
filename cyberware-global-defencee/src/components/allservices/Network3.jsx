import React from 'react';
import styles from '../../styles/servicestyles/ServiceOverview.module.css';

const Network3 = () => {
  return (
    <section className={styles.overviewSection}>
      <div className={styles.overviewContent}>
        <h3 className={styles.orangeTitle}>Network Security: Best Practices and Strategies</h3>
        <p>
          Network security encompasses a range of measures designed to protect the integrity, confidentiality, and availability of computer networks and data. 
          As cyber threats evolve, organizations must adopt robust strategies to safeguard their networks against unauthorized access, misuse, or damage.
        </p>

        <h3 className={styles.orangeTitle}>Key Components of Network Security</h3>
        <ul>
          <li>Physical Security: Protects physical assets such as servers, routers, and switches from unauthorized access.</li>
          <li>Technical Security: Involves the use of hardware and software technologies to protect data.</li>
          <li>Administrative Security: Focuses on policies and procedures that govern user behavior and access controls.</li>
        </ul>

        <h3 className={styles.orangeTitle}>Best Practices for Network Security</h3>
        <ul>
          <li>Secure Routers: Change default passwords and implement access controls to prevent unauthorized access.</li>
          <li>Use SIEM Solutions: Aggregate network data to analyze real-time alerts and historical logs for threats.</li>
          <li>Establish Access Controls: Regulate who can access sensitive information.</li>
          <li>Network Segmentation: Divide the network into segments to contain threats.</li>
        </ul>

        <h3 className={styles.orangeTitle}>Conclusion</h3>
        <p>
          Implementing these best practices is essential for maintaining a secure network environment. 
          Organizations must remain vigilant against emerging threats by continuously updating their security measures, educating employees, and reinforcing proactive defenses.
        </p>
      </div>
    </section>
  );
};

export default Network3;
