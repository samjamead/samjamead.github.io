import Footer from "../components/app/footer";
import Header from "../components/app/header";

import "../styles/main.scss";

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
