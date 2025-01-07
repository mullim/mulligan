import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Container } from "../components/Container";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "./globals.css";

export const metadata = {
  title: "Michael Mulligan",
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
      <body>
        <Container>{children}</Container>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
