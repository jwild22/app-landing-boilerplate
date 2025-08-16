import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-orange-500 text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-90"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Start mastering your exams today
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join over 5,000 students worldwide who have improved their grades with AI-powered quiz generation and smart study tools.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link href="https://apps.apple.com/us/app/exam-master-quiz-maker/id6743142831" className="w-[170px] h-[50px] relative">
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                fill
                className="object-contain"
              />
            </Link>
          </div>
          <p className="text-sm text-white/80">Free download with premium AI features available</p>
        </div>
      </div>
    </section>
  )
}