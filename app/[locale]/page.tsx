import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { getDictionary } from '@/get-dictionary'
import type { Locale } from '@/i18n-config'

export default async function Home({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader dict={dict} locale={params.locale} />
      <main className="flex-1">
        <HeroSection dict={dict} locale={params.locale} />
        <FeaturesSection dict={dict} />
        <HowItWorksSection dict={dict} />
        <TestimonialsSection dict={dict} />
        <FAQSection dict={dict} />
        <CTASection dict={dict} locale={params.locale} />
      </main>
      <SiteFooter dict={dict} locale={params.locale} />
    </div>
  );
}
