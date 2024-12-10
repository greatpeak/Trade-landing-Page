import AboutHome from "./AboutHome";
import FeaturesSection from "./FeaturesSection";
import FAQSection from "./FAQSection";

export default function AboutUsPage() {
  return (
    <div className="md:pt-[120px] pt-[100px] text-white">
      <AboutHome />
      <FeaturesSection />
      <FAQSection />
    </div>
  );
}
