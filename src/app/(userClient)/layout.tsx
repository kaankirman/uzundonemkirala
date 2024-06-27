import type { Metadata } from "next";
import "@styles/font.css";
import "@styles/layout.css"; // Import the new CSS file
import Nav from "@components/userClient/Nav";
import Footer from "@components/userClient/Footer";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uzundonemkirala.com/"),
  keywords: [
    "Car Rental Turkey",
    "Long Term Car Rental Turkey",
    "Uzun Dönem Araç Kiralama",
    "Car Hire Turkey",
    "Rent a Car Turkey",
    "Auto Rental Turkey",
    "Vehicle Rental Turkey",
    "Car Leasing Turkey",
    "Affordable Car Rental Turkey",
    "Cheap Car Hire Turkey",
    "Best Car Rental Deals Turkey",
    "Luxury Car Rental Turkey",
    "Budget Car Rental Turkey",
    "Economy Car Rental Turkey",
    "SUV Rental Turkey",
    "Van Rental Turkey",
    "One-Way Car Rental Turkey",
    "Chauffeur Service Turkey",
    "Istanbul Car Rental",
    "Ankara Car Rental",
    "Antalya Car Rental",
    "Izmir Car Rental",
    "Airport Car Rental Turkey",
    "Long-Term Car Hire Turkey",
    "Short-Term Car Rental Turkey",
    "Holiday Car Rental Turkey",
    "Festival Car Rental Turkey",
  ],
  title:
    "Uzun Dönem Kirala - Long Term Car Rental Turkey - Uzun Dönem Araç Kiralama",
  openGraph: {
    description:
      "Uzun Dönem Kirala offers reliable and affordable long-term car rental services across Turkey. Rent a car in Istanbul, Ankara, Antalya, Izmir, and more. Enjoy our best car rental deals with no hidden fees and 24/7 customer support. Book your car rental in Turkey now!",
    images: [
      "https://www.uzundonemkirala.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.43e992db.png&w=96&q=75",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <div className="layout-container">
          <Nav />
          <div className="children-container">
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
