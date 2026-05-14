import { Hero } from "./Hero/Hero";
import { JobSlider } from "./JobSlider/JobSlider";
import { WhyChooseUs } from "./WhyChooseUs/WhyChooseUs";
import { HowItWorks } from "./HowItWorks/HowItWorks";
import { CTASection } from "./CTASection/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <JobSlider />
      <WhyChooseUs />
      <CTASection />
      <HowItWorks />
    </>
  );
}
