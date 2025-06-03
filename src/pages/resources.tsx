import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, FileText, Video, MonitorSmartphone, Calculator, BookMarked, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const Resources = () => {
  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Resource categories based on the screenshot
  const resourceCategories = [
    {
      id: 1,
      title: "eBooks",
      icon: <BookOpen className="h-10 w-10 text-white" />,
      description: "Access comprehensive guides on sourcing, procurement, and supply chain management.",
      link: "https://www.goodreads.com/shelf/show/manufacturing",
      externalLink: true,
      bgColor: "bg-blue-600",
      imageUrl: "https://ourlibrary.mornpen.vic.gov.au/files/sharedassets/ourlibrary/v/1/elibrary/images/ebook.png?w=1200"
    },
    {
      id: 2,
      title: "Articles & Guides",
      icon: <FileText className="h-10 w-10 text-white" />,
      description: "Browse our library of technical articles, open source projects, and how-to resources.",
      link: "https://www.themanufacturer.com/",
      externalLink: true,
      bgColor: "bg-green-600",
      imageUrl: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-05/21/full/1747846484-1335.jpg?im=FitAndFill=(826,465)"
    },
    {
      id: 3,
      title: "Blog Posts",
      icon: <BookMarked className="h-10 w-10 text-white" />,
      description: "A venue for viewpoints from industry experts, insiders, and our supplier partners.",
      link: "/blog",
      externalLink: false,
      bgColor: "bg-teal-600",
      imageUrl: "https://www.droptica.com/sites/droptica.com/files/media/image/manufacturing-blogs.png"
    },
    {
      id: 4,
      title: "Manufacturer Resources",
      icon: <BookOpen className="h-10 w-10 text-white" />,
      description: "Take a closer look at the latest technologies and products from our supplier partners.",
      link: "https://www.investopedia.com/terms/m/manufacturing-resource-planning.asp",
      externalLink: true,
      bgColor: "bg-blue-500",
      imageUrl: "https://www.salesforce.com/content/dam/web/en_us/www/images/nam-manufacturers/nam-iot-1-Phased-Approach-Industrial-IoT-Success.png"
    },
    {
      id: 5,
      title: "Videos",
      icon: <Video className="h-10 w-10 text-white" />,
      description: "Our video library boasts updates on new products and hot topics from across the industry.",
      link: "#videos",
      externalLink: false,
      bgColor: "bg-blue-600",
      imageUrl: "https://cdn.statically.io/img/flearningstudio.com/wp-content/uploads/2024/11/safety-videos-for-manufacturing-420x370.jpg?quality=100&f=auto"
    },
    {
      id: 6,
      title: "Applications & Technologies",
      icon: <MonitorSmartphone className="h-10 w-10 text-white" />,
      description: "Review the latest trends with tutorials and resources on vertical markets.",
      link: "https://www.sw.siemens.com/en-US/technology/manufacturing-resource-planning-mrp-ii/",
      externalLink: true,
      bgColor: "bg-indigo-600",
      imageUrl: "https://itchronicles.com/wp-content/uploads/2020/12/future-of-manufacturing-technology-1024x683.jpg"
    }
  ];

  // Example blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Supply Chain Management in 2023",
      excerpt: "Learn about the latest trends and technologies shaping supply chain management today.",
      date: "August 15, 2023",
      category: "Supply Chain",
      slug: "supply-chain-management-2023",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5612AQF8LbY18XHmKQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1694130598515?e=2147483647&v=beta&t=9wj4C1iXJjKMV8-_5gRhDi57Lb8F5RbJnFuU1dg6E_E"
    },
    {
      id: 2,
      title: "5 Ways to Optimize Your Procurement Process",
      excerpt: "Discover practical strategies to streamline your procurement operations and reduce costs.",
      date: "July 23, 2023",
      category: "Procurement",
      slug: "optimize-procurement-process",
      imageUrl: "https://www.storm-procurement.com/hubfs/Blog%20Post/News%20Page%20Template-20.png"
    },
    {
      id: 3,
      title: "The Impact of AI on Manufacturing Sourcing",
      excerpt: "Explore how artificial intelligence is revolutionizing manufacturing sourcing decisions.",
      date: "June 10, 2023",
      category: "Technology",
      slug: "ai-manufacturing-sourcing",
      imageUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg"
    },
    {
      id: 4,
      title: "Sustainable Sourcing: A Complete Guide",
      excerpt: "A comprehensive look at implementing sustainable practices in your sourcing strategy.",
      date: "May 5, 2023",
      category: "Sustainability",
      slug: "sustainable-sourcing-guide",
      imageUrl: "https://www.lythouse.com/wp-content/uploads/2024/08/Sustainable-Sourcing_compressed.webp"
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How can I access the complete resource library?",
      answer: "You can access our complete resource library by creating a free account and logging in. This will give you access to all eBooks, articles, guides, and other resources available on our platform."
    },
    {
      question: "Are all resources free to access?",
      answer: "Most of our resources are free to access with a basic account. Some premium content and in-depth guides may require a premium subscription, which provides unlimited access to our entire collection of resources."
    },
    {
      question: "How often are new resources added?",
      answer: "We update our resource library weekly with new articles, guides, and case studies. Our blog is updated 2-3 times per week with the latest industry insights and trends."
    },
    {
      question: "Can I contribute content to the resources section?",
      answer: "Yes! We welcome contributions from industry experts. If you're interested in submitting an article, case study, or other content, please contact our editorial team through the Contact page."
    },
    {
      question: "How can I get notified about new resources?",
      answer: "You can subscribe to our newsletter to receive weekly updates on new resources, articles, and industry insights. You can also follow us on social media for real-time updates."
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background gradient - adjusted to match home page */}
      <div className="absolute inset-x-0 top-0 h-[30vh] -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24 relative z-10">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Resources</span> & Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert articles, guides, and case studies to help you optimize your sourcing strategy
          </p>
        </div>

        {/* Resource Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resourceCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow interactive-card">
              <div className={`h-48 overflow-hidden relative`}>
                {category.imageUrl && (
                  <img 
                    src={category.imageUrl} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                {category.externalLink ? (
                  <a 
                    href={category.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center"
                  >
                    View all resources
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <Link 
                    href={category.link}
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center"
                  >
                    View all resources
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Latest Content Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              <span className="text-gradient">Latest</span> Content
            </h2>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow interactive-card">
                <div className="h-48 overflow-hidden">
                  {post.imageUrl && (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="text-sm text-orange-600 font-medium mb-2">{post.category}</div>
                  <h3 className="font-bold text-xl mb-2 hover:text-orange-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center"
                    >
                      Read more
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-gradient">Frequently</span> Asked Questions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our resources and how to get the most out of them
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((faq, index) => (
              <div 
                key={index} 
                className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  {openFaq === index ? 
                    <ChevronUp className="h-5 w-5 text-orange-500" /> : 
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  }
                </button>
                <div 
                  className={`px-6 pb-4 transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-white bg-opacity-70 rounded-2xl p-8 text-center shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-gradient">Subscribe</span> to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Stay updated with the latest industry insights, tips, and best practices delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
            />
            <button className="px-6 py-2 bg-gradient-to-r from-[#f9a826] to-[#f97316] text-white rounded-md hover:from-[#f97316] hover:to-[#ea580c] transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;