// "use client";

import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Rarrikate",
    template: "%s | Rarrikate",
  },
  description: "Преподаватель немецкого",
  openGraph: {
    title: "Rarrikate",
    description: "Преподаватель немецкого",
    url: "https://Rarrikate",
    siteName: "Rarrikate",
    images: [
      {
        url: "https://Rarrikate/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut:
      "https://avatars.mds.yandex.net/i?id=efb685e8f6ca987fd6c25746062b3d399f7045bf-9065925-images-thumbs&n=13",
    // shortcut: "/R-letter.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={[inter.variable, calSans.variable].join(" ")}>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
