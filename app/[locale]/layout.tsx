import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from "@vercel/analytics/next";
import { i18n, type Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale)

  const baseUrl = 'https://exammasterapp.com'
  const locale = params.locale
  const canonicalUrl = locale === 'en' ? baseUrl : `${baseUrl}/${locale}`

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: 'Aitolkyn Abdulvakhapova' }],
    viewport: 'width=device-width, initial-scale=1',
    icons: {
      icon: '/Light.png',
      shortcut: '/Light.png',
      apple: '/Light.png',
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': '/',
        'fr': '/fr',
      },
    },
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      url: canonicalUrl,
      siteName: dict.meta.siteName,
      images: [
        {
          url: `${baseUrl}/1.png`,
          width: 1200,
          height: 630,
          alt: dict.meta.imageAlt,
        }
      ],
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.twitterTitle,
      description: dict.meta.twitterDescription,
      images: [`${baseUrl}/1.png`],
      creator: '@exammaster_app',
      site: '@exammaster_app',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: dict.app.name,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'iOS, Android, Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: params.locale === 'fr' ? 'EUR' : 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
    description: dict.meta.description,
    featureList: [
      dict.features.aiQuizMaker.title,
      dict.features.focusTimer.title,
      dict.features.progressTracking.title,
      dict.features.smartQuestionBanks.title,
      dict.features.flashcardsMode.title,
      dict.features.gamifiedLearning.title,
    ],
    screenshot: 'https://exammasterapp.com/1.png',
    softwareVersion: '1.0',
    applicationSubCategory: 'Quiz Maker',
    inLanguage: params.locale === 'fr' ? 'fr' : 'en',
  };

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <head>
        <meta name="apple-itunes-app" content="app-id=6743142831" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
