import React from "react";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  date?: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "importance-of-open-source-hardware",
    title: "Importance of Open Source Hardware",
    excerpt: "Open source hardware enables innovation and transparency by making design files accessible to everyone.",
    category: "Hardware",
    date: "September 5, 2023"
  },
  {
    slug: "how-to-use-lcsc-api",
    title: "How to Use LCSC API",
    excerpt: "Integrating the LCSC API is straightforward. Learn about authentication and making requests.",
    category: "API",
    date: "August 28, 2023"
  },
  {
    slug: "introduction-to-octopart",
    title: "Introduction to Octopart",
    excerpt: "Octopart is a powerful search engine for electronic components.",
    category: "Components",
    date: "August 20, 2023"
  },
  {
    slug: "supply-chain-management-2023",
    title: "Understanding Supply Chain Management in 2023",
    excerpt: "Learn about the latest trends and technologies shaping supply chain management today.",
    category: "Supply Chain",
    date: "August 15, 2023"
  },
  {
    slug: "optimize-procurement-process",
    title: "5 Ways to Optimize Your Procurement Process",
    excerpt: "Discover practical strategies to streamline your procurement operations and reduce costs.",
    category: "Procurement",
    date: "July 23, 2023"
  },
  {
    slug: "ai-manufacturing-sourcing",
    title: "The Impact of AI on Manufacturing Sourcing",
    excerpt: "Explore how artificial intelligence is revolutionizing manufacturing sourcing decisions.",
    category: "Technology",
    date: "June 10, 2023"
  },
  {
    slug: "sustainable-sourcing-guide",
    title: "Sustainable Sourcing: A Complete Guide",
    excerpt: "A comprehensive look at implementing sustainable practices in your sourcing strategy.",
    category: "Sustainability",
    date: "May 5, 2023"
  }
];

const BlogIndex: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient - similar to resources page */}
      <div className="absolute inset-x-0 top-0 h-[30vh] -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24 relative z-10">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Sourcing</span> Insights Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert articles, guides, and industry insights to help optimize your sourcing strategy
          </p>
        </div>

        {/* Featured Post - First item gets special treatment */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow interactive-card">
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto">
                <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center p-8">
                  <h2 className="text-3xl font-bold text-white">Featured Article</h2>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="text-sm text-orange-600 font-medium mb-2">{blogPosts[0].category}</div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 hover:text-orange-600 transition-colors">
                  <Link href={`/blog/${blogPosts[0].slug}`}>
                    {blogPosts[0].title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6 text-lg">{blogPosts[0].excerpt}</p>
                <div className="flex justify-between items-center">
                  {blogPosts[0].date && <span className="text-sm text-gray-500">{blogPosts[0].date}</span>}
                  <Link 
                    href={`/blog/${blogPosts[0].slug}`}
                    className="px-4 py-2 bg-gradient-to-r from-[#f9a826] to-[#f97316] text-white rounded-md hover:from-[#f97316] hover:to-[#ea580c] transition"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Categories */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-2 justify-center">
          <button className="px-4 py-2 bg-orange-600 text-white rounded-full whitespace-nowrap">
            All Posts
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full whitespace-nowrap">
            Hardware
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full whitespace-nowrap">
            Supply Chain
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full whitespace-nowrap">
            Technology
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full whitespace-nowrap">
            Sustainability
          </button>
        </div>

        {/* Blog Posts Grid - Skip the first one as it's featured */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(1).map((post) => (
            <div key={post.slug} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow interactive-card">
              <div className="p-6">
                {post.category && (
                  <div className="text-sm text-orange-600 font-medium mb-2">{post.category}</div>
                )}
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  <Link href={`/blog/${post.slug}`} className="hover:text-orange-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  {post.date && <span className="text-sm text-gray-500">{post.date}</span>}
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-orange-600 hover:text-orange-800 font-medium flex items-center"
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

        {/* Newsletter Section */}
        <div className="mt-16 bg-white bg-opacity-70 rounded-2xl p-8 text-center shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-gradient">Subscribe</span> to Our Blog
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

export default BlogIndex; 