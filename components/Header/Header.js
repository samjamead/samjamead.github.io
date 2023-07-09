import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className={styles.header_inner}>
          <Link href="/">
            <span>SM</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
