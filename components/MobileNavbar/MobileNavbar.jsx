import styles from "./mobileNavbar.module.css";

const MobileNavbar = ({ isActive }) => {
  return (
    <nav className={`${styles.mobileNav} ${isActive && styles.active}`}>
      <ul>
        <li>
          <a href="#">xxxxxx</a>
        </li>
        <li>
          <a href="#">xxxxxx</a>
        </li>
        <li>
          <a href="#">xxxxxx</a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
