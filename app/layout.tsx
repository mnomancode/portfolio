import "../app/globals.css";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { calSans, inter } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "nomandev.com",
    template: "%s | nomandev.com",
  },
  description: "Mobile App Developer Expert app developer Ios and Android",
  openGraph: {
    title: "nomandev.com",
    description:
      "Mobile App Developer Expert app developer Ios and Android",
    url: "https://nomandev.com",
    siteName: "nomandev.com",
    images: [
      {
        url: "https://nomandev.com/og.png",
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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
