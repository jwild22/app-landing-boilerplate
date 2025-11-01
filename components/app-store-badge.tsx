import Image from "next/image"
import Link from "next/link"

interface AppStoreBadgeProps {
  className?: string
  size?: "small" | "medium" | "large"
  locale?: string
}

export function AppStoreBadge({ className, size = "medium", locale = "en" }: AppStoreBadgeProps) {
  const dimensions = {
    small: { width: 163, height: 55 },
    medium: { width: 204, height: 68 },
    large: { width: 245, height: 82 }
  }

  const { width, height } = dimensions[size]

  // Use Apple's official CDN badges
  const badgeSrc = locale === 'fr'
    ? 'https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/fr-fr?releaseDate=1742688000'
    : 'https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1742688000'

  const altText = locale === 'fr' ? "Télécharger dans l'App Store" : 'Download on the App Store'

  return (
    <Link
      href="https://apps.apple.com/fr/app/exam-master-lia-de-r%C3%A9vision/id6743142831?itscg=30200&itsct=apps_box_badge&mttnsubad=6743142831"
      className={`inline-block ${className}`}
    >
      <Image
        src={badgeSrc}
        alt={altText}
        width={width}
        height={height}
        className="object-contain"
        unoptimized
      />
    </Link>
  )
} 