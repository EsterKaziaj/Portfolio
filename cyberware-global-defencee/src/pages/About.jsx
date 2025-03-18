import React, { useState } from "react";
import styles from "../styles/About.module.css";

// Import Images
import aboutbg from "../assets/aboutUs/aboutbg.png";
import locationsBg from "../assets/aboutUs/locationsBg.png";
import pinIcon from "../assets/aboutUs/pin.png";
import furkanImage from "../assets/aboutUs/furkani.png";
import petarImage from "../assets/aboutUs/petari.png";
import lukasImage from "../assets/aboutUs/lucas.png";
import emmaImage from "../assets/aboutUs/emma.png";
import karlImage from "../assets/aboutUs/karl.png";
import emilyImage from "../assets/aboutUs/emilyemily.png";
import hannahImage from "../assets/aboutUs/hannah.png";
import jamesImage from "../assets/aboutUs/james.png";
import isoIsoImage from "../assets/aboutUs/isoiso.png";
import nextIcon from "../assets/home/next.png";
import backIcon from "../assets/home/back.png";
import yesIcon from "../assets/aboutUs/yes.png";
import successStoryIcon from "../assets/aboutUs/successstory.png"

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const founders = [
    { id: 1, name: "Furkan Bajrami", image: furkanImage, description: "Expert in cybersecurity." },
    { id: 2, name: "Petar Ninovski", image: petarImage, description: "Co-Founder & IT Consultant." }
  ];

  const specialists = [
    { id: 1, name: "Lukas Schmidt", image: lukasImage, role: "Cybersecurity Specialist" },
    { id: 2, name: "Emma Brown", image: emmaImage, role: "Cyber Defense Engineer" },
    { id: 3, name: "Karl Müller", image: karlImage, role: "Penetration Tester" }
  ];

  const advisors = [
    { id: 1, name: "Emily Johnson", image: emilyImage, role: "Security Awareness Expert" },
    { id: 2, name: "Hannah Weber", image: hannahImage, role: "Training Coordinator" },
    { id: 3, name: "James Fischer", image: jamesImage, role: "Risk Analyst" }
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleClose = () => {
    setSelectedMember(null);
  };

  return (
    <div className={styles.aboutPage}>
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img src={aboutbg} alt="Background" />
        </div>
        <div className={styles.heroContent}>
          <h1>
            <span className={styles.highlight}>Protecting</span> the digital future through <br />
            innovative cybersecurity <span className={styles.highlight}>solutions</span>
          </h1>
        </div>
      </section>

      {/* Mission & Values */}
<section className={styles.missionValuesSection}>
  <div className={styles.missionValuesContainer}>
    <h2 className={styles.missionValuesTitle}>
      Our <span className={styles.highlight}>Mission & Values</span>
    </h2>
    <div className={styles.missionValues}>
      {[
        {
          title: "Our Mission Statement",
          text: "At Cyberware Global Defense (CGD), our mission is to safeguard businesses by delivering cutting-edge cybersecurity solutions.",
          icon: yesIcon, // FIXED
        },
        {
          title: "Our Story",
          text: "Founded with a vision to revolutionize cybersecurity through AI-driven technologies.",
          icon: yesIcon,
        },
        {
          title: "Our Expertise",
          text: "With a team of world-class cybersecurity specialists, we ensure our clients are protected from digital threats.",
          icon: yesIcon,
        },
        {
          title: "Our Values",
          text: "Integrity, innovation, and commitment to cybersecurity excellence define our core values.",
          icon: yesIcon,
        }
      ].map((item, index) => (
        <div key={index} className={styles.valueCard}>
          <img src={item.icon} alt={`${item.title} Icon`} className={styles.cardIcon} />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Locations Section */}
<section className={styles.locations}>
  <div className={styles.locationsBg}>
    <img src={locationsBg} alt="Locations Background" />
  </div>
  
  <div className={styles.locationsContainer}>
    <h2 className={styles.locationsTitle}>
      Our <span className={styles.highlight}>Locations</span>
    </h2>

    <div className={styles.locationsGrid}>
      {[
        { country: "Germany", address: "Hohenzollernring No. 72\nKöln\n50672" },
        { country: "North Macedonia", address: "11th October No. 25\nSkopje\n1000" },
        { country: "Albania", address: "Rruga Myslym Shyri No. 37\nTirana\n1001" },
        { country: "Turkey", address: "Istiklal Caddesi No. 45\nIstanbul\n34430" }
      ].map((loc, index) => (
        <div key={index} className={styles.locationCard}>
          <img src={pinIcon} alt="Pin Icon" className={styles.pinIcon} />
          <h3>{loc.country}</h3>
          <p>{loc.address}</p>
          <div className={styles.underline}></div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Founders Section */}
<section className={styles.leadership}>
  <h2 className={styles.sectionTitle}>Our <span className={styles.highlight}>Founders</span></h2>
  <p className={styles.sectionSubtitle}>
    Here’s a glimpse into the expertise driving CGD’s security solutions:
  </p>

  <div className={styles.teamGrid}>
    {founders.map((person) => (
      <div key={person.id} className={styles.cardWrapper}>
        <div className={styles.memberCard}>
          <div className={styles.imageContainer}>
            <img src={person.image} alt={person.name} />
          </div>
          <div className={styles.cardContent}>
            <h3>{person.name}</h3>
            <p>{person.description}</p>
          </div>
        </div>
        <button className={styles.nextButton} onClick={() => handleMemberClick(person)}>
          <img src={nextIcon} alt="Next" />
        </button>
      </div>
    ))}
  </div>

  {/* Popup for Founder Details */}
  {selectedMember && (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        {/* Left Side - Image and Name */}
        <div className={styles.popupLeft}>
          <img src={selectedMember.image} alt={selectedMember.name} />
          <h3>{selectedMember.name}</h3>
          <p>{selectedMember.role}</p>

          {/* Back Button */}
          <button className={styles.backButton} onClick={handleClose}>
            <div className={styles.backButtonCircle}>
              <img src={backIcon} alt="Back" />
            </div>
          </button>
        </div>

        {/* Right Side - Bio Content */}
        <div className={styles.popupRight}>
          <h4>Bio</h4>
          <p>{selectedMember.fullBio}</p>
        </div>
      </div>
    </div>
  )}
</section>


      {/* Cybersecurity Specialists Section */}
<section className={styles.specialistsSection}>
  <h2 className={styles.sectionTitle}>Cybersecurity <span className={styles.highlight}>Specialists</span></h2>
  <p className={styles.sectionSubtitle}>Meet our highly skilled security specialists.</p>

  <div className={styles.specialistsGrid}>
    {specialists.map((person) => (
      <div key={person.id} className={styles.cardWrapper}>
        <div className={styles.memberCard}>
          <div className={styles.imageContainer}>
            <img src={person.image} alt={person.name} />
          </div>
          <div className={styles.cardContent}>
            <h3>{person.name}</h3>
            <p>{person.role}</p>
          </div>
        </div>
        <button className={styles.nextButton} onClick={() => handleMemberClick(person)}>
          <img src={nextIcon} alt="Next" />
        </button>
      </div>
    ))}
  </div>

  <a href="#" className={styles.teamLink}>Meet the Rest of the Team</a>
</section>

{/* Security Awareness Advisors Section */}
<section className={styles.advisorsSection}>
  <h2 className={styles.sectionTitle}>Security Awareness <span className={styles.highlight}>Advisors</span></h2>
  <p className={styles.sectionSubtitle}>Our advisors ensure security awareness.</p>

  <div className={styles.advisorsGrid}>
    {advisors.map((person) => (
      <div key={person.id} className={styles.cardWrapper}>
        <div className={styles.memberCard}>
          <div className={styles.imageContainer}>
            <img src={person.image} alt={person.name} />
          </div>
          <div className={styles.cardContent}>
            <h3>{person.name}</h3>
            <p>{person.role}</p>
          </div>
        </div>
        <button className={styles.nextButton} onClick={() => handleMemberClick(person)}>
          <img src={nextIcon} alt="Next" />
        </button>
      </div>
    ))}
  </div>

  <a href="#" className={styles.teamLink}>Meet the Rest of the Team</a>
</section>


     {/* Certifications Section */}
<section className={styles.certifications}>
  <h2 className={styles.sectionTitle}>Our <span className={styles.highlight}>Certifications</span></h2>

  <div className={styles.certificationGrid}>
    {Array(6).fill(null).map((_, index) => (
      <div key={index} className={styles.certificationCard}>
        <img src={isoIsoImage} alt="ISO Certification" />
        <p>Quality Management (DIN EN ISO 9001)</p>
        <span>Ensures consistent quality in our processes, enhancing customer satisfaction.</span>
        <button>See More</button>
      </div>
    ))}
  </div>
</section>
{/* Testimonials Section */}
<section className={styles.testimonials}>
  <h2 className={styles.sectionTitle}>Discover why our clients continue to choose us.</h2>

  {/** Testimonials Data Inside the Section **/}
  {(() => {
    const testimonials = [
      {
        id: 1,
        company: "A small rural hospital",
        challenge: "Difficulty in managing patient records and scheduling appointments due to outdated systems",
        solution: "Implemented an Electronic Health Record (EHR) system integrated with telemedicine capabilities",
        outcome: "Improved patient care, reduced medical errors, increased patient satisfaction, and expanded access to healthcare services in remote areas.",
        icon: successStoryIcon
      },
      {
        id: 2,
        company: "A national finance company",
        challenge: "Growing concerns over digital fraud and phishing attacks",
        solution: "Adopted multi-factor authentication and AI-powered threat detection systems",
        outcome: "Decreased fraud rates by 70%, improved data protection, and increased client trust",
        icon: successStoryIcon
      },
      {
        id: 3,
        company: "An international logistics firm",
        challenge: "Supply chain disruptions caused by ransomware attacks",
        solution: "Implemented a zero-trust security model and enhanced endpoint security",
        outcome: "Reduced cyberattack attempts, improved operational continuity, and strengthened overall cybersecurity framework",
        icon: successStoryIcon
      }
    ];

    const [startIndex, setStartIndex] = React.useState(0);

    const handleNextTestimonial = () => {
      setStartIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const handlePrevTestimonial = () => {
      setStartIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const getVisibleTestimonials = () => {
      const result = [];
      for (let i = 0; i < 3; i++) {
        const index = (startIndex + i) % testimonials.length;
        result.push(testimonials[index]);
      }
      return result;
    };

    return (
      <>
        <div className={styles.testimonialGrid}>
          {getVisibleTestimonials().map((testimonial, index) => (
            <div key={index} className={styles.clientCard}>
              <img src={testimonial.icon} alt="Success Story" className={styles.successIcon} />
              <div className={styles.clientText}>
                <p><strong>Company:</strong> {testimonial.company}</p>
                <p><strong>Challenge:</strong> {testimonial.challenge}</p>
                <p><strong>Solution:</strong> {testimonial.solution}</p>
                <p><strong>Outcome:</strong> {testimonial.outcome}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation and Progress Bar */}
        <div className={styles.navigation}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progress} 
              style={{ width: `${((startIndex + 1) / testimonials.length) * 100}%` }}
            />
          </div>
          <div className={styles.arrows}>
            <button onClick={handlePrevTestimonial} className={styles.arrowButton}>
              <img src={backIcon} alt="Previous" />
            </button>
            <button onClick={handleNextTestimonial} className={styles.arrowButton}>
              <img src={nextIcon} alt="Next" />
            </button>
          </div>
        </div>
      </>
    );
  })()}
</section>


   

    </div>
  );
};

export default AboutUs;

