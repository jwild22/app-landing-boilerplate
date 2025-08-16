import Image from "next/image"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-orange-50/30 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600 font-medium">Testimonials</div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
              Loved by students worldwide
            </h2>
            <p className="max-w-[900px] text-gray-600 text-sm sm:text-base md:text-lg lg:text-base xl:text-xl px-4 sm:px-0">
              Join over 5,000 students who have improved their grades with Exam Master.
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
                    alt="Sarah Chen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Sarah Chen</p>
                  <p className="text-xs sm:text-sm text-gray-600">Medical Student</p>
                </div>
              </div>
              <blockquote className="mt-3 sm:mt-4 border-l-2 border-orange-300 pl-3 sm:pl-4 italic text-gray-600 text-sm sm:text-base">
                "My GPA improved from 3.2 to 3.8 after using Exam Master. The AI quiz generation is incredible - it picks up exactly the concepts I need to focus on. The study streaks keep me motivated daily!"
              </blockquote>
            </CardContent>
          </Card>
          <Card className="border-0 bg-orange-50/40">
            <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="relative h-8 w-8 sm:h-10 sm:w-10 overflow-hidden rounded-full border border-orange-200 flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt="Marcus Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Marcus Johnson</p>
                  <p className="text-xs sm:text-sm text-gray-600">Engineering Student</p>
                </div>
              </div>
              <blockquote className="mt-3 sm:mt-4 border-l-2 border-orange-300 pl-3 sm:pl-4 italic text-gray-600 text-sm sm:text-base">
                "I've been sleeping better since I started using structured study sessions with the focus timer. Passed my finals with flying colors and actually retained the information. Game changer!"
              </blockquote>
            </CardContent>
          </Card>
          <Card className="border-0 bg-orange-50/40">
            <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="relative h-8 w-8 sm:h-10 sm:w-10 overflow-hidden rounded-full border border-orange-200 flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                    alt="Emily Rodriguez"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Emily Rodriguez</p>
                  <p className="text-xs sm:text-sm text-gray-600">Pre-Law Student</p>
                </div>
              </div>
              <blockquote className="mt-3 sm:mt-4 border-l-2 border-orange-300 pl-3 sm:pl-4 italic text-gray-600 text-sm sm:text-base">
                "Finally found an app that understands how students actually study. The ability to turn any PDF into quizzes saves me hours. The gamification with XP and levels actually makes studying fun!"
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}