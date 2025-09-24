import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import GA4PageviewListener from "@/components/landing/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Oyoyo Events - Transform Your Event Planning",
  description: "…",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_MEASUREMENT_ID = "G-58G36583WZ"; // put your real ID

  return (
    <html lang="en">
      <head>
        {/* GA4 loader */}
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
      <body>
        {/* Pageview listener for client-side navigation */}
        <GA4PageviewListener />
        {children}
      </body>
    </html>
  );
}
