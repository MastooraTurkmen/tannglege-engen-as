import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Location, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tannlege Ann-Kristin Engen As",
  description: "Vi holder til midt på St. Hanshaugen i Oslo sentrum.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Location />
        <Footer />
      </body>
    </html>
  );
}
