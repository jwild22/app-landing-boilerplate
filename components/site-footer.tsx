import Link from "next/link"
import { AppIcon } from "@/components/app-icon"

interface SiteFooterProps {
  dict: any
  locale?: string
}

export function SiteFooter({ dict, locale = "en" }: SiteFooterProps) {
  return (
    <footer className="border-t bg-orange-50/20">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <AppIcon size={32} locale={locale} />
              <Link href={`/${locale}`}>
                <span className="font-bold text-xl text-gray-900">{dict.app.name}</span>
              </Link>
            </div>
            <p className="text-sm text-gray-600">
              {dict.footer.description}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">{dict.footer.company}</h3>
            <ul className="space-y-2 md:space-y-0 md:flex md:gap-6">
              <li>
                <Link href="https://sites.google.com/view/cutie-coder-privacy/" className="text-gray-600 hover:text-orange-500">
                  {dict.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="text-gray-600 hover:text-orange-500">
                  {dict.footer.termsOfService}
                </Link>
              </li>
              <li>
                <Link href="https://apps.apple.com/app/apple-store/id6743142831?pt=127400965&ct=google.com&mt=8" className="text-gray-600 hover:text-orange-500">
                  {dict.footer.downloadApp}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} {dict.app.name}. {dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
