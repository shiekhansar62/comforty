// src/app/layout.tsx

"use client"
import { CartProvider } from './context/CartContext';
import { LoaderProvider } from "@/app/context/LoaderContext"
import LoaderPopup from './components/LoaderPopup';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Providers ko wrap karein */}
        <LoaderProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
            <LoaderPopup />
          </CartProvider>
        </LoaderProvider>
      </body>
    </html>
  );
}