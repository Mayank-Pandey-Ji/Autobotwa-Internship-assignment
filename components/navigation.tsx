"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl">ContentFlow</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition">
              Features
            </a>
            <a href="#highlights" className="text-sm hover:text-primary transition">
              Capabilities
            </a>
            <a href="#pricing" className="text-sm hover:text-primary transition">
              Pricing
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Button className="hidden md:inline-flex bg-primary hover:bg-accent">Get Started</Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 border-t border-border pt-4">
            <a href="#features" className="text-sm hover:text-primary transition">
              Features
            </a>
            <a href="#highlights" className="text-sm hover:text-primary transition">
              Capabilities
            </a>
            <a href="#pricing" className="text-sm hover:text-primary transition">
              Pricing
            </a>
            <Button className="w-full bg-primary hover:bg-accent">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
