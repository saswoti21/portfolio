import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Mail, Linkedin, Download } from 'lucide-react';
import { mockData } from '../mock/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: `mailto:${mockData.personal.email}`,
      label: 'Email',
      color: 'hover:text-blue-400'
    },
    {
      icon: Linkedin,
      href: mockData.personal.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-purple-400'
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = mockData.personal.resumeUrl;
    link.download = 'Saswoti_Resume.pdf';
    link.click();
  };

  const handleSocialClick = (href) => {
    if (href.startsWith('mailto:')) {
      window.location.href = href;
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute bottom-20 left-32 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-25"></div>
        <div className="absolute bottom-40 right-10 w-5 h-5 bg-violet-300 rounded-full animate-pulse opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent hover:scale-105 transform transition-all duration-300">
              Saswoti Panda
            </h3>
            <p className="text-gray-300 max-w-md leading-relaxed hover:text-white transition-colors duration-300">
              Passionate data analyst specializing in machine learning and business intelligence. 
              Transforming complex data into actionable insights for data-driven decision making.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  onClick={() => handleSocialClick(social.href)}
                  className={`text-gray-400 ${social.color} bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm transform hover:scale-110 hover:rotate-12 transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white hover:translate-x-2 transform transition-all duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2 hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4 text-blue-400" />
                <a 
                  href={`mailto:${mockData.personal.email}`}
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  {mockData.personal.email}
                </a>
              </div>
              <div className="pt-2">
                <Button
                  onClick={handleDownloadResume}
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white hover:border-transparent transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p className="hover:text-white transition-colors duration-300">
              © {currentYear} Saswoti Panda. All rights reserved.
            </p>
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p className="hover:text-white transition-colors duration-300">Let's connect and build something amazing together!</p>
          </div>
        </div>

        {/* Scroll to Top Indicator */}
        <div className="text-center mt-8">
          <Button
            variant="ghost"
            onClick={() => scrollToSection('#home')}
            className="text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 backdrop-blur-sm transform hover:scale-110 transition-all duration-300"
            aria-label="Scroll to top"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;