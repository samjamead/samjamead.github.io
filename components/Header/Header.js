import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header_inner}>
        <div className={styles.header_left}>
          <Link href="/">
            <span>SM</span>
          </Link>
        </div>
        <div className={`${styles.header_right} monospaced`}>
          <p>v 9.1</p>
        </div>
      </div>
    </header>
  );
}
