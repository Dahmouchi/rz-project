import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "./_components/navBar/page";
import { Toaster } from 'sonner'


const figtree = Figtree({
  variable: "--font-figtree-sans",
  subsets:["latin"],
  weight:["300","400","500"]

})


export const metadata: Metadata = {
  title: "RZ Hospitality | Hotel & Restaurant Consulting Services UK",
  description: "Expert hospitality consulting for hotels, restaurants, bars, and cafes. Maximize revenue, streamline operations, and enhance guest satisfaction with strategic management solutions.",
  keywords: [
    "hospitality consulting",
    "hotel management",
    "restaurant consulting",
    "bar management",
    "cafe consulting",
    "revenue management",
    "hospitality operations",
    "UK hospitality services",
    "menu engineering",
    "staff training hospitality"
  ],
  authors: [{ name: "RZ Hospitality" }],
  openGraph: {
    title: "RZ Hospitality | Expert Hotel & Restaurant Consulting",
    description: "Empowering hospitality success through strategic revenue management, operational excellence, and unforgettable guest experiences.",
    url: "https://rzhospitality.co.uk",
    siteName: "RZ Hospitality",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "RZ Hospitality Consulting Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "RZ Hospitality | Hotel & Restaurant Consulting",
    description: "Expert consulting for hotels, restaurants, bars & cafes. Maximize revenue and enhance guest satisfaction.",
    images: ["/images/logo.png"], // Add your Twitter card image
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
  verification: {
    // google: "your-google-verification-code", // Add when you set up Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
           <div className="dark:bg-dark overflow-hidden">
           <NavBar />
           {children}
           </div>
          </ThemeProvider>
          <Toaster richColors  />

      </body>
    </html>
  );
}
