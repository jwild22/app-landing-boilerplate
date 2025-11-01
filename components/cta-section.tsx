import Link from "next/link"
import Image from "next/image"

interface CTASectionProps {
  dict: any
  locale: string
}

export function CTASection({ dict, locale }: CTASectionProps) {
  const badgeSrc = locale === 'fr'
    ? 'https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/white/fr-fr?releaseDate=1742688000'
    : 'https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/white/en-us?releaseDate=1742688000'
  const altText = locale === 'fr' ? "Télécharger dans l'App Store" : 'Download on the App Store'

  return (
    <section className="bg-orange-500 text-white py-12 sm:py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 opacity-90"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {dict.cta.title}
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base md:text-lg lg:text-base xl:text-xl px-4 sm:px-0">
              {dict.cta.description}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-2">
            <Link href="https://apps.apple.com/fr/app/exam-master-lia-de-r%C3%A9vision/id6743142831?itscg=30200&itsct=apps_box_badge&mttnsubad=6743142831" className="inline-block">
              <Image
                src={badgeSrc}
                alt={altText}
                width={204}
                height={68}
                className="object-contain"
                unoptimized
              />
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-white/80">{dict.cta.note}</p>
        </div>
      </div>
    </section>
  )
}
