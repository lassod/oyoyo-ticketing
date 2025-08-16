import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { Toaster } from "@/components/ui/toaster";
import "react-range-slider-input/dist/style.css";

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
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script src="https://js.paystack.co/v1/inline.js"></script>
      </head>

      <body className="font-inter">
        {children}
        {/* <Providers>{children}</Providers> */}
        <Toaster />
      </body>
    </html>
  );
}
