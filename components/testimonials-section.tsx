import Image from "next/image"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Loved by collectors and enthusiasts
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what our users are saying about their experience with Antique Identifier App.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-0 bg-accent/40">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/20">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
                    alt="Margaret T."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-primary/90">Margaret T.</p>
                  <p className="text-sm text-muted-foreground">Antique Dealer</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-2 border-primary/30 pl-4 italic text-muted-foreground">
                "This antique identifer app has transformed how I evaluate new inventory. The app has helped me identify several rare pieces that I would have otherwise overlooked. The historical information is incredibly detailed and accurate."
              </blockquote>
            </CardContent>
          </Card>
          <Card className="border-0 bg-accent/40">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/20">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt="Robert J."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-primary/90">Robert J.</p>
                  <p className="text-sm text-muted-foreground">Collector</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-2 border-primary/30 pl-4 italic text-muted-foreground">
                "As someone new to collecting antiques, this app has been invaluable. I've learned so much about different periods and styles. The value estimates have helped me avoid overpaying at estate sales and auctions."
              </blockquote>
            </CardContent>
          </Card>
          <Card className="border-0 bg-accent/40">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/20">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                    alt="Claire M."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-primary/90">Claire M.</p>
                  <p className="text-sm text-muted-foreground">Interior Designer</p>
                </div>
              </div>
              <blockquote className="mt-4 border-l-2 border-primary/30 pl-4 italic text-muted-foreground">
                "This antique identifier app has become an essential tool in my design business. When sourcing vintage pieces for clients, I can quickly identify items and provide them with the fascinating history behind each piece, which they love."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}