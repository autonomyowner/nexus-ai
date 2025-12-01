import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#006C35",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nexus-ai.vercel.app"),
  title: "Nexus AI | The Future of Saudi Workforce",
  description: "Nexus is the operating system for the next generation of Saudi talent. We connect companies with vetted, AI-augmented student teams for structured 8-week consulting missions aligned with Vision 2030.",
  keywords: "Saudi Arabia, Vision 2030, AI consulting, student talent, workforce, hiring, recruitment, KFUPM, KSU, Saudi universities",
  authors: [{ name: "Nexus AI" }],
  creator: "Nexus AI",
  publisher: "Nexus AI",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexus-ai.vercel.app",
    siteName: "Nexus AI",
    title: "Nexus AI | The Future of Saudi Workforce",
    description: "Connect with vetted, AI-augmented student teams for structured 8-week consulting missions. De-risk hiring. Accelerate innovation.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Nexus AI - The Future of Saudi Workforce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus AI | The Future of Saudi Workforce",
    description: "Connect with vetted, AI-augmented student teams for structured 8-week consulting missions.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
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
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
