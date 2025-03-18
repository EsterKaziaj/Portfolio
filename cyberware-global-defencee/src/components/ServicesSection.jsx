import React from "react";
import styles from "../styles/ServicesSection.module.css";
import service1 from "../assets/images/services/gray1.svg";
import service2 from "../assets/images/services/gray2.svg";
import service3 from "../assets/images/services/gray3.svg";
import service4 from "../assets/images/services/gray4.svg";
import service5 from "../assets/images/services/gray5.svg";
import service6 from "../assets/images/services/gray6.svg";

const servicesData = [
  {
    img: service1,
    title: "SIEM Threat Detection & Response",
    text: "Our 24/7 monitoring services use AI-powered tools to detect and neutralize threats before they can harm your business",
    btn: "See More",
    link: "#",
  },
  {
    img: service2,
    title: "Penetration Testing",
    text: "Identify and eliminate vulnerabilities in your network with our comprehensive penetration testing services",
    btn: "See More",
    link: "#",
  },
  {
    img: service3,
    title: "Incident Response",
    text: "In the event of a breach, our expert team reacts swiftly to minimize damage and restore your systems quickly",
    btn: "See More",
    link: "#",
  },
  {
    img: service4,
    title: "Network Security",
    text: "We offer end-to-end network security solutions, optimizing your infrastructure while securing it against unauthorized access",
    btn: "See More",
    link: "#",
  },
  {
    img: service5,
    title: "Security Awareness Training",
    text: "Empower your employees to recognize and respond to potential cyber threats. Our comprehensive security awareness programs equip your workforce with the knowledge they need to prevent attacks",
    btn: "See More",
    link: "#",
  },
  {
    img: service6,
    title: "Vulnerability Management",
    text: "Identify, assess, and fix system weaknesses to reduce security risks and enhance resilience.",
    btn: "See More",
    link: "#",
  },
];

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Services</h2>
      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <img src={service.img} alt={service.title} className={styles.serviceIcon} />
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceText}>{service.text}</p>
            <a href={service.link} className={styles.serviceButton}>
              {service.btn}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
