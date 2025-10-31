import { Brain, Timer, TrendingUp, BookOpen, FileText, Star } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section id="features" className="bg-orange-50/50 py-12 sm:py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600 font-medium">Features</div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
              Powerful Quiz Maker Features
            </h2>
            <p className="max-w-[900px] text-gray-600 text-sm sm:text-base md:text-lg lg:text-base xl:text-xl px-4 sm:px-0">
              Our AI-powered quiz maker platform makes creating and taking quizzes effortless. Build custom quizzes, track progress, and ace your exams with intelligent study tools.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 py-8 sm:py-12 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3 sm:pb-2">
              <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900 text-base sm:text-lg">AI Quiz Maker</CardTitle>
              <CardDescription className="text-sm">
                Create quizzes from any document instantly with AI.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs sm:text-sm text-gray-600">
                Upload PDFs, images, or text and our AI quiz generator creates personalized multiple-choice and single-choice questions in seconds.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3 sm:pb-2">
              <Timer className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900 text-base sm:text-lg">Focus Timer</CardTitle>
              <CardDescription className="text-sm">
                Stay productive with built-in study timers.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs sm:text-sm text-gray-600">
                Choose from Pomodoro, Classic, or Stopwatch modes to track your study sessions and maintain deep focus.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3 sm:pb-2">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900 text-base sm:text-lg">Progress Tracking</CardTitle>
              <CardDescription className="text-sm">
                Monitor your learning with detailed analytics.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs sm:text-sm text-gray-600">
                Track study streaks, XP points, levels, and daily progress with beautiful charts and motivational rewards.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3 sm:pb-2">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900 text-base sm:text-lg">Smart Question Banks</CardTitle>
              <CardDescription className="text-sm">
                Organize your study materials with categories.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs sm:text-sm text-gray-600">
                Create custom question banks with emoji icons, categorize by subject, and track completion rates for each topic.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3 sm:pb-2">
              <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900 text-base sm:text-lg">Flashcards Mode</CardTitle>
              <CardDescription className="text-sm">
                Review concepts with interactive flashcards.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs sm:text-sm text-gray-600">
                Switch between quiz and flashcard modes for active recall practice and spaced repetition learning.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3 sm:pb-2">
              <Star className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900 text-base sm:text-lg">Gamified Learning</CardTitle>
              <CardDescription className="text-sm">
                Stay motivated with XP, levels, and achievements.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs sm:text-sm text-gray-600">
                Earn experience points, level up, maintain study streaks, and unlock achievements as you progress through your studies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}