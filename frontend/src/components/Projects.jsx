import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, TrendingUp, BarChart, Database, Target } from 'lucide-react';
import { mockData } from '../mock/data';

const Projects = () => {
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

  const projects = mockData.projects;

  const getProjectIcon = (category) => {
    switch (category) {
      case 'Machine Learning':
        return TrendingUp;
      case 'Data Visualization':
        return BarChart;
      default:
        return Database;
    }
  };

  const handleViewProject = (projectId) => {
    // Mock functionality - in real implementation, this would link to project details
    console.log(`Viewing project ${projectId}`);
  };

  const handleViewCode = (projectId) => {
    // Mock functionality - in real implementation, this would link to GitHub
    console.log(`Viewing code for project ${projectId}`);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-indigo-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-violet-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing practical applications of data science and machine learning expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = getProjectIcon(project.category);
            
            return (
              <Card 
                key={project.id} 
                className={`bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-6 transition-all duration-500 h-full group cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 p-3 rounded-lg flex-shrink-0 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        <Badge 
                          variant="secondary"
                          className="bg-gradient-to-r from-green-100 to-green-200 text-green-700 ml-2 animate-pulse hover:animate-none hover:scale-110 transition-transform duration-200"
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <Badge 
                        variant="outline"
                        className="text-blue-600 border-blue-200 hover:bg-blue-50 hover:scale-105 transition-all duration-200"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
                          <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0 animate-pulse" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 hover:scale-110 transform transition-all duration-300 cursor-pointer"
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Metrics */}
                  <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 p-4 rounded-lg group-hover:shadow-inner transition-all duration-300">
                    <h4 className="font-medium text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">Project Metrics:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                        <div key={key} className="text-center transform hover:scale-110 transition-transform duration-200">
                          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      onClick={() => handleViewProject(project.id)}
                      className="flex-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleViewCode(project.id)}
                      className="border-blue-500 text-blue-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;