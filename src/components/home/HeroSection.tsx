"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background elements - simplified */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center">
          <div>
            <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-300 mb-6">
              B2B Sourcing Platform
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 max-w-4xl mx-auto font-ubuntu">
            Effortless Sourcing, <span className="text-gradient">Endless Possibilities</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto text-center">
            Your one-stop B2B e-commerce platform for electrical and electronic manufacturing and repair.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="group">
              <Link href="/signup">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link href="#faq">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
