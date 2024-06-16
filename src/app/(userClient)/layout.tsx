import type { Metadata } from "next";
import "@styles/client.css";
import Nav from "@components/userClient/Nav";
import Footer from "@components/userClient/Footer";

export const metadata: Metadata = {
  title: "Uzun Dönem Araç Kiralama Uyguncar",
  description: "Car rental in Turkey, Araç kiralama Türkiye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="bg-white">
        <div className="flex flex-col h-screen relative">
          <Nav />
          <div className="overflow-y-scroll h-full children-container">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
