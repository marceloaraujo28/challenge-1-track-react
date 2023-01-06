import styles from "./Header.module.css";
import logo from "../assets/logo.svg";

export function Logo() {
  return (
    <div className={styles.content}>
      <img src={logo} alt="Logo" />
    </div>
  );
}
