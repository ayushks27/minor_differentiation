"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, Info, Compass, Mail } from "lucide-react"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-2.5 left-6 z-50 p-2 bg-white text-black rounded-lg hover:bg-white hover:text-black transition"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 pl-20 px-6 py-4 text-2xl font-2rem text-[#000000] border-b border-gray-700">
        <span>Explorer</span>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col mt-6 space-y-6 px-6 text-lg">
          <Link href="/" className="flex items-center gap-3 hover:text-gray-500 transition">
            <Home size={20} /> Home
          </Link>
          <Link href="/about" className="flex items-center gap-3 hover:text-gray-500 transition">
            <Info size={20} /> About
          </Link>
          <Link href="/overview" className="flex items-center gap-3 hover:text-gray-500 transition">
            <Compass size={20} /> Overview
          </Link>
          <Link href="/modelcomparison" className="flex items-center gap-3 hover:text-gray-500 transition">
            <Mail size={20} /> Model Comparison
          </Link>
          <Link href="/trends" className="flex items-center gap-3 hover:text-gray-500 transition">
            <Mail size={20} /> Trends
          </Link>
          <Link href="/topicexplorer" className="flex items-center gap-3 hover:text-gray-500 transition">
            <Mail size={20} /> Topic Explorer
          </Link>
          <Link href="/contactus" className="flex items-center gap-3 hover:text-gray-500 transition">
            <Mail size={20} /> Contact Us
          </Link>
        </nav>
      </div>
    </>
  )
}
