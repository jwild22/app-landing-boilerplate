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
    <section id="features" className="bg-orange-50/50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600 font-medium">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
              Everything you need to master your exams
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI-powered study platform transforms how you learn, making exam preparation efficient, engaging, and effective.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <Brain className="h-6 w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900">AI Quiz Generation</CardTitle>
              <CardDescription>
                Transform any document into practice quizzes instantly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Upload PDFs, images, or text and our AI creates personalized multiple-choice and single-choice questions in seconds.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <Timer className="h-6 w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900">Focus Timer</CardTitle>
              <CardDescription>
                Stay productive with built-in study timers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Choose from Pomodoro, Classic, or Stopwatch modes to track your study sessions and maintain deep focus.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <TrendingUp className="h-6 w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900">Progress Tracking</CardTitle>
              <CardDescription>
                Monitor your learning with detailed analytics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Track study streaks, XP points, levels, and daily progress with beautiful charts and motivational rewards.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <BookOpen className="h-6 w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900">Smart Question Banks</CardTitle>
              <CardDescription>
                Organize your study materials with categories.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Create custom question banks with emoji icons, categorize by subject, and track completion rates for each topic.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <FileText className="h-6 w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900">Flashcards Mode</CardTitle>
              <CardDescription>
                Review concepts with interactive flashcards.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Switch between quiz and flashcard modes for active recall practice and spaced repetition learning.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <Star className="h-6 w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900">Gamified Learning</CardTitle>
              <CardDescription>
                Stay motivated with XP, levels, and achievements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Earn experience points, level up, maintain study streaks, and unlock achievements as you progress through your studies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}