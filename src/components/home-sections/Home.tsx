import { Hero } from "./Hero/Hero";
import { TradeCategories } from "./TradeCategories/TradeCategories";
import { HowItWorks } from "./HowItWorks/HowItWorks";
import { MostRequestedServices } from "./MostRequestedServices/MostRequestedServices";
import { FeaturedBusinesses } from "./FeaturedBusinesses/FeaturedBusinesses";
import { Statistics } from "./Statistics/Statistics";
import { Testimonials } from "./Testimonials/Testimonials";
import { CTASection } from "./CTASection/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TradeCategories />
      <HowItWorks />
      <MostRequestedServices />
      <FeaturedBusinesses />
      <Statistics />
      <Testimonials />
      <CTASection />
    </>
  );
}
