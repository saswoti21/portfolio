import React from 'react';
import { ArrowDown, Mail, Linkedin, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContact = (type) => {
    switch (type) {
      case 'email':
        window.open('mailto:saswotipanda9@gmail.com');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/saswoti-panda', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Saswoti Panda
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700">
              Data Analyst & Machine Learning Enthusiast
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Passionate about transforming data into actionable insights. Aspiring data analyst with expertise in Python, SQL, and advanced analytics tools.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>Cuttack, Odisha</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-600" />
              <span>saswotipanda9@gmail.com</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleContact('email')}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 px-8 py-3 text-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              onClick={scrollToAbout}
              className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all duration-200 px-8 py-3 text-lg"
            >
              Learn More
              <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleContact('linkedin')}
              className="text-emerald-600 hover:bg-emerald-100 transition-all duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleContact('email')}
              className="text-emerald-600 hover:bg-emerald-100 transition-all duration-200"
            >
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;