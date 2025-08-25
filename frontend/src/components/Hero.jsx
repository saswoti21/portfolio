import React from 'react';
import { ArrowDown, Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

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
      case 'phone':
        window.open('tel:+917205735662');
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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Saswoti Panda
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700">
                Data Analyst & Machine Learning Enthusiast
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Passionate about transforming data into actionable insights. Aspiring data analyst with expertise in Python, SQL, and advanced analytics tools.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Cuttack, Odisha</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>saswotipanda9@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+91-7205735662</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => handleContact('email')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 px-8 py-3 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToAbout}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 px-8 py-3 text-lg"
              >
                Learn More
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleContact('linkedin')}
                className="text-blue-600 hover:bg-blue-100 transition-all duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleContact('email')}
                className="text-blue-600 hover:bg-blue-100 transition-all duration-200"
              >
                <Mail className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <Card className="overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-2xl">
              <div className="p-8">
                <div className="w-80 h-80 relative">
                  <img
                    src="https://images.unsplash.com/photo-1736939666660-d4c776e0532c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRhdGElMjBhbmFseXN0fGVufDB8fHx8MTc1NjEzNTUyNnww&ixlib=rb-4.1.0&q=85"
                    alt="Saswoti Panda - Data Analyst"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;