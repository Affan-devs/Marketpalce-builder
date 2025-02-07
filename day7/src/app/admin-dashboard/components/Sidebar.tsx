"use client"

import Link from "next/link"
import { useState } from "react"
import { Home, Users, Car, CreditCard, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "../page.tsx", label: "Dashboard", icon: Home },
  { href: "./user", label: "Users", icon: Users },
  { href: "../car", label: "Cars", icon: Car },
  { href: "../booking", label: "Bookings", icon: CreditCard },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant="outline" size="icon" className="fixed top-4 left-4 z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>
      <aside
        className={`
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        fixed inset-y-0 left-0 z-40 w-64 bg-blue-800 text-white p-6 transition-transform duration-300 ease-in-out
      `}
      >
        <nav className="space-y-4 mt-16">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-2 p-2 rounded hover:bg-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsOpen(false)} />}
    </>
  )
}

