import { Hero } from "./Hero/Hero";
import { TradeCategories } from "./TradeCategories/TradeCategories";
import { HowItWorks } from "./HowItWorks/HowItWorks";
import { CTASection } from "./CTASection/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TradeCategories />
      <HowItWorks />
      <CTASection />
    </>
  );
}
