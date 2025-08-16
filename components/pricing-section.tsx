import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function PricingSection() {
  return (
    <section id="pricing" className="bg-orange-50/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600 font-medium">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
              Choose the plan that fits your study goals
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From students starting their journey to serious exam preparation, we have the perfect plan for you.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          <Card className="flex flex-col border-orange-200 bg-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Free</CardTitle>
              <div className="text-3xl font-bold">$0</div>
              <CardDescription>Perfect for getting started</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Create question banks manually</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Basic quiz functionality</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Focus timer (all modes)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Study streak tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>XP and level system</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Flashcard mode</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full border-orange-300 hover:bg-orange-50 hover:text-orange-600" variant="outline" asChild>
                <Link href="https://apps.apple.com/us/app/exam-master-quiz-maker/id6743142831">
                  Download Free
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-orange-500 bg-white backdrop-blur-sm shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">Most Popular</div>
            <CardHeader>
              <CardTitle className="text-gray-900">Exam Master Pro</CardTitle>
              <div className="text-3xl font-bold">$3.99<span className="text-sm font-normal">/week</span></div>
              <CardDescription>Unlock the full potential of AI-powered studying</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Everything in Free plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>🔥 AI quiz generation from PDFs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>🔥 AI quiz generation from images</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Import/export question banks</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Share quizzes with friends</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Advanced progress analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Priority support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <div className="w-full space-y-2">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" asChild>
                  <Link href="https://apps.apple.com/us/app/exam-master-quiz-maker/id6743142831">
                    Start Free Trial
                  </Link>
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  3 days free, then $3.99/week • Cancel anytime
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="mx-auto max-w-3xl">
          <Card className="border-orange-200 bg-white backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-gray-900">Annual Plan - Best Value!</CardTitle>
              <div className="text-3xl font-bold">$29.99<span className="text-sm font-normal">/year</span></div>
              <CardDescription>Save over 85% compared to weekly billing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>All Pro features included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Priority customer support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-orange-500" />
                  <span>Early access to new features</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button className="border-orange-300 hover:bg-orange-50 hover:text-orange-600" variant="outline" asChild>
                <Link href="https://apps.apple.com/us/app/exam-master-quiz-maker/id6743142831">
                  Get Annual Plan
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}