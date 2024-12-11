import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renta de Vehiculos",
  description: "Renta de vehículos en la ciudad de Buenos Aires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="es">
        <body className={outfit.className}>
          <NextTopLoader color="#000" />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
