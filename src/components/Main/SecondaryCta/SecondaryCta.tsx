import React, { useState } from 'react';
import { Mail, Shield, ArrowRight, Bell, Lock, Users, CheckCircle } from 'lucide-react';


const SecondaryCta: React.FC = () => {
    const [activeOption, setActiveOption] = useState('newsletter');
  const [email, setEmail] = useState('');
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        
        {/* Option Toggle (for demo purposes) */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 inline-flex">
            <button
              onClick={() => setActiveOption('newsletter')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeOption === 'newsletter' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Newsletter Option
            </button>
            <button
              onClick={() => setActiveOption('solutions')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeOption === 'solutions' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Solutions Option
            </button>
          </div>
        </div>

        {/* Newsletter Signup CTA */}
        {activeOption === 'newsletter' && (
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10">
                <Bell className="w-16 h-16" />
              </div>
              <div className="absolute bottom-10 right-10">
                <Mail className="w-20 h-20" />
              </div>
              <div className="absolute top-20 right-20">
                <Shield className="w-12 h-12" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Never Miss Critical Safety Updates
              </h2>

              {/* Supporting Text */}
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get weekly online safety tips and the latest insights on family digital wellbeing delivered straight to your inbox. Join 25,000+ parents who trust our parenting resources to keep their families safe online.
              </p>

              {/* Benefits List */}
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-blue-100">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                  <span>Weekly Safety Tips</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                  <span>Threat Alerts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                  <span>Expert Guidance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                  <span>Community Access</span>
                </div>
              </div>

              {/* Email Signup Form */}
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300/50 text-lg"
                  />
                  <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors duration-200 text-lg whitespace-nowrap inline-flex items-center justify-center">
                    Join Our Community
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
                <p className="text-sm text-blue-200 mt-4">
                  Free forever. Unsubscribe anytime. No spam, just valuable insights.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Solutions/Services CTA */}
        {activeOption === 'solutions' && (
          <div className="bg-gradient-to-br from-purple-700 via-blue-700 to-blue-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8">
                <Shield className="w-20 h-20" />
              </div>
              <div className="absolute bottom-8 right-8">
                <Lock className="w-16 h-16" />
              </div>
              <div className="absolute top-16 right-16">
                <Users className="w-14 h-14" />
              </div>
              <div className="absolute bottom-20 left-20">
                <CheckCircle className="w-12 h-12" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready for Complete Digital Peace of Mind?
              </h2>

              {/* Supporting Text */}
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Go beyond basic tips with our comprehensive parental control solutions and family safety tools. Discover how Famsentinel can provide a truly secure online environment tailored to your family's unique needs.
              </p>

              {/* Feature Highlights */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Shield className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Advanced Protection</h3>
                  <p className="text-purple-100 text-sm">Comprehensive parental control solutions for every device and platform</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Users className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Expert Community</h3>
                  <p className="text-purple-100 text-sm">Connect with specialists and parents for ongoing support</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Lock className="w-12 h-12 text-green-300 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Custom Solutions</h3>
                  <p className="text-purple-100 text-sm">Personalized family safety tools that grow with your children</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-purple-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 text-lg inline-flex items-center group">
                  Explore Our Solutions
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button className="border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-200 text-lg">
                  Schedule a Demo
                </button>
              </div>

              {/* Trust Indicator */}
              <p className="text-sm text-purple-200 mt-6">
                Trusted by 50,000+ families • 30-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        )}

        {/* Bottom Trust Elements */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Privacy Protected
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            Expert Approved
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
            Family Focused
          </div>
        </div>
      </div>
    </section>
    )
}
export default SecondaryCta