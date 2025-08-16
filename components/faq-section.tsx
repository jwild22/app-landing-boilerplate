"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="faq" className="bg-orange-50/30 py-12 sm:py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600 font-medium">FAQ</div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
              Frequently asked questions
            </h2>
            <p className="max-w-[900px] text-gray-600 text-sm sm:text-base md:text-lg lg:text-base xl:text-xl px-4 sm:px-0">
              Everything you need to know about AI-powered studying with Exam Master.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-4 sm:space-y-6 py-8 sm:py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium px-1 py-4">
                How accurate is the AI quiz generation?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm sm:text-base px-1">
                Our AI uses advanced natural language processing to extract key concepts from your study materials and generate relevant questions. The accuracy is typically 90%+ for well-structured content like textbooks and lecture notes. You can always review and edit the generated questions to ensure they match your study needs perfectly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium px-1 py-4">
                What file formats can I upload for quiz generation?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm sm:text-base px-1">
                Exam Master supports PDF files, images (JPG, PNG), and text documents. Our AI can process textbooks, lecture slides, handwritten notes, research papers, and even screenshots. The Pro version includes enhanced processing for complex layouts and handwriting recognition.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium px-1 py-4">
                How does the focus timer help with studying?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm sm:text-base px-1">
                The focus timer includes three modes: Pomodoro (25-min work, 5-min break), Classic (customizable duration), and Stopwatch (track study time). Research shows that timed study sessions improve concentration and retention. Your focus sessions are tracked and contribute to your XP and study streaks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium px-1 py-4">
                Can I share my question banks with classmates?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm sm:text-base px-1">
                Yes! Pro users can export question banks as JSON files and share them with friends. Recipients can import these files into their own Exam Master app. This makes group study sessions more effective and helps your study group collaborate on exam preparation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium px-1 py-4">
                How does the XP and leveling system work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm sm:text-base px-1">
                You earn XP points for completing quizzes, maintaining study streaks, and using focus timers. Every 50 XP, you level up and unlock achievements. This gamification system is designed to keep you motivated and make studying more engaging. Your progress is tracked with beautiful charts and statistics.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium px-1 py-4">
                Is my study data private and secure?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm sm:text-base px-1">
                Absolutely. All your uploaded documents and generated questions are stored securely and encrypted. We don't collect any personal data from the free version. Your study materials are never shared with third parties, and you can delete your account and all data at any time. Privacy is our priority.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
} 