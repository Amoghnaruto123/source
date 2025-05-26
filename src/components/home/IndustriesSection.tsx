"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    name: "Electronics Manufacturing",
    description: "Components for electronic product design and manufacturing",
    details: "Access a comprehensive range of components specifically designed for electronics OEMs and contract manufacturers. From semiconductors to passive components, we offer verified parts that meet strict quality standards for consumer electronics, industrial equipment, and more."
  },
  {
    name: "Electrical Engineering",
    description: "Parts for electrical system development and maintenance",
    details: "Find reliable components for designing, building, and maintaining electrical systems. Our catalog includes power distribution components, control systems parts, and specialized electrical engineering supplies for projects of any scale."
  },
  {
    name: "Industrial Automation",
    description: "Solutions for automated industrial systems",
    details: "Discover specialized components for PLC systems, SCADA implementation, and industrial IoT applications. Our platform connects you with leading suppliers of automation components, ensuring compatibility and reliability for mission-critical industrial systems."
  },
  {
    name: "Automotive Electronics",
    description: "Specialized components for automotive applications",
    details: "Source automotive-grade electronic components that meet strict industry standards. From infotainment systems to engine control units, we offer components that withstand the demanding conditions of automotive applications while ensuring long-term reliability."
  },
  {
    name: "IoT Development",
    description: "Components for connected device innovation",
    details: "Browse our extensive selection of sensors, communication modules, microcontrollers, and development tools for creating next-generation IoT devices. We support makers and professional developers with quality components for prototyping through to production."
  },
];

const categories = [
  {
    title: "SME Solutions",
    description: "Flexible ordering and payment terms for small and medium enterprises",
    level: "Entry Level"
  },
  {
    title: "Manufacturing Solutions",
    description: "Volume pricing and priority support for medium-scale manufacturers",
    level: "Professional"
  },
  {
    title: "Enterprise Solutions",
    description: "Custom procurement workflows and dedicated account management",
    level: "Enterprise"
  }
];

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <div className="py-16 bg-white border-y border-gray-200" id="industries">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-300 mb-4">
            Industries
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-ubuntu">
            Specialized Solutions by Industry
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored sourcing experiences designed for your specific industry needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-all duration-200 rounded-lg overflow-hidden ${
                activeIndustry === index 
                  ? 'bg-orange-50 border-2 border-orange-300' 
                  : 'bg-gray-50 border border-gray-200 hover:border-orange-200'
              }`}
              onClick={() => setActiveIndustry(index)}
            >
              <div className="p-4">
                <h3 className={`text-base font-medium mb-2 ${activeIndustry === index ? 'text-orange-700' : 'text-gray-900'}`}>
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{industries[activeIndustry].name}</h3>
          <p className="text-gray-600 mb-6">{industries[activeIndustry].details}</p>
          <Button 
            variant="outline" 
            className="group text-sm"
          >
            View Industry Solutions
            <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">Solutions for Every Business Size</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-sm">
                <div className="p-6">
                  <div className="inline-block px-3 py-1 text-xs font-medium bg-orange-50 text-orange-700 rounded-full mb-4">
                    {category.level}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {category.description}
                  </p>
                  <div className="text-sm text-orange-600 flex items-center cursor-pointer hover:text-orange-700">
                    Learn more 
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
