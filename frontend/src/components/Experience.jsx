import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { mockData } from '../mock/data';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = mockData.experience;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-25"></div>
        <div className="absolute top-3/4 right-1/3 w-5 h-5 bg-violet-300 rounded-full animate-pulse opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recent internships and hands-on experience in data analytics and machine learning
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.id} 
              className={`bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 cursor-pointer group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 p-3 rounded-lg flex-shrink-0 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                        <div className="flex items-center gap-1 hover:text-purple-600 transition-colors duration-200">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {exp.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Key Skills & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 text-blue-700 hover:from-blue-200 hover:via-purple-200 hover:to-indigo-200 hover:text-purple-700 hover:scale-110 transform transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                        style={{ animationDelay: `${skillIndex * 100}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;