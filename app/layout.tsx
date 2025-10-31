import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quiz Maker - Create AI-Powered Quizzes Instantly | Exam Master',
  description: 'Quiz maker app to create interactive quizzes from PDFs and images. AI-powered quiz generator for students and teachers. Make custom quizzes in seconds with our iOS quiz maker.',
  keywords: 'quiz maker, quiz maker app, quiz creator, quiz generator, quiz builder, make a quiz, create quiz, AI quiz maker, quiz maker for students, iOS quiz maker, exam prep, AI study app, flashcards, focus timer, study planner, test maker, assessment tool',
  authors: [{ name: 'Aitolkyn Abdulvakhapova' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/Light.png',
    shortcut: '/Light.png',
    apple: '/Light.png',
  },
  metadataBase: new URL('https://exammasterapp.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Quiz Maker - Create AI-Powered Quizzes Instantly | Exam Master',
    description: 'Transform any PDF or image into interactive quizzes with our iOS quiz maker app. AI-powered quiz generator perfect for students, teachers, and exam preparation.',
    url: 'https://exammasterapp.com',
    siteName: 'Exam Master Quiz Maker',
    images: [
      {
        url: 'https://exammasterapp.com/1.png',
        width: 1200,
        height: 630,
        alt: 'Quiz Maker App - Create Interactive Quizzes with AI',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiz Maker - Create AI-Powered Quizzes Instantly',
    description: 'iOS quiz maker app to create interactive quizzes from PDFs and images. AI-powered quiz generator for students and teachers.',
    images: ['https://exammasterapp.com/1.png'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Exam Master Quiz Maker',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'iOS, Android, Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
    description: 'iOS quiz maker app to create interactive quizzes from PDFs and images. AI-powered quiz generator for students and teachers.',
    featureList: [
      'AI-powered quiz generation',
      'Create quizzes from PDFs',
      'Create quizzes from images',
      'Interactive quiz builder',
      'Progress tracking',
      'Focus timer',
      'Flashcards',
    ],
    screenshot: 'https://exammasterapp.com/1.png',
    softwareVersion: '1.0',
    applicationSubCategory: 'Quiz Maker',
  };

  return (
    <html lang="en" suppressHydrationWarning>
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