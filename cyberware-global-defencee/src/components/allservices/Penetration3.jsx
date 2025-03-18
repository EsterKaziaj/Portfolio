import React from 'react';
import styles from '../../styles/servicestyles/ServiceOverview.module.css';

const Penetration3 = () => {
  return (
    <section className={styles.overviewSection}>
      <div className={styles.overviewContent}>
        <h3 className={styles.orangeTitle}>Overview of Penetration Testing</h3>
        <p>
          Penetration testing, often referred to as "pentesting," is an authorized simulated cyberattack on a 
          computer system, designed to evaluate its security. Unlike vulnerability assessments, which merely 
          identify potential weaknesses, penetration tests actively exploit vulnerabilities to demonstrate their 
          impact and assess the overall security posture of the system.
        </p>

        <h3 className={styles.orangeTitle}>Purpose and Importance</h3>
        <p>
          The primary goal of penetration testing is to identify and address security vulnerabilities before they 
          can be exploited by malicious actors. By simulating real-world attacks, organizations can understand 
          their weaknesses and implement necessary countermeasures. Regular penetration testing is crucial for 
          maintaining robust cybersecurity measures, especially in light of increasing cyber threats.
        </p>

        <h3 className={styles.orangeTitle}>Types of Penetration Testing</h3>
        <ul>
          <li><strong>Web Application Testing:</strong> Evaluates web applications for vulnerabilities such as SQL injection and cross-site scripting (XSS).</li>
          <li><strong>Internal Network Testing:</strong> Assesses vulnerabilities from within the network, simulating an insider threat.</li>
          <li><strong>External Network Testing:</strong> Tests how exposed systems are to external cyberattacks.</li>
          <li><strong>Wireless Network Testing:</strong> Examines the security of wireless networks against unauthorized access.</li>
        </ul>

        <h3 className={styles.orangeTitle}>Conclusion</h3>
        <p>
          Penetration testing is an essential component of a comprehensive cybersecurity strategy. By simulating 
          attacks and identifying vulnerabilities, organizations can take proactive measures to strengthen their 
          defenses against real-world threats. Regularly scheduled penetration tests not only enhance security but 
          also ensure compliance with industry regulations, ultimately protecting sensitive data and maintaining 
          trust with stakeholders.
        </p>
      </div>
    </section>
  );
};

export default Penetration3;
