import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Target, TrendingUp } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      content: "Bachelor of Technology in Computer Science from DRIEMS University, Tangi, Cuttack",
      delay: 200
    },
    {
      icon: Target,
      title: "Career Goal",
      content: "Transition into professional data analytics role with focus on Google Data Analytics certification",
      delay: 400
    },
    {
      icon: TrendingUp,
      title: "Expertise",
      content: "Machine Learning, Data Visualization, Statistical Analysis, and Business Intelligence",
      delay: 600
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-indigo-300 rounded-full animate-pulse opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover my journey, passion, and commitment to data-driven excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Main About Content */}
          <Card className={`bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">My Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="hover:text-gray-800 transition-colors duration-300">
                  I am passionate about harnessing data to drive insightful decision-making. With a strong academic foundation and hands-on experience in data analysis, I am eager to transition into the professional world as a data analyst.
                </p>
                <p className="hover:text-gray-800 transition-colors duration-300">
                  My coursework has equipped me with essential skills in programming languages such as Python, along with knowledge in data visualization tools like Tableau and Power BI. I thrive in collaborative environments and am committed to continuous learning, always seeking to contribute effectively to team projects and innovate through data-driven solutions.
                </p>
                <p className="hover:text-gray-800 transition-colors duration-300">
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
                <Card 
                  key={index} 
                  className={`bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                  style={{ transitionDelay: `${highlight.delay}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 p-3 rounded-lg transform hover:rotate-12 transition-transform duration-300">
                        <highlight.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">{highlight.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed hover:text-gray-800 transition-colors duration-300">{highlight.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Interests */}
            <Card className={`bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Areas of Interest</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 text-blue-700 hover:from-blue-200 hover:via-purple-200 hover:to-indigo-200 hover:text-purple-700 hover:scale-110 transform transition-all duration-300 px-3 py-1 cursor-pointer shadow-md hover:shadow-lg"
                      style={{ animationDelay: `${1000 + index * 100}ms` }}
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