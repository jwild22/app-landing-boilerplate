import Link from "next/link"
import Image from "next/image"
import { Brain } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-orange-50/20">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Light.png"
                alt="Exam Master Icon"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-xl text-gray-900">Exam Master: Quiz Maker</span>
            </Link>
            <p className="text-sm text-gray-600">
              Quiz maker app with AI-powered quiz generation. Create custom quizzes, flashcards, and track your study progress with our intelligent quiz builder for iOS.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Company</h3>
            <ul className="space-y-2 md:space-y-0 md:flex md:gap-6">
              <li>
                <Link href="https://sites.google.com/view/cutie-coder-privacy/" className="text-gray-600 hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="text-gray-600 hover:text-orange-500">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="https://apps.apple.com/us/app/exam-master-quiz-maker/id6743142831" className="text-gray-600 hover:text-orange-500">
                  Download App
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Exam Master: Quiz Maker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}