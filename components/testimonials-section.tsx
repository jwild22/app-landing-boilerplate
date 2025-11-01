import Image from "next/image"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

interface TestimonialsSectionProps {
  dict: any
}

export function TestimonialsSection({ dict }: TestimonialsSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-orange-50/30 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600 font-medium">{dict.testimonials.badge}</div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
              {dict.testimonials.title}
            </h2>
            <p className="max-w-[900px] text-gray-600 text-sm sm:text-base md:text-lg lg:text-base xl:text-xl px-4 sm:px-0">
              {dict.testimonials.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 py-8 sm:py-12 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-0 bg-orange-50/40">
            <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="relative h-8 w-8 sm:h-10 sm:w-10 overflow-hidden rounded-full border border-orange-200 flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
                    alt={dict.testimonials.sarah.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{dict.testimonials.sarah.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{dict.testimonials.sarah.role}</p>
                </div>
              </div>
              <blockquote className="mt-3 sm:mt-4 border-l-2 border-orange-300 pl-3 sm:pl-4 italic text-gray-600 text-sm sm:text-base">
                "{dict.testimonials.sarah.quote}"
              </blockquote>
            </CardContent>
          </Card>
          <Card className="border-0 bg-orange-50/40">
            <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="relative h-8 w-8 sm:h-10 sm:w-10 overflow-hidden rounded-full border border-orange-200 flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt={dict.testimonials.marcus.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{dict.testimonials.marcus.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{dict.testimonials.marcus.role}</p>
                </div>
              </div>
              <blockquote className="mt-3 sm:mt-4 border-l-2 border-orange-300 pl-3 sm:pl-4 italic text-gray-600 text-sm sm:text-base">
                "{dict.testimonials.marcus.quote}"
              </blockquote>
            </CardContent>
          </Card>
          <Card className="border-0 bg-orange-50/40">
            <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="relative h-8 w-8 sm:h-10 sm:w-10 overflow-hidden rounded-full border border-orange-200 flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                    alt={dict.testimonials.emily.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{dict.testimonials.emily.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{dict.testimonials.emily.role}</p>
                </div>
              </div>
              <blockquote className="mt-3 sm:mt-4 border-l-2 border-orange-300 pl-3 sm:pl-4 italic text-gray-600 text-sm sm:text-base">
                "{dict.testimonials.emily.quote}"
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
