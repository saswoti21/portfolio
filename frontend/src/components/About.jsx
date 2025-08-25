import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Target, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      content: "Bachelor of Technology in Computer Science from DRIEMS University, Tangi, Cuttack"
    },
    {
      icon: Target,
      title: "Career Goal",
      content: "Transition into professional data analytics role with focus on Google Data Analytics certification"
    },
    {
      icon: TrendingUp,
      title: "Expertise",
      content: "Machine Learning, Data Visualization, Statistical Analysis, and Business Intelligence"
    }
  ];

  const interests = [
    "AI & Machine Learning",
    "Data Visualization",
    "Statistical Analysis",
    "Coding Challenges",
    "Business Intelligence",
    "Predictive Analytics"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover my journey, passion, and commitment to data-driven excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Main About Content */}
          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I am passionate about harnessing data to drive insightful decision-making. With a strong academic foundation and hands-on experience in data analysis, I am eager to transition into the professional world as a data analyst.
                </p>
                <p>
                  My coursework has equipped me with essential skills in programming languages such as Python, along with knowledge in data visualization tools like Tableau and Power BI. I thrive in collaborative environments and am committed to continuous learning, always seeking to contribute effectively to team projects and innovate through data-driven solutions.
                </p>
                <p>
                  I invite recruiters and fellow professionals to connect with me, explore my projects, or learn more about my journey. For collaboration opportunities or to schedule an interview call, please feel free to reach out. Let's drive impactful change together.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Highlights & Interests */}
          <div className="space-y-8">
            {/* Key Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="bg-white shadow-md border-0 hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                        <highlight.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{highlight.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Interests */}
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas of Interest</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 hover:from-blue-200 hover:to-purple-200 transition-colors duration-200 px-3 py-1"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;