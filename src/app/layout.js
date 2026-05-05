import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Karla, Playfair_Display } from "next/font/google";
import { Toaster } from "react-hot-toast"; // 👈 ADD THIS
import "./globals.css";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-karla",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${karla.variable} ${playfair.variable}`}>

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* 🔥 TOAST CONTAINER */}

        <Toaster
          position="top-right"
          gutter={12}
          toastOptions={{
            duration: 3500,
            style: {
              background: "linear-gradient(135deg, #004e22, #0B5D3B)",
              color: "#fff",
              borderRadius: "20px",
              padding: "14px 18px",
              fontSize: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            },
            success: {
              iconTheme: {
                secondary: "#fff",
              },
            },
            error: {
              style: {
                background: " #e30c0cff",
              },
            },
          }}
        />

      </body>
    </html>
  );
}