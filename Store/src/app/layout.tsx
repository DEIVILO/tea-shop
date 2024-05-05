import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils"
import React from "react";
import NavBar from "@/components/NavBar";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lorem Ipsum tea shop",
  description: "Indulge in the flavours of the best quality tea in town",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head />
      <body
        className={cn(
          "relative h-full bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <NavBar />
        <main className="relative flex-col min-h-screen">
          <div className="flex-grow flex-1">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}