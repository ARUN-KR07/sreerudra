import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  subsets: ["latin"], weight: ["400", "500", "600"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${karla.className}`}>


        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}