import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prism - The AI-Native Productivity Layer for macOS",
  description: "Your computer, amplified. The AI-native productivity layer for macOS that knows your files, learns your workflows, and executes with intention. Join the waitlist.",
  keywords: [
    "AI productivity",
    "macOS automation",
    "AI assistant",
    "productivity software",
    "macOS app",
    "AI native",
    "on-device AI",
    "contextual memory",
    "autoscripter",
    "natural language automation"
  ],
  authors: [{ name: "Prism" }],
  creator: "Prism",
  publisher: "Prism",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://prism.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Prism - The AI-Native Productivity Layer for macOS",
    description: "Your computer, amplified. The AI-native productivity layer for macOS that knows your files, learns your workflows, and executes with intention.",
    url: "https://prism.ai",
    siteName: "Prism",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prism - The AI-Native Productivity Layer for macOS",
    description: "Your computer, amplified. The AI-native productivity layer for macOS that knows your files, learns your workflows, and executes with intention.",
    creator: "@prism",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

