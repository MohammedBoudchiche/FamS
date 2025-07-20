"use client";


import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Shield,
  Users,
  BookOpen,
  Heart
} from 'lucide-react';

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}





const Footer: React.FC = () => {
 const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);


  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Footer sections data
  const footerSections: FooterSection[] = [
    {
      title: "Resources",
      links: [
        { href: "/", label: "Home" },
        { href: "/guides", label: "Safety Guides" },
        { href: "/articles", label: "Articles & News" },
        { href: "/resources", label: "Parenting Resources" },
        { href: "/community", label: "Community Forum" }
      ]
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact Us" },
        { href: "/partnerships", label: "Partnerships" },
        { href: "/careers", label: "Careers" },
        { href: "/press", label: "Press & Media" }
      ]
    },
    {
      title: "Support",
      links: [
        { href: "/faq", label: "FAQ" },
        { href: "/help", label: "Help Center" },
        { href: "/report", label: "Report Content" },
        { href: "/emergency", label: "Emergency Resources" },
        { href: "/tips", label: "Quick Safety Tips" }
      ]
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/disclaimer", label: "Content Disclaimer" },
        { href: "/cookies", label: "Cookie Policy" },
        { href: "/accessibility", label: "Accessibility" }
      ]
    }
  ];

  // Social media links
  const socialLinks: SocialLink[] = [
    {
      href: "https://facebook.com/famsentinel",
      label: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      ariaLabel: "Follow Famsentinel on Facebook"
    },
    {
      href: "https://twitter.com/famsentinel",
      label: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      ariaLabel: "Follow Famsentinel on Twitter"
    },
    {
      href: "https://instagram.com/famsentinel",
      label: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      ariaLabel: "Follow Famsentinel on Instagram"
    },
    {
      href: "https://linkedin.com/company/famsentinel",
      label: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      ariaLabel: "Follow Famsentinel on LinkedIn"
    }
  ];

  // Newsletter subscription handler
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Simulate API call - replace with actual implementation
    try {
      // await subscribeToNewsletter(email);
      console.log('Newsletter subscription:', email);
      setEmail('');
      // Show success message
    } catch (error) {
      console.error('Subscription error:', error);
      // Show error message
    } finally {
      setIsSubscribing(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


return (
  <footer 
      className="bg-slate-900 text-white mt-auto"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {/* Brand and Mission Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-400" aria-hidden="true" />
              <h2 className="text-2xl font-bold">
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Famsentinel
                </Link>
              </h2>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Empowering families for a safer digital world through education, resources, and community support.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" aria-hidden="true" />
                Family-Focused
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3" aria-hidden="true" />
                Expert-Verified
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-3 h-3" aria-hidden="true" />
                Evidence-Based
              </span>
            </div>

            {/* Newsletter Signup */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-blue-400 mb-3">
                Stay Informed
              </h3>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    aria-label="Email address for newsletter"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Subscribe to newsletter"
                  >
                    {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                <p className="text-xs text-slate-400">
                  Weekly safety tips and digital parenting insights
                </p>
              </form>
            </div>
          </div>

          {/* Footer Navigation Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                {section.title}
              </h3>
              <nav aria-label={`${section.title} navigation`}>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-1"
                        >
                          {link.label}
                          <span className="sr-only">(opens in new tab)</span>
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-slate-300 hover:text-white transition-colors duration-200 block"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Contact Details */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                Get in Touch
              </h3>
              <div className="space-y-2">
                <a
                  href="mailto:info@famsentinel.com"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                  aria-label="Send email to Famsentinel"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  info@famsentinel.com
                </a>
                <a
                  href="mailto:support@famsentinel.com"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                  aria-label="Send email to Famsentinel support"
                >
                  <Heart className="w-4 h-4" aria-hidden="true" />
                  support@famsentinel.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 hover:bg-blue-600 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={social.ariaLabel}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-xs text-slate-400">
                Join our community for daily safety updates and parenting tips
              </p>
            </div>

            {/* Back to Top */}
            <div className="space-y-3 lg:text-right">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Scroll to top of page"
              >
                <ArrowUp className="w-4 h-4" aria-hidden="true" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-sm text-slate-400">
              <p>
                © {currentYear} Famsentinel. All Rights Reserved.
              </p>
            </div>

            {/* Service Keywords for SEO */}
            <div className="text-xs text-slate-500 text-center md:text-right">
              <p className="hidden sm:block">
                Online Child Safety • Digital Parenting • Cyberbullying Prevention • Screen Time Management
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <Link 
                href="/sitemap" 
                className="hover:text-white transition-colors"
                aria-label="View sitemap"
              >
                Sitemap
              </Link>
              <span className="text-slate-600">•</span>
              <Link 
                href="/accessibility" 
                className="hover:text-white transition-colors"
                aria-label="Accessibility information"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
)
}
export default Footer