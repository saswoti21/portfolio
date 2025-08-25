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
      color: 'hover:text-emerald-600'
    },
    {
      icon: Linkedin,
      href: mockData.personal.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-emerald-700'
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
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Saswoti Panda
            </h3>
            <p className="text-gray-300 max-w-md leading-relaxed">
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
                  className={`text-gray-400 ${social.color} bg-gray-800 hover:bg-gray-700 transition-all duration-200`}
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
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
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
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
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
                  className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white transition-all duration-200"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>
              © {currentYear} Saswoti Panda. All rights reserved.
            </p>
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>Let's connect and build something amazing together!</p>
          </div>
        </div>

        {/* Scroll to Top Indicator */}
        <div className="text-center mt-8">
          <Button
            variant="ghost"
            onClick={() => scrollToSection('#home')}
            className="text-gray-400 hover:text-white transition-all duration-200"
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