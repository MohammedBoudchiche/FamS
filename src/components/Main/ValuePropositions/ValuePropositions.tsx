import React from 'react';
import { BookOpen, Settings, Users, Lightbulb, ArrowRight, Star } from 'lucide-react';


const ValuePropositions: React.FC = () => {

 const valueProps = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Expert-Backed Guidance",
      description: "Access comprehensive guides on online child safety, cyberbullying prevention, and privacy settings written by digital safety experts. Get clear, actionable advice that cuts through the confusion and gives you confidence in your parenting decisions.",
      keyBenefit: "Transform from worried to informed"
    },
    {
      icon: <Settings className="w-8 h-8 text-green-600" />,
      title: "Practical Parental Control Tools",
      description: "Step-by-step tutorials for setting up effective screen time management and safety controls across all devices. Our family tech guidance makes implementing internet safety for kids straightforward, even if you're not tech-savvy.",
      keyBenefit: "Set up protection in minutes, not hours"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Supportive Parent Community",
      description: "Connect with like-minded parents navigating similar digital wellbeing challenges. Share experiences, get parental control tips, and find reassurance that you're not alone in protecting your family's online experience.",
      keyBenefit: "Never feel alone in your journey"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-600" />,
      title: "Trending Safety Alerts",
      description: "Stay ahead of emerging online threats with timely updates about new apps, platforms, and digital trends. Our expert analysis helps you understand what matters for your family's internet safety without overwhelming you with unnecessary panic.",
      keyBenefit: "Stay informed, not overwhelmed"
    }
  ];
    return (
     <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for Digital Peace of Mind
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Famsentinel brings together expert knowledge, practical tools, and community support to make online child safety manageable and effective.
          </p>
        </div>

        {/* Value Propositions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <article 
              key={index} 
              className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              {/* Icon and Key Benefit */}
              <div className="flex items-start justify-between mb-6">
                <div className="bg-white rounded-xl p-4 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  {prop.icon}
                </div>
                <div className="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 mr-1 text-yellow-500" />
                  {prop.keyBenefit}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-200">
                {prop.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {prop.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-200">
                <span className="mr-2">Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </article>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">50,000+</div>
                <div className="text-sm text-gray-600">Parents Protected</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Safety Guides</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-full p-2 mr-3">
                <Star className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">Parent Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of parents who've transformed their approach to digital wellbeing
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 inline-flex items-center text-lg">
            Start Your Free Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
)
}

export default ValuePropositions