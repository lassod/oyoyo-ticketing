import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { Toaster } from "@/components/ui/toaster";
import "react-range-slider-input/dist/style.css";
import Providers from "./providers";
import Script from "next/script";
import GA4PageviewListener from "@/components/landing/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Oyoyo Events - Transform Your Event Planning",
  description:
    "Discover Oyoyo Events, the ultimate AI-powered event management platform designed to revolutionize your event planning experience. Say goodbye to the stress of coordination and hello to seamless, unforgettable events. Customize every detail, optimize layouts, and ensure smooth vendor-client communication. Attendees can easily find and register for events that match their interests, making each event engaging and exciting. Elevate your event planning with Oyoyo Events today!",
  keywords:
    "AI-powered event management, customize events, optimize layouts,Oyoyo, vendor-client communication, engaging events, Oyoyo Events",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = "G-58G36583WZ"; // put your real ID
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname
            });
          `}
        </Script>
      </head>
      <body className="font-inter">
        {/* {children} */}
        <GA4PageviewListener />
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
