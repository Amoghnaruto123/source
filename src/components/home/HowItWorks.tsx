"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Register",
    description: "Create your business account with simple verification",
    details: "Complete a streamlined registration process that requires basic business information and GST verification. We've designed our onboarding to be quick and efficient so you can start sourcing immediately."
  },
  {
    number: "02",
    title: "Search",
    description: "Find components with powerful search and filters",
    details: "Use our advanced search tools to quickly locate specific components by part number, manufacturer, or specifications. Our intelligent filters help you narrow down options based on availability, certification, and pricing."
  },
  {
    number: "03",
    title: "Request Quote",
    description: "Submit RFQs to multiple verified suppliers",
    details: "Send detailed request-for-quotes to multiple suppliers simultaneously. Our standardized RFQ format ensures you receive comparable quotes with all necessary information for informed decision making."
  },
  {
    number: "04",
    title: "Order",
    description: "Place orders with secure payment processing",
    details: "Once you've selected your supplier, place your order through our secure platform. We offer flexible payment options, including credit terms for qualified businesses, and handle all transaction processing securely."
  },
  {
    number: "05",
    title: "Track",
    description: "Monitor deliveries and manage documentation",
    details: "Track your orders in real-time from processing to delivery. Access all order documentation, including quality certificates, shipping details, and invoices, in your centralized dashboard."
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="py-16 bg-gray-50 border-y border-gray-200" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-300 mb-4">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-ubuntu">
            How SourceExpress™ Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, efficient process designed for modern procurement needs
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`cursor-pointer p-6 transition-colors ${
                  activeStep === index 
                    ? "bg-orange-50 border-b-2 md:border-b-0 md:border-t-2 border-orange-500" 
                    : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="text-orange-500 font-mono font-bold mb-2">{step.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="p-8 border-t border-gray-200 bg-gray-50">
            <div className="flex items-start">
              <div className="hidden md:flex w-16 h-16 bg-orange-100 rounded-full flex-shrink-0 items-center justify-center text-orange-600 font-bold text-xl">
                {steps[activeStep].number}
              </div>
              <div className="md:ml-6 flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{steps[activeStep].title}</h3>
                <p className="text-gray-600">{steps[activeStep].details}</p>
                
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex space-x-2">
                    {steps.map((_, idx) => (
                      <button 
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all ${
                          activeStep === idx ? 'bg-orange-500 w-6' : 'bg-gray-300'
                        }`}
                        onClick={() => setActiveStep(idx)}
                      />
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="text-sm group"
                    onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                  >
                    Next Step
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-lg font-semibold text-gray-900 mb-2">For Manufacturers</div>
            <p className="text-gray-600 text-sm mb-4">Join our platform to connect directly with quality-focused businesses seeking reliable components</p>
            <Button variant="outline" size="sm" className="text-sm">Learn More</Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-lg font-semibold text-gray-900 mb-2">For Businesses</div>
            <p className="text-gray-600 text-sm mb-4">Streamline your procurement process and access verified suppliers with transparent pricing</p>
            <Button variant="outline" size="sm" className="text-sm">Learn More</Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-lg font-semibold text-gray-900 mb-2">Enterprise Solutions</div>
            <p className="text-gray-600 text-sm mb-4">Custom integration options and dedicated account management for high-volume requirements</p>
            <Button variant="outline" size="sm" className="text-sm">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
