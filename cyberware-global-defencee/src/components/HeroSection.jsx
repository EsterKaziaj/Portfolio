import React from "react";
import styles from "../styles/HeroSection.module.css";
import heroImage from "../assets/home/hero-home-bg.png";
import consultationIcon from "../assets/home/free-consultation.svg";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.heroBackground}>
        <img src={heroImage} alt="Cybersecurity Hero Background" />
      </div>

      {/* Content Container */}
      <div className={styles.heroContent}>
        {/* Intro Text */}
        <div className={styles.introText}>
          <span className={styles.orangeText}>Your Cybersecurity Experts</span>
          <span className={styles.whiteText}>Securing the Future Today</span>
        </div>

        {/* Title and Description */}
        <h1 className={styles.heroTitle}>
          Tailored, <span className={styles.orangeHighlight}>AI-driven solutions</span> to
        </h1>

        {/* Row with "Protect Your Business" and Subtext */}
        <div className={styles.textRow}>
          <h1 className={styles.protectText}>protect your business</h1>
          <div className={styles.divider}></div>
          <p className={styles.subText}>
            "Protecting the digital future through innovative cybersecurity solutions, we empower 
            businesses to safeguard their assets, ensure compliance, and maintain trust in an increasingly connected world."
          </p>
        </div>

        {/* Buttons */}
        <div className={styles.buttonContainer}>
          <button className={styles.freeConsultation}>
            <img src={consultationIcon} alt="Free Consultation" />
            Free Consultation
          </button>
          <button className={styles.getStarted}>Get Started Today</button>
        </div>

        {/* Bottom Section with Industry Names */}
        <div className={styles.industryList}>
          <span>Finance</span>
          <span>Healthcare</span>
          <span>Government</span>
          <span>Retail</span>
          <span>Game</span>
          <span>Education</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
