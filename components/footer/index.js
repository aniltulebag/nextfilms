import Link from "next/link";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made by&nbsp;
      <Link href="https://www.linkedin.com/in/aniltulebag/" target="_blank">
        Anıl Tülebağ
      </Link>
    </footer>
  );
};

export default Footer;
