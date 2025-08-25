import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, TrendingUp, BarChart, Database, Target } from 'lucide-react';
import { mockData } from '../mock/data';

const Projects = () => {
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing practical applications of data science and machine learning expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const IconComponent = getProjectIcon(project.category);
            
            return (
              <Card key={project.id} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl font-semibold text-gray-900 leading-tight">
                          {project.title}
                        </CardTitle>
                        <Badge 
                          variant="secondary"
                          className="bg-gradient-to-r from-green-100 to-green-200 text-green-700 ml-2"
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <Badge 
                        variant="outline"
                        className="text-blue-600 border-blue-200"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Project Metrics */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-3">Project Metrics:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{value}</div>
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
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleViewCode(project.id)}
                      className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
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

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Interested in collaborating?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I'm always excited to work on new data science projects and explore innovative solutions. Let's connect and discuss potential opportunities.
              </p>
              <Button 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-200"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;