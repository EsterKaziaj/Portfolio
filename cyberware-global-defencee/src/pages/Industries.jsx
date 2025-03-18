import React from "react";
import styles from "../styles/Industries.module.css";
import industryBg from "../assets/industries/industry.png";
import healthcare from "../assets/industries/health.png";
import egame from "../assets/industries/egame.png";
import education from "../assets/industries/education.png";
import retail from "../assets/industries/retail.png";
import finance from "../assets/industries/finance.png";
import government from "../assets/industries/government.png";

const industriesData = [
  {
    id: 1,
    title: "Healthcare",
    description:
      "Cyber threats in healthcare can compromise patient data and operational systems. We provide security solutions to safeguard critical information.",
    img: healthcare,
  },
  {
    id: 2,
    title: "eGame",
    description:
      "Protecting online gaming platforms from cyberattacks, fraud, and unauthorized access with advanced security measures.",
    img: egame,
  },
  {
    id: 3,
    title: "Education",
    description:
      "Ensuring data privacy and security for students and faculty in educational institutions with compliance-driven cybersecurity solutions.",
    img: education,
  },
  {
    id: 4,
    title: "Retail",
    description:
      "Protecting online and offline retail businesses from fraud, data breaches, and unauthorized access to financial transactions.",
    img: retail,
  },
  {
    id: 5,
    title: "Finance",
    description:
      "Financial institutions require cutting-edge security to prevent fraud, hacking attempts, and data loss.",
    img: finance,
  },
  {
    id: 6,
    title: "Government",
    description:
      "Safeguarding government data, infrastructure, and classified information from cyber threats and unauthorized access.",
    img: government,
  },
];

const Industries = () => {
  return (
    <div className={styles.industries}>
      {/* Background Image Section */}
      <div className={styles.heroSection}>
        <img
          src={industryBg}
          alt="Industries Background"
          className={styles.backgroundImage}
        />
        <div className={styles.heroContent}>
          <h1>
            Industries We <span className={styles.highlight}>Protect</span>
          </h1>
          <p>
            "Ensuring industry-specific cybersecurity solutions that safeguard your infrastructure
            from ever-evolving threats."
          </p>
        </div>
      </div>

      {/* Industry Sections */}
      <div className={styles.industryContainer}>
        {industriesData.map((industry) => (
          <div key={industry.id} className={styles.industryCard}>
            <img src={industry.img} alt={industry.title} className={styles.industryImage} />
            <h2>{industry.title}</h2>
            <p>{industry.description}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className={styles.contactSection}>
  <div className={styles.contactContent}>
    <h2>Not sure if we cover your industry?</h2>
    <p>
      Cyber threats are constantly evolving, and every industry faces unique challenges. 
      If you don’t see your sector listed or want to learn more about how we can tailor 
      our solutions to your specific needs, we’re here to help. Contact us today, and 
      let’s discuss how we can protect your business.
    </p>
  </div>

  <div className={styles.contactForm}>
    <div className={styles.inputWrapper}>
      <input type="email" placeholder="Your Email Address" className={styles.inputField} />
      <span className={styles.emailIcon}>📧</span>
    </div>
    <button className={styles.contactButton}>Discuss Your Security Needs</button>
  </div>
</div>


    </div>
  );
};

export default Industries;
