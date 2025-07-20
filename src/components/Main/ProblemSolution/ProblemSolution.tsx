import React from 'react';
import { Shield, Users, Eye, Clock, ArrowRight, CheckCircle } from 'lucide-react';


const ProblemSolution: React.FC = () => {

     const challenges = [
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      problem: "Excessive Screen Time",
      description: "You worry about how much time your children spend online, but struggle to find the right balance between digital engagement and real-world activities.",
      solution: "Evidence-based screen time guides and practical tools to help you establish healthy digital boundaries that work for your family's unique needs."
    },
    {
      icon: <Eye className="w-6 h-6 text-red-500" />,
      problem: "Inappropriate Content Exposure",
      description: "Despite your best efforts, you're concerned about your children accidentally encountering content that isn't age-appropriate or aligns with your family values.",
      solution: "Step-by-step filtering guides and platform-specific safety settings that give you control over what your children can access online."
    },
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      problem: "Online Social Risks",
      description: "From cyberbullying to online predators, the social aspects of the internet feel overwhelming and difficult to monitor without invading your child's privacy.",
      solution: "Expert advice on fostering open communication about online interactions, plus practical strategies for monitoring that respect your child's growing independence."
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      problem: "Digital Overwhelm",
      description: "The pace of technological change leaves you feeling behind, unsure of what new apps, platforms, or risks you should be aware of as a parent.",
      solution: "Regular updates and clear explanations of emerging digital trends, delivered in parent-friendly language that helps you stay informed and confident."
    }
  ];

  
    return (
         <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            You're Not Alone in This Digital Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every parent faces unique challenges in today's connected world. Here's how we help you navigate them with confidence.
          </p>
        </div>

        {/* Problems & Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {challenges.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              {/* Problem Section */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {item.problem}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Arrow Separator */}
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 rounded-full p-2">
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </div>
              </div>

              {/* Solution Section */}
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-start mb-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <h4 className="text-lg font-semibold text-gray-900">
                    Our Solution
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Take Control of Your Family's Digital Well-being?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of parents who've found peace of mind through our practical, expert-backed guidance.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 inline-flex items-center">
            Explore Our Solutions
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
    )
}

export default ProblemSolution