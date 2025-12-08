import type { Metadata } from "next";
import { Inter, Roboto } from 'next/font/google'
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: "Tonsak Portfolio",
  description: "Website for showcase works and achievement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col h-screen ${inter.variable} ${roboto.variable} font-sans antialiased`}
      >
          <NavBar/>
          <main className="mx-auto w-[calc(100%-48px)] max-w-7xl">
            <div className="mt-20"></div>
              {children}
          </main>
          <Footer/>
      </body>
    </html>
  );
}
