import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

interface BlogPost {
  title: string;
  content: string;
  category?: string;
  date?: string;
  author?: string;
}

interface BlogContent {
  [key: string]: BlogPost;
}

const blogContent: BlogContent = {
  "importance-of-open-source-hardware": {
    title: "Importance of Open Source Hardware",
    content:
      "Open source hardware enables innovation and transparency by making design files accessible to everyone. This article explores its impact on the electronics industry.",
    category: "Hardware",
    date: "September 5, 2023",
    author: "Alex Chen"
  },
  "how-to-use-lcsc-api": {
    title: "How to Use LCSC API",
    content:
      "Integrating the LCSC API is straightforward. This tutorial walks you through authentication, making requests, and displaying part data in your UI.",
    category: "API",
    date: "August 28, 2023",
    author: "Sarah Johnson"
  },
  "introduction-to-octopart": {
    title: "Introduction to Octopart",
    content:
      "Octopart is a powerful search engine for electronic components. Learn how to use it for real-time part comparison and sourcing.",
    category: "Components",
    date: "August 20, 2023",
    author: "Michael Rivera"
  },
  "supply-chain-management-2023": {
    title: "Understanding Supply Chain Management in 2023",
    content:
      "Supply chain management continues to evolve with new technologies and approaches. This article explores the latest trends including blockchain for transparency, AI for demand forecasting, and sustainable sourcing practices that are reshaping how companies manage their supply chains in 2023.",
    category: "Supply Chain",
    date: "August 15, 2023",
    author: "Jennifer Park"
  },
  "optimize-procurement-process": {
    title: "5 Ways to Optimize Your Procurement Process",
    content:
      "Effective procurement is critical for manufacturing success. This guide covers five proven strategies to streamline your procurement: implementing e-procurement systems, consolidating suppliers, establishing clear KPIs, automating approval workflows, and leveraging data analytics for better decision-making.",
    category: "Procurement",
    date: "July 23, 2023",
    author: "David Wilson"
  },
  "ai-manufacturing-sourcing": {
    title: "The Impact of AI on Manufacturing Sourcing",
    content:
      "Artificial intelligence is transforming how manufacturers approach sourcing decisions. From predictive analytics that forecast supplier performance to machine learning algorithms that identify optimal component alternatives, this article examines how AI is helping companies reduce costs, mitigate risks, and discover new opportunities.",
    category: "Technology",
    date: "June 10, 2023",
    author: "Lisa Zhang"
  },
  "sustainable-sourcing-guide": {
    title: "Sustainable Sourcing: A Complete Guide",
    content:
      "This comprehensive guide helps manufacturers implement sustainable sourcing practices. Learn how to evaluate suppliers' environmental impact, reduce carbon footprint throughout your supply chain, incorporate circular economy principles, and meet increasing regulatory requirements while maintaining profitability and production efficiency.",
    category: "Sustainability",
    date: "May 5, 2023",
    author: "Robert Green"
  }
};

const BlogPost: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = slug && typeof slug === 'string' ? blogContent[slug] : null;

  if (!post) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="p-8 text-gray-600">Loading...</p>
    </div>
  );

  // Create paragraphs from content
  const paragraphs = post.content.split('. ').map((sentence, index, array) => {
    // Add period back except for the last sentence if it doesn't end with one
    const text = index < array.length - 1 ? sentence + '.' : 
      (sentence.endsWith('.') ? sentence : sentence + '.');
    return text;
  });

  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-x-0 top-0 h-[30vh] -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24 relative z-10">
        {/* Back to blog link */}
        <div className="mb-8">
          <Link href="/blog" className="text-orange-600 hover:text-orange-700 flex items-center">
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all posts
          </Link>
        </div>

        {/* Article header */}
        <div className="max-w-4xl mx-auto mb-10">
          {post.category && (
            <div className="text-sm text-orange-600 font-medium mb-3">{post.category}</div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{post.title}</span>
          </h1>
          
          <div className="flex items-center text-gray-600 mb-10">
            {post.date && (
              <span className="mr-4">{post.date}</span>
            )}
            {post.author && (
              <span>By <span className="font-medium text-gray-800">{post.author}</span></span>
            )}
          </div>
          
          {/* Featured image */}
          <div className="w-full h-72 md:h-96 bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl mb-10 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">Featured Image</h2>
          </div>
        </div>

        {/* Article content */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 mb-16">
          {paragraphs.map((paragraph, idx) => (
            <p key={idx} className="text-gray-800 leading-relaxed mb-6 text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Related articles */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-gradient">Related</span> Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(blogContent)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, relatedPost]) => (
                <div key={key} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow interactive-card">
                  <div className="p-6">
                    {relatedPost.category && (
                      <div className="text-sm text-orange-600 font-medium mb-2">{relatedPost.category}</div>
                    )}
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      <Link href={`/blog/${key}`} className="hover:text-orange-600 transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <div className="flex justify-between items-center mt-4">
                      {relatedPost.date && <span className="text-sm text-gray-500">{relatedPost.date}</span>}
                      <Link 
                        href={`/blog/${key}`}
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
              ))
            }
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="max-w-5xl mx-auto mt-16 bg-white bg-opacity-70 rounded-2xl p-8 text-center shadow-md">
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

export default BlogPost; 