"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="pricing" className="bg-accent/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Frequently asked questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about antique identification.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-base font-medium">
                How accurate is the antique identification?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We uses advanced AI technology trained on millions of antique images to provide highly accurate identifications. For common antiques and well-known styles, the accuracy is typically 90%+. For rare or unusual items, we provide the closest matches and detailed information to help you narrow down the identification. Our system continuously improves as more users contribute to our database.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-base font-medium">
                Can this antique identifier app determine the value of my antiques?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we provides estimated value ranges based on recent auction data, market trends, and comparable sales. However, these are approximations and many factors can affect an item's actual value, including condition, provenance, rarity, and regional market variations. For high-value items, we always recommend consulting with a professional appraiser.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base font-medium">
                What types of antiques can the app identify?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our identifier app can identify a wide range of antiques and collectibles including furniture, ceramics, glassware, jewelry, silverware, artwork, clocks, watches, coins, stamps, toys, and many other categories. Our database includes items from various periods and styles, from ancient artifacts to mid-century modern pieces.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-base font-medium">
                How do I take the best photo for identification?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                For best results, take photos in good natural lighting, against a plain background. Capture the entire item and include multiple angles if possible. For items with marks, signatures, or hallmarks, take close-up photos of these details as they can be crucial for accurate identification. Avoid shadows, glare, and blurry images.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-base font-medium">
                Can I use this antique identifier app offline?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The core identification feature requires an internet connection to access our AI and database. However, subscribers can save identified items to their collection for offline viewing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-base font-medium">
                How is my data and privacy protected?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We take your privacy seriously. Photos you upload are used only for identification purposes and to improve our AI system. You can choose whether to contribute your identified items to our database. All personal information is encrypted and never shared with third parties without your explicit consent. You can delete your account and data at any time.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
} 