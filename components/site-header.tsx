"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { AppIcon } from "@/components/app-icon"
import type { Locale } from "@/i18n-config"

interface SiteHeaderProps {
  dict: any
  locale: Locale
}

export function SiteHeader({ dict, locale }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const badgeSrc = locale === 'fr'
    ? 'https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/fr-fr?releaseDate=1742688000'
    : 'https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1742688000'
  const altText = locale === 'fr' ? "Télécharger dans l'App Store" : 'Download on the App Store'

  // Get the path without locale
  const getLocalizedPath = (newLocale: Locale) => {
    if (!pathname) return `/${newLocale}`
    const segments = pathname.split('/')
    segments[1] = newLocale
    return segments.join('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center space-x-2">
              <AppIcon size={32} locale={locale} />
              <Link href={`/${locale}`}>
                <span className="font-bold text-lg sm:text-xl">{dict.app.name}</span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href={`/${locale}#features`} className="text-sm font-medium transition-colors hover:text-orange-500">
              {dict.header.features}
            </Link>
            <Link href={`/${locale}#how-it-works`} className="text-sm font-medium transition-colors hover:text-orange-500">
              {dict.header.howItWorks}
            </Link>
            <Link href={`/${locale}#faq`} className="text-sm font-medium transition-colors hover:text-orange-500">
              {dict.header.faq}
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <Link href={locale === 'en' ? '/fr' : '/'}>
                <Globe className="h-4 w-4" />
                <span className="text-xs">{locale === 'en' ? 'FR' : 'EN'}</span>
              </Link>
            </Button>
            <ThemeToggle />
            <Link href="https://apps.apple.com/fr/app/exam-master-lia-de-r%C3%A9vision/id6743142831?itscg=30200&itsct=apps_box_badge&mttnsubad=6743142831" className="inline-block">
              <Image
                src={badgeSrc}
                alt={altText}
                width={163}
                height={55}
                className="object-contain"
                unoptimized
              />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="gap-1 px-2">
              <Link href={locale === 'en' ? '/fr' : '/'}>
                <Globe className="h-4 w-4" />
                <span className="text-xs">{locale === 'en' ? 'FR' : 'EN'}</span>
              </Link>
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="flex flex-col space-y-1 p-4">
              <Link
                href={`/${locale}#features`}
                className="text-sm font-medium py-2 px-3 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {dict.header.features}
              </Link>
              <Link
                href={`/${locale}#how-it-works`}
                className="text-sm font-medium py-2 px-3 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {dict.header.howItWorks}
              </Link>
              <Link
                href={`/${locale}#faq`}
                className="text-sm font-medium py-2 px-3 rounded-md transition-colors hover:bg-orange-50 hover:text-orange-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {dict.header.faq}
              </Link>
              <div className="pt-2 border-t">
                <Link
                  href="https://apps.apple.com/fr/app/exam-master-lia-de-r%C3%A9vision/id6743142831?itscg=30200&itsct=apps_box_badge&mttnsubad=6743142831"
                  className="flex justify-center py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image
                    src={badgeSrc}
                    alt={altText}
                    width={163}
                    height={55}
                    className="object-contain"
                    unoptimized
                  />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}