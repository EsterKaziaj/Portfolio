// Footer.jsx
import React from 'react';
import styles from '../styles/Footer.module.css';
import logo1 from '../assets/images/footer/1.svg';
import logo2 from '../assets/images/footer/2.svg';
import logo3 from '../assets/images/footer/3.svg';
import logo4 from '../assets/images/footer/4.svg';
import maps from '../assets/images/footer/maps.png';
import emailIcon from '../assets/images/footer/email-icon.svg';
import locationIcon from '../assets/images/footer/location-icon.svg';
import phoneIcon from '../assets/images/footer/phone-icon.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Column 1 - Logos */}
        <div className={styles.logoColumn}>
          <img src={logo1} alt="Logo" className={styles.mainLogo} />
          <div className={styles.certRow}>
            <img src={logo2} alt="Cert" />
            <img src={logo3} alt="Cert" />
          </div>
          <img src={logo4} alt="Alliance" />
        </div>

        {/* Column 2 - Services */}
        <div className={styles.servicesColumn}>
          <div>
            <h4>Services</h4>
            <ul>
              <li>SIEM - 24/7 Threat Monitoring</li>
              <li>Penetration Testing</li>
              <li>Incident Management</li>
              <li>Compliance & Risk Management</li>
              <li>Security Awareness Training</li>
            </ul>
          </div>
          <div>
            <h4>About Us</h4>
            <ul>
              <li>Mission Statement</li>
              <li>Our Story</li>
              <li>Our Expertise</li>
              <li>Partnerships</li>
            </ul>
          </div>
          <div>
            <h4>Team</h4>
            <ul>
              <li>Co-Founder & CXX</li>
              <li>Cybersecurity Specialists</li>
              <li>Security Awareness Advisors</li>
            </ul>
          </div>
          <div>
            <h4>Our Values</h4>
            <ul>
              <li>Innovation</li>
              <li>Trust</li>
              <li>Excellence</li>
              <li>Collaboration</li>
            </ul>
          </div>
          <div>
            <h4>Industries We Serve</h4>
            <ul>
              <li>Finance</li>
              <li>Healthcare</li>
              <li>Government</li>
              <li>Retail</li>
              <li>eGame</li>
              <li>Education</li>
            </ul>
          </div>
        </div>

        {/* Column 3 - Contact Form */}
        <div className={styles.contactColumn}>
          <h3>Contact <span>us</span></h3>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <div className={styles.checkbox}>
              <input type="checkbox" id="newsletter" />
              <label htmlFor="newsletter">I would like to receive the newsletter.</label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Column 4 - Map */}
        <div className={styles.mapColumn}>
          <img src={maps} alt="Map" className={styles.map} />
          <div className={styles.contactInfo}>
            <div><img src={locationIcon} alt="" />Berlin, Germany</div>
            <div><img src={phoneIcon} alt="" />000111222333</div>
            <div><img src={emailIcon} alt="" />info@cybergd.com</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
<div className={styles.bottomBar}>
  <div className={styles.bottomBarContent}>
    <div className={styles.bottomLinks}>
      <a href="#">Legal Notice</a>
      <a href="#">Data Protection</a>
      <a href="#">Terms of Use</a>
    </div>
    <span>© Cyberware Global Defense</span>
  </div>
</div>
    </footer>
  );
};

export default Footer;