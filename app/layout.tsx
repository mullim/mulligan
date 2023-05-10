import "./globals.css";

import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mike Mulligan",
  description: "Software Engineer @ Shopify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <div className="container flex-row px-10 md:px-0 md:mx-auto pt-20 max-w-2xl">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
