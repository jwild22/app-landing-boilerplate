import { Brain, Timer, TrendingUp, BookOpen, FileText, Star } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface FeaturesSectionProps {
  dict: any
}

export function FeaturesSection({ dict }: FeaturesSectionProps) {
  return (
    <section id="features" className="bg-orange-50/50 py-12 sm:py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600 font-medium">{dict.features.badge}</div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
              {dict.features.title}
            </h2>
            <p className="max-w-[900px] text-gray-600 text-sm sm:text-base md:text-lg lg:text-base xl:text-xl px-4 sm:px-0">
              {dict.features.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 py-8 sm:py-12 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3 sm:pb-2">
              <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900 text-base sm:text-lg">{dict.features.aiQuizMaker.title}</CardTitle>
              <CardDescription className="text-sm">
                {dict.features.aiQuizMaker.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs sm:text-sm text-gray-600">
                {dict.features.aiQuizMaker.detail}
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3 sm:pb-2">
              <Timer className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900 text-base sm:text-lg">{dict.features.focusTimer.title}</CardTitle>
              <CardDescription className="text-sm">
                {dict.features.focusTimer.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs sm:text-sm text-gray-600">
                {dict.features.focusTimer.detail}
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3 sm:pb-2">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900 text-base sm:text-lg">{dict.features.progressTracking.title}</CardTitle>
              <CardDescription className="text-sm">
                {dict.features.progressTracking.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs sm:text-sm text-gray-600">
                {dict.features.progressTracking.detail}
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3 sm:pb-2">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900 text-base sm:text-lg">{dict.features.smartQuestionBanks.title}</CardTitle>
              <CardDescription className="text-sm">
                {dict.features.smartQuestionBanks.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs sm:text-sm text-gray-600">
                {dict.features.smartQuestionBanks.detail}
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3 sm:pb-2">
              <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900 text-base sm:text-lg">{dict.features.flashcardsMode.title}</CardTitle>
              <CardDescription className="text-sm">
                {dict.features.flashcardsMode.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs sm:text-sm text-gray-600">
                {dict.features.flashcardsMode.detail}
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3 sm:pb-2">
              <Star className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mb-2" />
              <CardTitle className="text-gray-900 text-base sm:text-lg">{dict.features.gamifiedLearning.title}</CardTitle>
              <CardDescription className="text-sm">
                {dict.features.gamifiedLearning.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-xs sm:text-sm text-gray-600">
                {dict.features.gamifiedLearning.detail}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
