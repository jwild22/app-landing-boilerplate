import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Exam Master: Quiz Maker - AI-Powered Study App',
  description: 'Master your exams with AI-generated quizzes from PDFs and images. Study smarter with focus timers, progress tracking, and gamified learning.',
  keywords: 'exam prep, quiz maker, AI study app, flashcards, focus timer, study planner',
  authors: [{ name: 'Aitolkyn Abdulvakhapova' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/Light.png',
    shortcut: '/Light.png',
    apple: '/Light.png',
  },
  openGraph: {
    title: 'Exam Master: Quiz Maker - AI-Powered Study App',
    description: 'Transform any PDF or image into interactive quizzes instantly. Study smarter with AI-powered quiz generation, focus timers, and progress tracking.',
    url: 'https://exammasterapp.com',
    siteName: 'Exam Master',
    images: [
      {
        url: 'https://exammasterapp.com/1.png',
        width: 1200,
        height: 630,
        alt: 'Exam Master - AI-Powered Quiz Maker App Interface',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exam Master: Quiz Maker - AI-Powered Study App',
    description: 'Master your exams with AI-generated quizzes from PDFs and images. Study smarter with focus timers, progress tracking, and gamified learning.',
    images: ['https://exammasterapp.com/1.png'],
    creator: '@exammaster_app',
    site: '@exammaster_app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-itunes-app" content="app-id=6743142831" />
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