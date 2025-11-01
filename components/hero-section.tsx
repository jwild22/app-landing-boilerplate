import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { AppStoreBadge } from "@/components/app-store-badge"

interface HeroSectionProps {
  dict: any
  locale: string
}

export function HeroSection({ dict, locale }: HeroSectionProps) {
  return (
    <section className="relative py-8 sm:py-12 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-orange-50 to-background dark:hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-6 sm:gap-8 lg:grid lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center lg:justify-start mb-2 sm:mb-4">
                <div className="flex items-center gap-2 rounded-lg bg-orange-100 px-3 py-1 text-xs sm:text-sm text-orange-600 font-medium">
                  <Image
                    src="/Light.png"
                    alt="Exam Master Icon"
                    width={16}
                    height={16}
                    className="rounded sm:w-5 sm:h-5"
                  />
                  <span className="whitespace-nowrap">{dict.hero.badge}</span>
                </div>
              </div>
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none text-gray-900 text-center lg:text-left">
                {dict.hero.title}
              </h1>
              <p className="max-w-[600px] text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl text-center lg:text-left mx-auto lg:mx-0">
                {dict.hero.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <AppStoreBadge size="medium" locale={locale} />
              <Button size="lg" variant="outline" asChild className="border-orange-300 hover:bg-orange-50 hover:text-orange-600 w-full sm:w-auto">
                <Link href="#features">
                  {dict.hero.cta}
                </Link>
              </Button>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-orange-500" />
                  <span className="whitespace-nowrap">{dict.hero.freeDownload}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-orange-500" />
                  <span className="whitespace-nowrap">{dict.hero.premiumFeatures}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-orange-500" />
                  <span className="whitespace-nowrap">{dict.hero.students}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-2 sm:mt-4 lg:mt-0 mx-auto lg:mx-0 max-w-[260px] sm:max-w-[300px] lg:max-w-none flex justify-center">
            {/* iPhone Mockup with features - exactly like iOS onboarding */}
            <div className="relative">
              {/* Phone frame */}
              <div className="relative bg-white dark:phone-mockup rounded-[20px] sm:rounded-[30px] w-[240px] h-[480px] sm:w-[280px] sm:h-[560px] shadow-2xl shadow-black/20 p-4 sm:p-6">
                <div className="flex flex-col gap-4 h-full justify-center">
                  {/* Feature Cards */}
                  <div className="space-y-3 sm:space-y-4">
                    {/* AI Quiz Creation */}
                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-orange-50 dark:feature-card rounded-lg border border-orange-100">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 bg-orange-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-medium text-gray-900">{dict.hero.aiQuizCreation}</div>
                      </div>
                    </div>

                    {/* Focus Timer */}
                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-blue-50 dark:feature-card rounded-lg border border-blue-100">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-medium text-gray-900">{dict.hero.focusTimer}</div>
                      </div>
                    </div>

                    {/* Progress Tracking */}
                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-green-50 dark:feature-card rounded-lg border border-green-100">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-medium text-gray-900">{dict.hero.progressTracking}</div>
                      </div>
                    </div>
                  </div>

                  {/* Stat Badges */}
                  <div className="flex justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
                    <div className="text-center">
                      <div className="text-sm sm:text-lg font-bold text-purple-500">1,250</div>
                      <div className="text-xs text-gray-500">{dict.hero.xp}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-lg font-bold text-orange-500">15</div>
                      <div className="text-xs text-gray-500">{dict.hero.streak}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-lg font-bold text-blue-500">Lv.8</div>
                      <div className="text-xs text-gray-500">{dict.hero.level}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}