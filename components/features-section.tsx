import { Camera, Search, Sparkles, Clock, Database, BookOpen } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section id="features" className="bg-accent/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Everything you need to identify and learn about antiques
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI-powered platform makes antique identification effortless, so you can focus on building your collection.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Camera className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-primary/90">Instant Identification</CardTitle>
              <CardDescription>
                Identify antiques with just a photo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our advanced AI can recognize thousands of antiques, from furniture and jewelry to art and collectibles.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Database className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-primary/90">Value Estimation</CardTitle>
              <CardDescription>
                Get approximate market values for your items.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Receive estimated price ranges based on recent auction data and market trends for similar items.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Sparkles className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-primary/90">Historical Context</CardTitle>
              <CardDescription>
                Learn the story behind your antiques.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Discover the historical period, style, and cultural significance of your antiques with detailed information.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Clock className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-primary/90">Collection Management</CardTitle>
              <CardDescription>
                Organize and track your antique collection.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Create a digital inventory of your antiques with photos, descriptions, and estimated values all in one place.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}