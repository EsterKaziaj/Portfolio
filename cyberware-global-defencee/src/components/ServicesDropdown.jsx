// ServicesDropdown.jsx
import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../styles/ServicesDropdown.module.css";
import arrow from "../assets/images/services/arrow.svg";
import servicesImg1 from "../assets/images/services/1.svg";
import servicesImg2 from "../assets/images/services/2.svg";
import servicesImg3 from "../assets/images/services/3.svg";
import servicesImg4 from "../assets/images/services/4.svg";
import servicesImg5 from "../assets/images/services/5.svg";

const ServicesDropdown = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.servicesContent}>
        <div className={styles.servicesGrid}>
          {/* SIEM Threat Detection & Response */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <img src={servicesImg1} alt="" />
            </div>
            <h3>SIEM Threat Detection & Response</h3>
            <p>Our 24/7 monitoring services use AI-powered tools to detect and neutralize threats before they can harm your business</p>
            <ul>
              <li>Define Security Goals</li>
              <li>Select a SIEM Tool</li>
              <li>Establish Data Sources</li>
              <li>Normalize Data</li>
              <li>Create Detection Rules</li>
              <li>Implement Incident Response Procedures</li>
              <li>Review and Update Regularly</li>
            </ul>
            <button 
              className={styles.exploreButton}
              onClick={() => navigate('/services/siem')}
            >
              explore <span>SIEM Threat Detection</span>
              <img src={arrow} alt="" />
            </button>
          </div>

          {/* Penetration Testing */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <img src={servicesImg2} alt="" />
            </div>
            <h3>Penetration Testing</h3>
            <p>Identify and eliminate vulnerabilities in your network with our comprehensive penetration testing services.</p>
            <ul>
              <li>Pre-Engagement Interactions</li>
              <li>Reconnaissance</li>
              <li>Scanning</li>
              <li>Vulnerability Assessment</li>
              <li>Exploitation</li>
              <li>Post-Exploitation</li>
              <li>Reporting</li>
            </ul>
            <button 
              className={styles.exploreButton}
              onClick={() => navigate('/services/penetration')}
            >
              explore <span>Penetration Testing</span>
              <img src={arrow} alt="" />
            </button>
          </div>

          {/* Incident Response */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <img src={servicesImg3} alt="" />
            </div>
            <h3>Incident Response</h3>
            <p>In the event of a breach, our expert team reacts swiftly to minimize damage and restore your systems quickly.</p>
            <ul>
              <li>Preparation</li>
              <li>Detection and Analysis</li>
              <li>Prioritization</li>
              <li>Containment</li>
              <li>Eradication</li>
              <li>Recovery</li>
              <li>Post-Incident Review</li>
            </ul>
            <button 
              className={styles.exploreButton}
              onClick={() => navigate('/services/incident')}
            >
              explore <span>Incident Response</span>
              <img src={arrow} alt="" />
            </button>
          </div>

          {/* Network Security */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <img src={servicesImg4} alt="" />
            </div>
            <h3>Network Security</h3>
            <p>We offer end-to-end network security solutions, optimizing your infrastructure while securing it against unauthorized access.</p>
            <ul>
              <li>Perform a Network Audit</li>
              <li>Deploy Security Devices</li>
              <li>Establish Strong Access Controls</li>
              <li>Update Security Software</li>
              <li>Secure Network Hardware</li>
              <li>Implement Network Segmentation</li>
              <li>Establish a Maintenance System</li>
            </ul>
            <button 
              className={styles.exploreButton}
              onClick={() => navigate('/services/network')}
            >
              explore <span>Network Security</span>
              <img src={arrow} alt="" />
            </button>
          </div>

          {/* Security Awareness Training */}
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <img src={servicesImg5} alt="" />
            </div>
            <h3>Security Awareness Training</h3>
            <p>Empower your employees to recognize and respond to potential cyber threats.</p>
            <ul>
              <li>Assess Organizational Needs</li>
              <li>Get Buy-In from Leadership</li>
              <li>Develop a Tailored Training Program</li>
              <li>Implement Training Delivery Methods</li>
              <li>Conduct Regular Training Sessions</li>
              <li>Evaluate and Measure Effectiveness</li>
            </ul>
            <button 
              className={styles.exploreButton}
              onClick={() => navigate('/services/awareness')}
            >
              explore <span>Security Awareness Training</span>
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>

        <div className={styles.bottomLine}>
          <div className={styles.industries}>
            <span>Finance</span>
            <span>Healthcare</span>
            <span>Government</span>
            <span>Retail</span>
            <span>Game</span>
            <span>Education</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;