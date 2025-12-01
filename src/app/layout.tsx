import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus AI | The Future of Saudi Workforce",
  description: "Nexus is the operating system for the next generation of Saudi talent. We connect companies with vetted, AI-augmented student teams for structured 8-week consulting missions.",
  keywords: "Saudi Arabia, Vision 2030, AI consulting, student talent, workforce, hiring, recruitment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
