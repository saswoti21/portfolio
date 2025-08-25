import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "SQL"],
      delay: 0
    },
    {
      title: "Data Science & Analysis", 
      skills: ["Data Cleaning", "Data Analysis", "Data Visualization", "Machine Learning", "Statistics"],
      delay: 200
    },
    {
      title: "Data Visualization",
      skills: ["Power BI", "Tableau", "Google Data Studio"],
      delay: 400
    },
    {
      title: "Tools & Platforms", 
      skills: ["Google Workspace", "Excel", "Google Sheets", "Pandas", "NumPy"],
      delay: 600
    }
  ];

  const certifications = [
    "AI, ML, Computer Vision, Deep Learning, NLP & ChatGPT with Python - IIT Madras",
    "Introduction to Microsoft Excel - Simplilearn", 
    "Deloitte Australia - Data Analytics Job Simulation",
    "Tata – GenAI Powered Data Analytics Job Simulation"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-indigo-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-8 h-8 bg-violet-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise in data analytics, machine learning, and business intelligence
          </p>
        </div>

        {/* Skills Grid - Similar to reference portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`space-y-4 transform transition-all duration-1000 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${category.delay}ms` }}
            >
              <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-gradient-to-r from-blue-500 to-purple-500 pb-2 relative">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {category.title}
                </span>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 w-full transform origin-left hover:scale-x-110 transition-transform duration-300"></div>
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 text-blue-700 hover:from-blue-200 hover:via-purple-200 hover:to-indigo-200 hover:text-purple-700 hover:scale-110 transform transition-all duration-300 px-3 py-1 text-sm font-medium cursor-pointer shadow-md hover:shadow-lg"
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <Card className={`bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 shadow-xl border-0 hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Certifications & Training
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${1000 + index * 150}ms` }}
                >
                  <Badge variant="secondary" className="mb-2 bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 text-blue-700 animate-pulse">
                    Certified
                  </Badge>
                  <p className="text-sm text-gray-700 leading-relaxed">{cert}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;