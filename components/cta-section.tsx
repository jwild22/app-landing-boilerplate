import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-orange-500 text-white py-12 sm:py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-90"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Start mastering your exams today
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base md:text-lg lg:text-base xl:text-xl px-4 sm:px-0">
              Join over 5,000 students worldwide who have improved their grades with AI-powered quiz generation and smart study tools.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-2">
            <Link href="https://apps.apple.com/app/apple-store/id6743142831?pt=127400965&ct=google.com&mt=8" className="w-[150px] sm:w-[170px] h-[45px] sm:h-[50px] relative">
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                fill
                className="object-contain"
              />
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-white/80">Free download with premium AI features available</p>
        </div>
      </div>
    </section>
  )
}