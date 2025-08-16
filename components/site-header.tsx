"use client"

import Link from "next/link"
import Image from "next/image"
import { Brain } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/Light.png"
              alt="Exam Master Icon"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold text-xl">Exam Master</span>
          </Link>
        </div>
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
        <div className="flex items-center gap-2">
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
      </div>
    </header>
  )
}