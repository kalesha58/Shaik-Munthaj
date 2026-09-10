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

export const metadata: Metadata = {
  metadataBase: new URL("https://munthaj.com"),
  title: "Shaik Munthaj | Data Analyst & Machine Learning Specialist",
  description:
    "Data Analyst and Machine Learning Specialist pursuing MSc in Applied Modelling & Quantitative Methods at Trent University. Expertise in predictive modeling, deep learning, and full-stack development.",
  icons: {
    icon: "/images/munthaj.jpeg",
    shortcut: "/images/munthaj.jpeg",
    apple: "/images/munthaj.jpeg",
  },
  openGraph: {
    title: "Shaik Munthaj | Data Analyst & Machine Learning Specialist",
    description:
      "Turning data into meaningful insights. MSc candidate specializing in predictive modeling, deep learning, and scalable data pipelines.",
    url: "https://munthaj.com",
    siteName: "Shaik Munthaj Portfolio",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/images/munthaj.jpeg",
        width: 1200,
        height: 630,
        alt: "Shaik Munthaj – Data Analyst & Machine Learning Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaik Munthaj | Data Analyst & Machine Learning Specialist",
    description:
      "Data Analyst and Machine Learning Specialist pursuing MSc in Applied Modelling & Quantitative Methods at Trent University.",
    images: ["/images/munthaj.jpeg"],
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
