"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Light.png"
                alt="Exam Master Icon"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-lg sm:text-xl">Exam Master</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-orange-500">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-orange-500">
              How It Works
            </Link>
            <Link href="#faq" className="text-sm font-medium transition-colors hover:text-orange-500">
              FAQ
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Link href="https://apps.apple.com/us/app/exam-master-quiz-maker/id6743142831" className="w-[120px] h-[40px] relative">
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="flex flex-col space-y-1 p-4">
              <Link
                href="#features"
                className="text-sm font-medium py-2 px-3 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium py-2 px-3 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium py-2 px-3 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="pt-2 border-t">
                <Link
                  href="https://apps.apple.com/us/app/exam-master-quiz-maker/id6743142831"
                  className="flex justify-center py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-[120px] h-[40px] relative">
                    <Image
                      src="/app-store-badge.svg"
                      alt="Download on the App Store"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}