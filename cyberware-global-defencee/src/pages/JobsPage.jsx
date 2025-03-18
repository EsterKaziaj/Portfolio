import React from "react";
import "../styles/Jobs.css"
const JobsPage = () => {
  const jobs = [
    {
      id: 1,
      date: "April, 2024",
      titleHighlight: "Cybersecurity",
      titleRegular: "Analyst",
      description:
        "Join our team as a Cybersecurity Analyst, where you will monitor and analyze security systems to identify vulnerabilities and respond to incidents, ensuring our organization's data remains secure.",
    },
    {
      id: 2,
      date: "April, 2024",
      titleHighlight: "Security",
      titleRegular: "Engineer",
      description:
        "We are seeking a Security Engineer to design and implement robust security solutions that protect our infrastructure and data from cyber threats. Your expertise will be crucial in developing innovative security architectures and staying ahead of evolving risks.",
    },
    {
      id: 3,
      date: "5 May, 2024",
      titleHighlight: "Penetration",
      titleRegular: "Tester",
      description:
        "As a Penetration Tester, you will simulate attacks to identify and exploit vulnerabilities, providing critical insights to enhance our security posture.",
    },
    {
      id: 4,
      date: "10 May, 2024",
      titleHighlight: "Incident Response",
      titleRegular: "Specialist",
      description:
        "Join us as an Incident Response Specialist, where you will manage and respond to security incidents, conducting investigations and implementing strategies to mitigate future threats.",
    },
    {
      id: 5,
      date: "1 June, 2024",
      titleHighlight: "Threat Intelligence",
      titleRegular: "Analyst",
      description:
        "We are looking for a Threat Intelligence Analyst to gather and analyze threat data, helping us stay ahead of emerging cyber threats and strengthen our defense strategies.",
    },
    {
      id: 6,
      date: "10 June, 2024",
      titleHighlight: "Information Security",
      titleRegular: "Officer",
      description:
        "We are seeking an Information Security Officer to lead our security initiatives, develop policies, and ensure compliance with regulations while safeguarding our organization's sensitive data and infrastructure.",
    },
  ];

  return (
    <div className="jobs-container">
      <div className="header">
        <h1>
          <span className="highlight">Join Our Team</span> of Cybersecurity
          Innovators
        </h1>
        <p>Protecting the Digital World, One Threat at a Time</p>
      </div>

      <div className="filters">
        <div className="filter-select">
          Job Title
          <span className="arrow">▼</span>
        </div>
        <div className="filter-select">
          Salary Range
          <span className="arrow">▼</span>
        </div>
        <div className="filter-select">
          Posted Date
          <span className="arrow">▼</span>
        </div>
      </div>

      <div className="job-grid">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <div className="job-date">{job.date}</div>
            <div className="job-title">
              <span className="highlight">{job.titleHighlight}</span>{" "}
              {job.titleRegular}
            </div>
            <div className="job-description">{job.description}</div>
            <div className="job-options">
              <div className="job-option">Full-Time</div>
              <div className="job-option">On-Site</div>
              <div className="job-option">Hybrid</div>
            </div>
            <button className="apply-button">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;