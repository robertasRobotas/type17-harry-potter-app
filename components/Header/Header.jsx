import { useState } from "react";
import DesktopNavbar from "../DesktopNavbar/DesktopNavbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import styles from "./header.module.css";

const Header = () => {
  const [isShowMobileNav, setShowMobileNav] = useState(false);

  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>Logo</div>
      <DesktopNavbar />

      <button
        className={styles.burgerButton}
        onClick={() => {
          setShowMobileNav((prevState) => !prevState);
        }}
      >
        <svg viewBox="0 0 100 80" width="20" height="20" fill="white">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </button>

      <MobileNavbar isActive={isShowMobileNav} />
    </header>
  );
};

export default Header;
