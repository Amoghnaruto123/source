import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Direct Manufacturer Access",
    description: "Connect with verified global manufacturers, eliminating middlemen and reducing costs.",
  },
  {
    title: "Real-time Pricing & Inventory",
    description: "Get transparent pricing and accurate inventory status for informed purchasing decisions.",
  },
  {
    title: "Streamlined Procurement",
    description: "Simplify your entire sourcing workflow with our intuitive digital platform.",
  },
  {
    title: "Quality Assurance Guarantee",
    description: "Every component is verified for authenticity and reliability before listing.",
  },
];

export default function FeatureSection() {
  return (
    <div className="py-16 bg-white border-y border-gray-200" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-medium bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-300 mb-4">
            About SourceExpress™
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-ubuntu">
            Transforming Electronic Component Sourcing
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We connect businesses directly with verified manufacturers, bringing transparency and efficiency to the procurement process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why SourceExpress™</h3>
            <p className="text-gray-600 mb-6">
              In today's fast-paced manufacturing environment, procurement bottlenecks can slow down production and increase costs. SourceExpress™ was built to solve these challenges by creating a direct bridge between businesses and component manufacturers.
            </p>
            <p className="text-gray-600">
              Our platform eliminates the traditional sourcing obstacles, reducing lead times by up to 40% and providing complete transparency throughout the procurement process.
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="text-base font-medium text-gray-900">Cost Reduction</h4>
                  <p className="mt-1 text-sm text-gray-500">Eliminate intermediary markups and reduce procurement costs by 15-30%</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="text-base font-medium text-gray-900">Supply Chain Visibility</h4>
                  <p className="mt-1 text-sm text-gray-500">Complete transparency from order placement to delivery</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="text-base font-medium text-gray-900">Quality Assurance</h4>
                  <p className="mt-1 text-sm text-gray-500">Rigorous verification process for all suppliers and components</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Platform Features</h3>
            <div className="grid grid-cols-1 gap-6 mt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-orange-500 text-white">
                    {index + 1}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-gray-900">{feature.title}</h4>
                    <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
