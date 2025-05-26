"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const benefits = [
    "Access to 2000+ verified suppliers",
    "Transparent pricing & no hidden fees",
    "Secure transactions with buyer protection",
    "Dedicated customer support"
  ];

  return (
    <div className="section bg-gradient-to-b from-orange-50 to-white border-t border-gray-200" id="contact">
      <div
        ref={sectionRef}
        className="fade-in-section max-w-6xl mx-auto"
      >
        <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-white p-8 md:p-12">
              <div className="max-w-md mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Ready to Simplify Your Sourcing?
                </h2>
                
                <p className="text-lg text-gray-600 mb-8">
                  Join thousands of businesses that have streamlined their procurement with SourceExpress™.
                </p>
                
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <Button asChild size="lg" className="w-full group">
                    <Link href="/signup">
                      Create Free Account
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  
                  <div className="text-center text-sm text-gray-500">
                    No credit card required. Free plan available.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white p-8 md:p-12">
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-6">
                  Enterprise Solutions
                </h3>
                
                <p className="mb-8">
                  Looking for custom solutions or high-volume procurement? Our enterprise team is ready to help with:
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-white mr-3"></div>
                    <span>API integrations with your ERP system</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-white mr-3"></div>
                    <span>Dedicated account management</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-white mr-3"></div>
                    <span>Custom procurement workflows</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-white mr-3"></div>
                    <span>Volume-based discounts</span>
                  </li>
                </ul>
                
                <CardContent className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <h4 className="text-xl font-semibold mb-4 text-white">Contact Us</h4>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                      <a href="mailto:support@source.express" className="hover:underline">support@source.express</a>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                      <span>+91 1800-SOURCE</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-white text-orange-600 hover:bg-white/90 group"
                      asChild
                    >
                      <a href="mailto:support@source.express?subject=Demo Request">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Schedule Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
