import "./globals.css";
import Footer from "./components/Footer/page";
import Header from "./components/Header/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center">

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
