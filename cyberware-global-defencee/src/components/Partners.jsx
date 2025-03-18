// Partners.jsx
import React, { useState } from 'react';
import styles from '../styles/Partners.module.css';
import partners from '../assets/home/partners.png';
import iso from '../assets/home/iso.png';
import arrowright from '../assets/home/arrowright.png';

const Partners = () => {
  const [email, setEmail] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
  };

  const certifications = [
    {
      id: 1,
      title: 'ISO/IEC 27000 — Information security management systems'
    },
    {
      id: 2,
      title: 'ISO/IEC 27001 — Information technology – Security Techniques – Information security management'
    },
    {
      id: 3,
      title: 'ISO/IEC 27002 — Code of practice for information security controls'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Partners Section */}
      <section className={styles.partnersSection}>
        <h2>Our Partners</h2>
        <div className={styles.partnersLogo}>
          <img src={partners} alt="Our Partners" />
        </div>
      </section>

      {/* Separator with Reach Out Section */}
      <div className={styles.separatorSection}>
        <section className={styles.reachOutSection}>
          <div className={styles.reachOutContent}>
            <h2>Reach out to our team at CGD, and we'll help<br />you protect your digital future.</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* ISO Certification Section */}
      <section className={styles.isoSection}>
        <div className={styles.isoContent}>
          <div className={styles.isoLeft}>
            <img src={iso} alt="ISO Certification" />
          </div>
          <div className={styles.isoRight}>
            <h2>ISO Certification</h2>
            <p>
              At <span className={styles.highlight}>CYBERWARE Global Defense</span>, we are proud to be ISO 
              certified, demonstrating our commitment to the highest 
              standards of cybersecurity. Our certification reflects 
              our dedication to protecting your data and ensuring 
              robust security practices across all operations. Trust us 
              to safeguard your digital assets with proven excellence.
            </p>
            
            <div className={styles.certificationButtons}>
              {certifications.map((cert) => (
                <button key={cert.id} className={styles.certButton}>
                  {cert.title}
                  <img src={arrowright} alt="" className={styles.arrowIcon} />
                </button>
              ))}
            </div>
            
            <button className={styles.seeAllButton}>
              See All Certificates
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h3>
            Stay informed with the latest threat<br />
            insights delivered directly to your<br />
            inbox through our Newsletter.
          </h3>
        </div>
        <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              placeholder="Your Email Adress"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.joinButton}>
            Join for Free
          </button>
        </form>
      </section>

      {/* Bottom Border */}
      <div className={styles.bottomBorder}></div>
    </div>
  );
};

export default Partners;