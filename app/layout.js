import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "../styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
