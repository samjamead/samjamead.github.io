export default function Layout({ children }) {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-inner">
            <p>Top</p>
          </div>
        </div>
      </header>
      <main>
        <div className="container">{children}</div>;
      </main>
      <footer>
        <div className="container">
          <div className="footer-inner">
            <p>Bottom</p>
          </div>
        </div>
      </footer>
    </>
  );
}
