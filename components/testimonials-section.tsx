import Image from "next/image"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50/30 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600 font-medium">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
              Loved by students worldwide
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join over 5,000 students who have improved their grades with Exam Master.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-0 bg-orange-50/40">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-orange-200">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
                    alt="Sarah Chen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Chen</p>
                  <p className="text-sm text-gray-600">Medical Student</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-2 border-orange-300 pl-4 italic text-gray-600">
                "My GPA improved from 3.2 to 3.8 after using Exam Master. The AI quiz generation is incredible - it picks up exactly the concepts I need to focus on. The study streaks keep me motivated daily!"
              </blockquote>
            </CardContent>
          </Card>
          <Card className="border-0 bg-orange-50/40">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-orange-200">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt="Marcus Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Marcus Johnson</p>
                  <p className="text-sm text-gray-600">Engineering Student</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-2 border-orange-300 pl-4 italic text-gray-600">
                "I've been sleeping better since I started using structured study sessions with the focus timer. Passed my finals with flying colors and actually retained the information. Game changer!"
              </blockquote>
            </CardContent>
          </Card>
          <Card className="border-0 bg-orange-50/40">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-orange-200">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                    alt="Emily Rodriguez"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                  <p className="text-sm text-gray-600">Pre-Law Student</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-2 border-orange-300 pl-4 italic text-gray-600">
                "Finally found an app that understands how students actually study. The ability to turn any PDF into quizzes saves me hours. The gamification with XP and levels actually makes studying fun!"
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}