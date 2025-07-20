import React from 'react';
import { Quote, Star, Heart } from 'lucide-react';


const Testimonials: React.FC = () => {

    const testimonials = [
    {
      quote: "After discovering my daughter was being cyberbullied, I was devastated and didn't know where to turn. Famsentinel's cyberbullying advice walked me through exactly how to handle the situation and gave me the confidence to have those difficult conversations. The digital peace of mind I have now is priceless.",
      name: "Sarah M.",
      descriptor: "Mom of 13-year-old",
      rating: 5,
      highlight: "Cyberbullying Support"
    },
    {
      quote: "As a single dad trying to manage screen time with my two boys, I was constantly fighting battles I couldn't win. Famsentinel's practical parental guidance turned our house from a war zone into a place where technology actually brings us together. My kids respect the boundaries we've set, and I finally feel like I'm doing this right.",
      name: "David R.",
      descriptor: "Single Dad of Two",
      rating: 5,
      highlight: "Screen Time Success"
    },
    {
      quote: "I used to panic every time my teenager mentioned a new app or social platform. Now, thanks to this trusted resource, I know exactly how to research any platform and set up proper safety measures. Famsentinel didn't just teach me about online safety for kids—it gave me confidence as a parent in the digital age.",
      name: "Jennifer L.",
      descriptor: "Parent of Teenager",
      rating: 5,
      highlight: "Confident Parenting"
    },
    {
      quote: "When my grandchildren started living with us, I felt completely lost navigating their online world. Famsentinel's family online safety guides were exactly what this old-school grandparent needed. The step-by-step instructions made everything so clear, and now I can actually help keep them safe instead of worrying from the sidelines.",
      name: "Robert T.",
      descriptor: "Grandparent & Guardian",
      rating: 5,
      highlight: "Multi-Generational Help"
    }
  ];

    return (
         <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Stories from Real Parents
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear how Famsentinel has transformed digital parenting for families just like yours.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 relative hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full p-3 shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Highlight Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  <Heart className="w-3 h-3 mr-1" />
                  {testimonial.highlight}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </blockquote>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Attribution */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600">
                    {testimonial.descriptor}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="bg-gray-900 rounded-2xl p-8 text-white text-center mb-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-gray-300">Average Parent Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-gray-300">Families Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-300">Would Recommend</div>
            </div>
          </div>
        </div>

        {/* Trust Message */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-6">
            Join Thousands of Parents Who've Found Their Confidence
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            You don't have to navigate the digital world alone. Our community of parents, backed by expert guidance, is here to support your family's journey to online safety and digital wellbeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-200 text-lg">
              Start Your Free Journey
            </button>
            <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 text-lg">
              Read More Stories
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Verified Parent Reviews
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            Expert-Backed Content
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
            Community Supported
          </div>
        </div>
      </div>
    </section>
    )
}

export default Testimonials