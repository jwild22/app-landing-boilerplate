import Link from "next/link"
import { BookOpen } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-accent/20">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-primary/90">Antique Identifier</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Identify, value, and learn about antiques and collectibles with our AI-powered platform.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-primary/90">Company</h3>
            <ul className="space-y-2 md:space-y-0 md:flex md:gap-6">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AntiqueIdentifier.app . All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}