import HeroSection from '@/components/home/HeroSection';
import FeatureSection from '@/components/home/FeatureSection';
import HowItWorks from '@/components/home/HowItWorks';
import CTASection from '@/components/home/CTASection';
import BrandShowcase from '@/components/home/BrandShowcase';
import IndustriesSection from '@/components/home/IndustriesSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <FeatureSection />
      <HowItWorks />
      <IndustriesSection />
      <BrandShowcase />
      <CTASection />
    </div>
  );
} 