import Image from "next/image"
import { Camera, Database, BookOpen } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Identify antiques in three simple steps
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our intuitive process makes antique identification and learning effortless.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-primary/20 bg-card p-6 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Camera className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary/90">1. Take a Photo</h3>
            <p className="text-muted-foreground">
              Simply snap a picture of your antique using your smartphone camera or upload an existing photo from your gallery.
            </p>
            <div className="rounded-xl border border-primary/20 bg-card overflow-hidden shadow-lg">
              <Image
                src="/taking-photo.png"
                alt="Taking a photo of an antique"
                width={300}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-primary/20 bg-card p-6 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary/90">2. Get Results</h3>
            <p className="text-muted-foreground">
              Our AI analyzes your photo and provides identification, estimated age, potential value, and similar items from our database.
            </p>
            <div className="rounded-xl border border-primary/20 bg-card overflow-hidden shadow-lg">
              <Image
                src="/analyze.png"
                alt="Analyzing antique photo"
                width={300}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-primary/20 bg-card p-6 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary/90">3. Learn More</h3>
            <p className="text-muted-foreground">
              Explore detailed information about your antique's history, style, maker, and cultural significance to become a more informed collector.
            </p>
            <div className="rounded-xl border border-primary/20 bg-card overflow-hidden shadow-lg">
              <Image
                src="/result.png"
                alt="Get antique identification result"
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