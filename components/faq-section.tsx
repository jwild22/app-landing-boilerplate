"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQSectionProps {
  dict: any
}

export function FAQSection({ dict }: FAQSectionProps) {
  return (
    <section id="faq" className="bg-orange-50/30 py-12 sm:py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600 font-medium">{dict.faq.badge}</div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-900">
              {dict.faq.title}
            </h2>
            <p className="max-w-[900px] text-gray-600 text-sm sm:text-base md:text-lg lg:text-base xl:text-xl px-4 sm:px-0">
              {dict.faq.description}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-4 sm:space-y-6 py-8 sm:py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium px-1 py-4">
                {dict.faq.q1.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm sm:text-base px-1">
                {dict.faq.q1.answer}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium px-1 py-4">
                {dict.faq.q2.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm sm:text-base px-1">
                {dict.faq.q2.answer}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium px-1 py-4">
                {dict.faq.q3.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm sm:text-base px-1">
                {dict.faq.q3.answer}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium px-1 py-4">
                {dict.faq.q4.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm sm:text-base px-1">
                {dict.faq.q4.answer}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium px-1 py-4">
                {dict.faq.q5.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm sm:text-base px-1">
                {dict.faq.q5.answer}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium px-1 py-4">
                {dict.faq.q6.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm sm:text-base px-1">
                {dict.faq.q6.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
