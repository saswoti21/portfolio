import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, Linkedin, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-violet-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-blue-300 rounded-full animate-bounce opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`text-center lg:text-left space-y-8 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                  Saswoti Panda
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 transform hover:scale-105 transition-transform duration-300">
                Data Analyst & Machine Learning Enthusiast
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about transforming data into actionable insights. Aspiring data analyst with expertise in Python, SQL, and advanced analytics tools.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-200">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Cuttack, Odisha</span>
              </div>
              <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-200">
                <Mail className="w-4 h-4 text-purple-600" />
                <span>saswotipanda9@gmail.com</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => handleContact('email')}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transform hover:scale-105 hover:shadow-lg transition-all duration-300 px-8 py-3 text-lg animate-pulse hover:animate-none"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToAbout}
                className="border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transform hover:scale-105 hover:shadow-lg transition-all duration-300 px-8 py-3 text-lg"
              >
                Learn More
                <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleContact('linkedin')}
                className="text-blue-600 hover:bg-blue-100 hover:text-purple-600 transform hover:rotate-12 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleContact('email')}
                className="text-purple-600 hover:bg-purple-100 hover:text-blue-600 transform hover:rotate-12 hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Profile Picture */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1200 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="relative group">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 p-2 transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1736939666660-d4c776e0532c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRhdGElMjBhbmFseXN0fGVufDB8fHx8MTc1NjEzNTUyNnww&ixlib=rb-4.1.0&q=85"
                  alt="Saswoti Panda - Data Analyst"
                  className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Decorative elements with animations */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60 animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-50 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;