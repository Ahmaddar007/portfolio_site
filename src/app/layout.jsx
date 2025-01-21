import "./globals.css";
import Header from "./components/Header/page";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./components/Footer/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        
      </head>
      <body className="bg-blue-50">
        <NextUIProvider>
          <div className="flex flex-col items-center">
            <Header />
            {children}
            <Footer />
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
