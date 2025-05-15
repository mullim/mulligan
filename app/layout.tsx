import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Container } from "../components/Container";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Metadata } from "next";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mikemulligan.net"),
  title: {
    default: "Mike Mulligan | Senior Software Engineer",
    template: "%s | Mike Mulligan",
  },
  description:
    "Senior Software Engineer specializing in web applications and scalable systems.",
  openGraph: {
    title: "Mike Mulligan",
    description:
      "Senior Software Engineer specializing in web applications and scalable systems.",
    url: "https://mikemulligan.net",
    siteName: "Mike Mulligan",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Mulligan",
    description:
      "Senior Software Engineer specializing in web applications and scalable systems.",
    creator: "@mulligandev",
  },
  alternates: {
    canonical: "https://mikemulligan.net",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <ThemeProvider>
          <Navbar />
          <Container>{children}</Container>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
