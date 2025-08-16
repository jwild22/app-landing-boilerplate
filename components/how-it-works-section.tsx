import Image from "next/image"
import { Upload, Brain, Play } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-background to-orange-50/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600 font-medium">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
              Create study quizzes in three simple steps
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Transform any study material into interactive quizzes with our intelligent AI system.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-orange-200 bg-white p-6 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
              <Upload className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">1. Upload Your Material</h3>
            <p className="text-gray-600">
              Upload PDFs, images, or text documents. Our AI supports textbooks, lecture notes, research papers, and handwritten notes.
            </p>
            <div className="rounded-xl border border-orange-200 bg-white overflow-hidden shadow-lg">
              <Image
                src="/taking-photo.png"
                alt="Upload study materials to Exam Master"
                width={300}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-orange-200 bg-white p-6 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
              <Brain className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">2. AI Generates Quizzes</h3>
            <p className="text-gray-600">
              Our advanced AI analyzes your content and creates personalized multiple-choice and single-choice questions targeting key concepts.
            </p>
            <div className="rounded-xl border border-orange-200 bg-white overflow-hidden shadow-lg">
              <Image
                src="/analyze.png"
                alt="AI analyzing and generating quiz questions"
                width={300}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-orange-200 bg-white p-6 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
              <Play className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">3. Study & Track Progress</h3>
            <p className="text-gray-600">
              Take quizzes, use flashcards, track your progress, and maintain study streaks. Earn XP and level up as you master your subjects.
            </p>
            <div className="rounded-xl border border-orange-200 bg-white overflow-hidden shadow-lg">
              <Image
                src="/result.png"
                alt="Study with quizzes and track your progress"
                width={300}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}