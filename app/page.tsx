import { HeroSection } from "@/components/sections/hero-section"
import { DemoCardSection } from "@/components/sections/card-section"
import { HowItWorksSection } from "@/components/sections/works-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { PricingSection } from "@/components/sections/pricing-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <PricingSection />
    </main>
  )
}
