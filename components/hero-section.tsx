import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { AppStoreBadge } from "@/components/app-store-badge"

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-primary">
                Identify antiques with a simple photo
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-xl">
                Our antique identifier app uses advanced AI to help you identify, value, and learn about antiques and collectibles. Simply take a photo and discover the history behind your treasures.
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-3">
              <AppStoreBadge size="medium" />
              <Button size="lg" variant="outline" asChild className="border-primary/50 hover:bg-primary/10 hover:text-primary">
                <Link href="#features">
                  Learn More
                </Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Free download</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>In-app purchases available</span>
              </div>
            </div>
          </div>
          <div className="relative mt-4 lg:mt-0 mx-auto lg:mx-0 max-w-[350px] lg:max-w-none">
            <div className="relative rounded-xl overflow-hidden">
              <Image 
                src="/antiqueidentifier_hero.png" 
                alt="antique identifier app interface showing antique identification"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}