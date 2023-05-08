import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <Link href="/">sjam</Link>
        </div>
      </div>
    </header>
  );
}
