import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IconiqEng | Full-Stack Web Development Studio",
  description: "Professional full-stack web development studio specializing in React, Node.js, Python, and AWS. We design and develop scalable, high-performance web applications from concept to deployment.",
  keywords: ["web development", "full-stack development", "React", "Node.js", "Python", "AWS", "web design", "UI/UX", "cloud deployment", "API integration"],
  authors: [{ name: "IconiqEng" }],
  creator: "IconiqEng",
  publisher: "IconiqEng",
  icons: {
    icon: [
      { url: '/IconiqEng.png' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/IconiqEng.png',
    apple: '/IconiqEng.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iconiqeng.com",
    title: "IconiqEng | Full-Stack Web Development Studio",
    description: "Professional full-stack web development studio specializing in React, Node.js, Python, and AWS. Building iconic digital experiences.",
    siteName: "IconiqEng",
    images: [
      {
        url: '/IconiqEng.png',
        width: 1200,
        height: 630,
        alt: 'IconiqEng Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IconiqEng | Full-Stack Web Development Studio",
    description: "Professional full-stack web development studio building iconic digital experiences.",
    creator: "@IconiqEng",
    images: ['/IconiqEng.png'],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/IconiqEng.png" type="image/png" />
        <link rel="shortcut icon" href="/IconiqEng.png" />
        <link rel="apple-touch-icon" href="/IconiqEng.png" />
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
