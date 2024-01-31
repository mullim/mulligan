import "./globals.css";

import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { Container } from "../components/Container";
import { ThemeProvider } from "../components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mike Mulligan",
  description: "Senior Software Engineer @ Flexport",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body
        className={`h-full bg-dracula-foreground dark:bg-dracula-background selection:bg-dracula-yellow dark:selection:bg-dracula-current-line ${inter.className}`}
      >
        <ThemeProvider attribute="class">
          <Container>
            <Navbar />
            {children}
            {/* <Footer /> */}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
