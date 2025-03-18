import React, { useState } from 'react';
import styles from '../styles/LeadershipTeam.module.css';
import furkan from '../assets/home/furkan.png';
import peter from '../assets/home/petar.png';
import lena from '../assets/home/lena.png';
import nextIcon from '../assets/home/next.png';
import backIcon from '../assets/home/back.png';

const LeadershipTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Furkan Bajrami',
      image: furkan,
      description: 'Lorem ipsum dolor sit amet consectetur. Arcu nullam habitasse tortor id.',
      bio: `Furkan Bajrami is a cyber security expert with over a decade of experience in safeguarding organizations from digital threats. He holds a Master's degree in Cyber Security from Stanford University and certifications such as Certified Information Systems Security Professional (CISSP) and Certified Ethical Hacker (CEH). John has collaborated with Fortune 500 companies to develop robust security frameworks and incident response strategies, specializing in network security and risk management.

      Passionate about education, Furkan frequently speaks at industry conferences and conducts workshops to raise awareness about cyber threats and best practices for online safety. As an active member of several professional organizations, he contributes to research initiatives aimed at advancing the field, believing that effective cyber defense relies on empowering individuals and organizations to take proactive measures against potential threats.`
    },
    {
      id: 2,
      name: 'Petar Ninovski',
      image: peter,
      role: 'Co-Founder & CXX',
      description: 'Petar has over 10 years of experience in cybersecurity and IT consulting.',
      bio: 'Detailed bio for Petar Ninovski...'
    },
    {
      id: 3,
      name: 'Lena Müller',
      image: lena,
      role: 'Chief Technology Officer (CTO)',
      description: 'With over 12 year of experience in cybersecurity and technology development.',
      bio: 'Detailed bio for Lena Müller...'
    }
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleClose = () => {
    setSelectedMember(null);
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Our leadership team</h2>
        <p>
          Meet the leaders behind CGD's mission to protect businesses from evolving cyber threats. 
          With deep expertise in cybersecurity and IT consulting, our leadership team drives innovation 
          and ensures the highest standards of security for our clients. Scroll down to see the faces 
          behind our success.
        </p>
      </div>

      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.cardWrapper}>
            <div className={styles.memberCard}>
              <div className={styles.imageContainer}>
                <img src={member.image} alt="" />
              </div>
              <div className={styles.cardContent}>
                <h3>{member.name}</h3>
                {member.role && <p className={styles.role}>{member.role}</p>}
                <p className={styles.description}>{member.description}</p>
              </div>
            </div>
            <button 
              className={styles.nextButton}
              onClick={() => handleMemberClick(member)}
              aria-label="View more details"
            >
              <img src={nextIcon} alt="" />
            </button>
          </div>
        ))}
      </div>

      {selectedMember && (
  <div className={styles.popup}>
    <div className={styles.popupContent}>
      <div className={styles.popupLeft}>
        <img src={selectedMember.image} alt="" />
        <h3>{selectedMember.name}</h3>
        <p>{selectedMember.description}</p>
        <button 
  className={styles.backButton}
  onClick={handleClose}
  aria-label="Close details"
>
  <div className={styles.backButtonCircle}>
    <img src={backIcon} alt="" />
  </div>
</button>
      </div>
      <div className={styles.popupRight}>
        <h4>Bio</h4>
        <p>{selectedMember.bio}</p>
      </div>
    </div>
  </div>
)}

      <div className={styles.meetRestTeam}>
        <span>Meet the Rest of the Team</span>
      </div>
    </section>
  );
};

export default LeadershipTeam;