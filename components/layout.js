import Footer from "./app/footer";
import Header from "./app/header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="container">{children}</div>;
      </main>
      <Footer />
    </>
  );
}
