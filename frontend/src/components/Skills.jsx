import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Code, Database, BarChart3, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "from-blue-600 to-blue-700",
      skills: [
        { name: "Python", level: 85, description: "Data analysis, ML algorithms, automation" },
        { name: "SQL", level: 80, description: "Database queries, data manipulation" }
      ]
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      color: "from-purple-600 to-purple-700",
      skills: [
        { name: "Power BI", level: 75, description: "Interactive dashboards, business intelligence" },
        { name: "Tableau", level: 70, description: "Data storytelling, advanced visualizations" },
        { name: "Google Data Studio", level: 80, description: "Automated reporting, dashboard creation" }
      ]
    },
    {
      icon: Database,
      title: "Data Analytics Tools",
      color: "from-green-600 to-green-700",
      skills: [
        { name: "Excel", level: 90, description: "Advanced formulas, pivot tables, data modeling" },
        { name: "Google Sheets", level: 85, description: "Collaborative analysis, automation" },
        { name: "Pandas", level: 80, description: "Data manipulation and analysis" },
        { name: "NumPy", level: 75, description: "Numerical computing and statistics" }
      ]
    },
    {
      icon: Settings,
      title: "Tools & Platforms",
      color: "from-orange-600 to-orange-700",
      skills: [
        { name: "Google Workspace", level: 85, description: "Collaborative productivity suite" },
        { name: "Machine Learning", level: 70, description: "Scikit-learn, model development" },
        { name: "Statistical Analysis", level: 75, description: "Hypothesis testing, data interpretation" }
      ]
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
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise in data analytics, machine learning, and business intelligence
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-semibold text-gray-900">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-900">{skill.name}</h4>
                      <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-200"
                    />
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-900 text-center">
              Certifications & Training
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <Badge variant="secondary" className="mb-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700">
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