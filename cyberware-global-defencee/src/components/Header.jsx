import React from "react";
import styles from "../styles/Home.module.css";
import logo from "../assets/images/logo-transparent.svg";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Left Section: Logo */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Cyberware Global Defence" className={styles.logo} />
      </div>

      {/* Right Section: Navigation */}
      <nav className={styles.nav}>
        <a href="#" className={styles.cta}>Emergency Response Plan</a>
        <div className={styles.dropdown}>
          <span>Support ▼</span>
        </div>
        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;
