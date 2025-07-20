import React from 'react';
import { Shield, Clock, ArrowRight, Users, BookOpen, AlertTriangle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: "A Parent's Guide to Online Safety",
      excerpt: "Understanding digital threats and how VPNs can protect your family's online activities and personal data.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      category: "Family Safety",
      readTime: "7 min read",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 2,
      title: "What Parents Need to Know About VPNs",
      excerpt: "Clear explanations of VPN technology, benefits, and considerations for family internet usage.",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop",
      category: "Education",
      readTime: "5 min read",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Common Online Threats to Avoid",
      excerpt: "Identifying and protecting against cyber threats that target families and children online.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
      category: "Security Tips",
      readTime: "6 min read",
      icon: <AlertTriangle className="w-5 h-5" />
    }
  ];

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#001F3F" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Trusted Information for Parents
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Keeping Your Family
                <span className="block text-blue-900">Safe Online</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Independent reviews and educational resources to help parents make informed decisions 
                about online privacy and security tools for their families.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center">
                  Start Learning
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all">
                  Browse Reviews
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Independent Reviews
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  No Sponsored Content
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Parent-Focused
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=400&fit=crop"
                  alt="Family using devices safely"
                  className="w-full h-80 object-cover rounded-xl"
                />
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border-l-4 border-yellow-400">
                  <div className="flex items-center">
                    <Shield className="w-8 h-8 text-yellow-400 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Protected</div>
                      <div className="text-sm text-gray-600">Family Data</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border-l-4 border-blue-500">
                  <div className="flex items-center">
                    <Users className="w-8 h-8 text-blue-500 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Safe</div>
                      <div className="text-sm text-gray-600">Browsing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Articles Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Essential Reading for Parents
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Educational articles and guides to help you understand online safety and make informed decisions for your family
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 ">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      {article.icon}
                      <span className="ml-1">{article.category}</span>
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection