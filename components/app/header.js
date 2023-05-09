import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="6" x2="6" y1="3" y2="15"></line>
              <circle cx="18" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M18 9a9 9 0 0 1-9 9"></path>
            </svg>
            <span>sjam.studio</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
