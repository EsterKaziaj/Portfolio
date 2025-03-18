import React, { useState, useEffect } from 'react';
import '../styles/Newsletter.css';

const Newsletter = () => {
  // News item data
  const footerNews = [
    {
      id: 1,
      icon: "orange-square",
      date: "October 25, 2024",
      title: "Iranian Hackers Target Critical Infrastructure",
      heading: "Iranian Hackers Breaching Critical Infrastructure for Credential Theft",
      content: "Recent reports reveal that Iranian hackers are infiltrating critical infrastructure organizations to collect credentials and network data. This information is being sold on cybercriminal forums, enabling further cyberattacks by other threat actors."
    },
    {
      id: 2,
      icon: "orange-square",
      date: "October 28, 2024",
      title: "New Vulnerabilities in Oracle Software",
      heading: "CISA Warns of Exploited Oracle Vulnerabilities",
      content: "The Cybersecurity and Infrastructure Security Agency (CISA) has issued a warning about two Oracle vulnerabilities that are currently being exploited in the wild. Organizations are urged to apply patches immediately to mitigate risks."
    },
    {
      id: 3,
      icon: "orange-square",
      date: "October 20, 2024",
      title: "Arrest of Notorious Hacker in Brazil",
      heading: "Arrest of USDoD Hacker Linked to Major Data Breaches",
      content: "Brazilian authorities have arrested a notorious hacker known as USDoD, linked to significant breaches involving National Public Data and InfraGard. This operation marks a crucial step in combating cybercrime on an international scale."
    },
    {
      id: 4,
      icon: "orange-square",
      date: "October 22, 2024",
      title: "Critical Firmware Update Released",
      heading: "Emergency Firmware Update for Network Devices",
      content: "Manufacturers have released an emergency firmware update for widely-used network devices after discovering a vulnerability that could allow remote code execution. Users are urged to update immediately to protect their networks."
    },
    {
      id: 5,
      icon: "orange-square",
      date: "October 26, 2024",
      title: "Phishing Campaign Targets Remote Workers",
      heading: "Sophisticated Phishing Campaign Targeting Remote Workers",
      content: "Security researchers have identified a new phishing campaign specifically targeting remote workers with fake collaboration tool notifications. The campaign attempts to steal credentials for corporate VPN access."
    },
    {
      id: 6,
      icon: "orange-square",
      date: "October 27, 2024",
      title: "Data Breach at Major Retailer",
      heading: "Major Retailer Confirms Data Breach Affecting Millions",
      content: "A major retail chain has confirmed a data breach that may have exposed payment information of millions of customers. The company is working with law enforcement and offering credit monitoring to affected individuals."
    }
  ];

  // State to track which items are visible
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  
  // Calculate total slides and progress
  const totalItems = footerNews.length;
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(totalItems / itemsPerSlide);
  
  // Update progress bar based on current index
  useEffect(() => {
    const progressPercentage = ((currentIndex + 1) / totalSlides) * 100;
    setProgressWidth(progressPercentage);
  }, [currentIndex, totalSlides]);

  // Handle navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : totalSlides - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < totalSlides - 1 ? prevIndex + 1 : 0
    );
  };

  // Calculate which items to display
  const getVisibleItems = () => {
    const startIndex = currentIndex * itemsPerSlide;
    return footerNews.slice(startIndex, startIndex + itemsPerSlide);
  };

  // For the related news sidebar - keep it static
  const relatedNews = footerNews.slice(0, 3);

  return (
    <div className="cybersecurity-blog">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-content">
          <div className="small-heading">Phishing Attacks and Prevention Strategies.</div>
          <h1 className="main-heading">The Evolving Landscape of Phishing Attacks: What You Need to Know</h1>
          <div className="post-meta">
            <span className="date">Posted: October 20, 2024</span>
            <span className="author">By: Cybersecurity Insights Team</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="content-container">
        {/* Left sidebar */}
        <div className="sidebar">
          <h3 className="sidebar-heading">Related News</h3>
          <div className="news-items">
            {relatedNews.map(item => (
              <div className="news-item" key={item.id}>
                <div className="news-image">
                  <div className={item.icon}></div>
                </div>
                <div className="news-date">{item.date}</div>
                <h4 className="news-title">{item.heading}</h4>
                <p className="news-content">{item.content}</p>
                <div className="read-more-btn">Read More</div>
              </div>
            ))}
          </div>

          <div className="contributor-section">
            <h3 className="contributor-heading">Want to become a Contributor</h3>
            <div className="contributor-form">
              <input type="text" placeholder="Your Email" className="form-input" />
              <textarea placeholder="Tell us Something About Yourself" className="form-textarea"></textarea>
              <button className="submit-btn">Send</button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="main-content">
          <div className="content-section">
            <h2 className="section-heading">Summary</h2>
            <p>
              Phishing attacks have become increasingly sophisticated, leveraging social engineering tactics and
              advanced technology to deceive individuals and organizations. This report examines the latest
              trends in phishing, highlights notable case studies, and provides actionable prevention strategies to
              safeguard your digital assets.
            </p>
          </div>

          <div className="content-section">
            <h2 className="section-heading">Introduction</h2>
            <p>
              Phishing attacks have become increasingly sophisticated, leveraging social engineering tactics and
              advanced technology to deceive individuals and organizations. This report examines the latest trends
              in phishing, highlights notable case studies, and provides actionable prevention strategies to
              safeguard your digital assets.
            </p>
          </div>

          <div className="content-section">
            <h2 className="section-heading">Key Trends in Phishing Attacks</h2>
            <div className="trend-item">
              <h3 className="trend-title">1. Spear Phishing Campaigns</h3>
              <p>
                Unlike traditional phishing, spear phishing targets specific individuals or organizations. Attackers
                often gather information from social media or company websites to craft personalized messages that
                appear legitimate.
              </p>
            </div>
            <div className="trend-item">
              <h3 className="trend-title">2. Use of AI and Automation</h3>
              <p>
                Cybercriminals are increasingly utilizing AI tools to automate phishing campaigns, making them more
                efficient and harder to detect. These tools can generate convincing emails that mimic trusted
                sources.
              </p>
            </div>
            <div className="trend-item">
              <h3 className="trend-title">3. Multi-Vector Attacks</h3>
              <p>
                Phishing attacks are no longer limited to email. Attackers are now using SMS (smishing), social media
                platforms, and even voice calls (vishing) to reach potential victims through multiple channels.
              </p>
            </div>
          </div>

          <div className="content-section">
            <h2 className="section-heading">Notable Case Studies</h2>
            <div className="case-study">
              <h3 className="case-title">Case Study 1: Targeting Financial Institutions</h3>
              <p>
                In early 2024, a major bank fell victim to a sophisticated spear phishing attack that compromised
                customer data. Attackers impersonated bank representatives and sent emails requesting sensitive
                information, leading to significant financial losses.
              </p>
            </div>
            <div className="case-study">
              <h3 className="case-title">Case Study 2: Ransomware via Phishing Links</h3>
              <p>
                A healthcare organization experienced a ransomware attack after employees clicked on a malicious
                link in an email disguised as a routine update. The attack encrypted critical patient data, causing
                operational disruptions and reputational damage.
              </p>
            </div>
          </div>

          <div className="content-section">
            <h2 className="section-heading">Prevention Strategies</h2>
            <p className="strategy-intro">
              To combat the rising threat of phishing attacks, organizations should implement the following
              strategies:
            </p>
            <div className="strategy-item">
              <h3 className="strategy-title">1. Employee Training Programs</h3>
              <p>
                Regular training sessions on recognizing phishing attempts can empower employees to identify
                suspicious emails and links. Incorporating simulated phishing exercises can reinforce learning.
              </p>
            </div>
            <div className="strategy-item">
              <h3 className="strategy-title">2. Multi-Factor Authentication (MFA)</h3>
              <p>
                Implementing MFA adds an extra layer of security, making it more difficult for attackers to gain
                unauthorized access even if credentials are compromised.
              </p>
            </div>
            <div className="strategy-item">
              <h3 className="strategy-title">3. Email Filtering Solutions</h3>
              <p>
                Investing in advanced email filtering solutions can help detect and block phishing emails before they
                reach employees' inboxes.
              </p>
            </div>
          </div>

          <div className="content-section">
            <h2 className="section-heading">Conclusion</h2>
            <p>
              As phishing attacks evolve in complexity and frequency, organizations must
              remain vigilant and proactive in their defense strategies. By understanding
              the latest trends and implementing robust prevention measures,
              businesses can significantly reduce their risk of falling victim to these
              deceptive tactics.
            </p>
          </div>
          <div className="content-divider"></div>
        </div>
      </div>

      {/* Footer News Section with Carousel */}
      <div className="footer-news">
        <div className="footer-news-container" style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          transition: 'transform 0.5s ease-in-out'
        }}>
          {getVisibleItems().map(item => (
            <div className="footer-news-item" key={item.id}>
              <div className={item.icon}></div>
              <div className="news-date">{item.date}</div>
              <h4 className="news-title">{item.heading}</h4>
              <p className="news-content">{item.content}</p>
              <div className="read-more-btn-footer">Read More</div>
            </div>
          ))}
        </div>
        <div className="pagination-controls">
          <div className="pagination-bar">
            <div className="pagination-progress" style={{ width: `${progressWidth}%` }}></div>
          </div>
          <div className="pagination-buttons">
            <button className="prev-btn" onClick={handlePrev}>❮</button>
            <button className="next-btn" onClick={handleNext}>❯</button>
          </div>
        </div>
      </div>

      <div className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2 className="newsletter-heading">
              <span className="orange-text">Still haven't subscribed to our Newsletter.</span> Sign Up today and stay informed about online security and all the ways you can protect yourself or your business.
            </h2>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Your Email Address" className="newsletter-input" />
            <button className="newsletter-btn">Join for Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;