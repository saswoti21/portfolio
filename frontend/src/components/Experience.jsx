import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { mockData } from '../mock/data';

const Experience = () => {
  const experiences = mockData.experience;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recent internships and hands-on experience in data analytics and machine learning
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={exp.id} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900 mb-1">
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {exp.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Key Skills & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 hover:from-blue-200 hover:to-purple-200 transition-colors duration-200"
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

        {/* Education Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 text-center mb-4">
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">Bachelor of Technology in Computer Science</h3>
                  <p className="text-gray-600">DRIEMS University, Tangi, Cuttack</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;