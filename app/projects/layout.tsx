"use client";

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
    shortcut: "/favicon.png",
  },
};
export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 '>
      {children}
    </div>
  );
}
