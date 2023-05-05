import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

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
        <article className="container mx-auto pt-20 pb-32 max-w-2xl">
          <Navbar />
          {children}
        </article>
      </body>
    </html>
  );
}
