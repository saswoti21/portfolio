import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Database, BarChart3, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "SQL"]
    },
    {
      title: "Data Science & Analysis", 
      skills: ["Data Cleaning", "Data Analysis", "Data Visualization", "Machine Learning", "Statistics"]
    },
    {
      title: "Data Visualization",
      skills: ["Power BI", "Tableau", "Google Data Studio"]
    },
    {
      title: "Tools & Platforms", 
      skills: ["Google Workspace", "Excel", "Google Sheets", "Pandas", "NumPy"]
    }
  ];

  const certifications = [
    "AI, ML, Computer Vision, Deep Learning, NLP & ChatGPT with Python - IIT Madras",
    "Introduction to Microsoft Excel - Simplilearn", 
    "Deloitte Australia - Data Analytics Job Simulation",
    "Tata – GenAI Powered Data Analytics Job Simulation"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise in data analytics, machine learning, and business intelligence
          </p>
        </div>

        {/* Skills Grid - Similar to reference portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-emerald-500 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 hover:from-emerald-200 hover:to-teal-200 transition-colors duration-200 px-3 py-1 text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-900 text-center">
              Certifications & Training
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <Badge variant="secondary" className="mb-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700">
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