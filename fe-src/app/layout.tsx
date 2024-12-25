import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgressBar from "../components/ProgressBar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "William Wibowo Ciptono Portfolio",
  description: "Data Engineer - Software Engineer open for Collaboration and Opportunities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>William Wibowo - Homepage</title>
      </head>
      <body className={inter.className+" relative"}>
        <ProgressBar>
          <Navbar/>
          {children}
          <Footer/>
        </ProgressBar>
      </body>
    </html>
  );
}
