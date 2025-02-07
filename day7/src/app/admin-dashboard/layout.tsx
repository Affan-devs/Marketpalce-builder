import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar  from "./components/Sidebar"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rental Admin Dashboard",
  description: "Admin dashboard for rental e-commerce platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">
          <Sidebar />
          <div className="pt-16 px-4 sm:px-6 lg:px-8">{children}</div>
        </div>
      </body>
    </html>
  )
}

