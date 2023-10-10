import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { Container } from "../components/Container";
import { ThemeProvider } from "../components/ThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`bg-dracula-foreground dark:bg-dracula-background selection:bg-dracula-yellow dark:selection:bg-dracula-current-line ${inter.className}`}
      >
        <ThemeProvider attribute="class">
          <Container>
            <Navbar />
            {children}
            <Footer />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
