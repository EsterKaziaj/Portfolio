import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SecuritySolution.module.css";
import cyberImage from "../assets/home/cyber.png";
import industriesImage from "../assets/home/Industries.png";

const SecuritySolution = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.securityContainer}>
      {/* Top Section: Text & Image */}
      <div className={styles.topSection}>
        {/* Left: Text & Buttons */}
        <div className={styles.textContainer}>
          <h2>
            "Always On Guard: Your 24/7 Online <br />
            Security Solution for Unmatched Protection"
          </h2>
          <div className={styles.buttons}>
            <button className={styles.exploreBtn} onClick={() => navigate("/services")}>
              Explore our Services
            </button>
            <button className={styles.bookBtn} onClick={() => navigate("/industries")}>
              Book a Demo
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className={styles.imageContainer}>
          <img src={cyberImage} alt="Cyber Security Operations" />
        </div>
      </div>

      {/* Industries Section */}
      <div className={styles.industriesSection}>
        <h3>Industries We Serve</h3>
        <p>Protecting Critical Industries with Cutting-Edge Cybersecurity Solutions</p>
        <img src={industriesImage} alt="Industries Served" className={styles.fullWidthImage} />
        <button className={styles.getStarted} onClick={() => navigate("/industries")}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SecuritySolution;
