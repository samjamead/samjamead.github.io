import Footer from "./app/footer";

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
      <Footer />
    </>
  );
}
