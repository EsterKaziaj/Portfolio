import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Home.module.css";
import languageLogo from "../assets/icons/language.svg";
import arrowBlack from "../assets/icons/arrow-down-black.svg";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("DE");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.switcher} ref={dropdownRef}>
      <div className={styles.dropdown}>
        <button className={styles.button} onClick={toggleMenu}>
          <div className={styles.icon}>
            <img src={languageLogo} alt="language-switcher" />
          </div>
          <span className={styles.languageText}>{language} </span>
          <span className={styles.arrow}>
            <img src={arrowBlack} alt="arrow-black" />
          </span>
        </button>
        {isMenuOpen && (
          <ul className={styles.menu}>
            <li onClick={() => handleLanguageChange("DE")}>DE</li>
            <li onClick={() => handleLanguageChange("EN")}>EN</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
