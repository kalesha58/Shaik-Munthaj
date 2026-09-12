import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shaik-munthaj.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shaik Munthaj | Data Analyst & Machine Learning Specialist",
  description:
    "Data Analyst and Machine Learning Specialist with MSc in Applied Modelling & Quantitative Methods from Trent University. Expertise in predictive modeling, deep learning, and full-stack development.",
  icons: {
    icon: "/images/munthaj-hero.png",
    shortcut: "/images/munthaj-hero.png",
    apple: "/images/munthaj-hero.png",
  },
  openGraph: {
    title: "Shaik Munthaj | Data Analyst & Machine Learning Specialist",
    description:
      "Turning data into meaningful insights. Master of Science in Big Data Analytics, specializing in predictive modeling, deep learning, and scalable data pipelines.",
    url: siteUrl,
    siteName: "Shaik Munthaj Portfolio",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/images/munthaj-hero.png",
        secureUrl: `${siteUrl}/images/munthaj-hero.png`,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Shaik Munthaj – Data Analyst & Machine Learning Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaik Munthaj | Data Analyst & Machine Learning Specialist",
    description:
      "Data Analyst and Machine Learning Specialist with MSc in Applied Modelling & Quantitative Methods from Trent University.",
    images: [`${siteUrl}/images/munthaj-hero.png`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
