import React from 'react';
import { Calendar, ArrowRight, Clock, TrendingUp } from 'lucide-react';


const LatestContent: React.FC =() => {
     const articles = [
    {
      title: "The Hidden Dangers of Popular Gaming Platforms: A Parent's Guide to Online Gaming Safety",
      snippet: "Recent incidents on Roblox and Minecraft have parents asking tough questions. Learn the warning signs to watch for and discover simple parental control settings that protect your child without ruining their fun.",
      publishDate: "July 18, 2025",
      readTime: "5 min read",
      thumbnailDescription: "A parent and child sitting together looking at a gaming screen with safety icons overlaid",
      category: "Gaming Safety",
      trending: true
    },
    {
      title: "Screen Time Strategies That Actually Work: Evidence-Based Digital Wellbeing for Families",
      snippet: "Forget the guilt and power struggles. New research reveals why traditional screen time limits fail, and introduces the 'Digital Nutrition' approach that's transforming how families manage technology use.",
      publishDate: "July 15, 2025",
      readTime: "7 min read",
      thumbnailDescription: "A peaceful family scene with various devices arranged thoughtfully around a living room",
      category: "Digital Wellness",
      trending: false
    },
    {
      title: "Social Media for Teens: Instagram's New Privacy Settings Every Parent Must Know",
      snippet: "Instagram just rolled out powerful new privacy features designed specifically for teen users. Here's your step-by-step guide to activating these internet privacy for kids protections before your teen's next post.",
      publishDate: "July 12, 2025",
      readTime: "4 min read",
      thumbnailDescription: "A smartphone showing Instagram interface with privacy shield icons and parental guidance symbols",
      category: "Social Media",
      trending: false
    },
    {
      title: "Cyberbullying Prevention: How to Build Your Child's Emotional Armor Before It's Needed",
      snippet: "Don't wait for cyberbullying to happen. Learn the conversation starters and confidence-building strategies that help kids recognize, report, and recover from online harassment more effectively.",
      publishDate: "July 8, 2025",
      readTime: "6 min read",
      thumbnailDescription: "A confident child using a device with supportive family figures and protective elements in the background",
      category: "Cyberbullying",
      trending: false
    }
  ];

return (
     <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stay Ahead with Expert Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest strategies, tools, and research to keep your family safe and thriving online.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
            >
              {/* Thumbnail Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-sm text-gray-600 italic mb-2">Image:</div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {article.thumbnailDescription}
                  </p>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  {article.category}
                </div>

                {/* Trending Badge */}
                {article.trending && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    TRENDING
                  </div>
                )}
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Snippet */}
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {article.snippet}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.publishDate}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {article.readTime}
                  </div>
                </div>

                {/* Read More Link */}
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-all duration-200">
                  <span className="mr-2">Read full article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-gray-600 mb-6 text-lg">
              Over 200+ expert guides covering every aspect of online child safety
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 inline-flex items-center text-lg group">
              Explore All Resources
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

        {/* Newsletter Signup Teaser */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Never Miss Critical Safety Updates
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get our weekly digest of the most important online safety news, new threats, and practical parental control tips delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap">
              Subscribe Free
            </button>
          </div>
        </div>
      </div>
    </section>
)
}

export default LatestContent