import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <Link href="/">
            <span>SM</span>
          </Link>
          <p>Other Thing</p>
        </div>
      </div>
    </header>
  );
}
