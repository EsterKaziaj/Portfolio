import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import arrowOrange from "../assets/icons/arrow-down-orange.svg";
import ServicesDropdown from "./ServicesDropdown";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate(); // React Router hook for navigation

  const handleServicesClick = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(`.${styles.dropdown}`) && !e.target.closest(`.${styles.dropdownContainer}`)) {
      setIsServicesOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem} onClick={() => navigate("/")}>Home</li>
        <li className={styles.navItem} onClick={() => navigate("/about")}>About Us</li>

        {/* Services Dropdown */}
        <li
          className={`${styles.navItem} ${styles.dropdown} ${isServicesOpen ? styles.active : ""}`}
          onClick={handleServicesClick}
        >
          Services
          <img
            src={arrowOrange}
            alt="Arrow"
            className={`${styles.arrow} ${isServicesOpen ? styles.rotated : ""}`}
          />
        </li>

        <li className={styles.navItem} onClick={() => navigate("/industries")}>
          Industries
        </li>

        <li className={styles.navItem} onClick={() => navigate("/partnership")}>
          Partnerships
        </li>

        <li className={styles.navItem} onClick={() => navigate("/jobs")}>
          Jobs
        </li>

        <li className={styles.navItem} onClick={() => navigate("/newsletter")}>
          Newsletter
        </li>

        <li className={`${styles.navItem} ${styles.contactButton}`} onClick={() => navigate("/contact")}>
          Contact
        </li>
      </ul>

      {/* Services Dropdown */}
      {isServicesOpen && <ServicesDropdown />}
    </nav>
  );
};

export default Navbar;
