"use client"

import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import BrandShowcase from "@/components/home/BrandShowcase";
import FeatureSection from "@/components/home/FeatureSection";
import HowItWorks from "@/components/home/HowItWorks";
import IndustriesSection from "@/components/home/IndustriesSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for fade-in sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Target all elements with the fade-in-section class
    document.querySelectorAll(".fade-in-section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll(".fade-in-section").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <HeroSection />
      <BrandShowcase />
      <FeatureSection />
      <HowItWorks />
      <IndustriesSection />
      <CTASection />
    </>
  );
};

export default Index;
