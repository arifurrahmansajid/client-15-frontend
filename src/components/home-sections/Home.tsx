import { Hero } from "./Hero/Hero";
import { JobSlider } from "./JobSlider/JobSlider";
import { WhyChooseUs } from "./WhyChooseUs/WhyChooseUs";
import { MostReviewed } from "./MostReviewed/MostReviewed";
import { BlogSection } from "./BlogSection/BlogSection";
import { MostRequestedServices } from "./MostRequestedServices/MostRequestedServices";
import { HowItWorks } from "./HowItWorks/HowItWorks";
import { CTASection } from "./CTASection/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <MostRequestedServices />
      <HowItWorks />
      <JobSlider />
      <WhyChooseUs />
      <MostReviewed />
      <CTASection />
      <BlogSection />
    </>
  );
}
