import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, MapPin, Linkedin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { mockData } from '../mock/data';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: mockData.personal.email,
      href: `mailto:${mockData.personal.email}`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: mockData.personal.location,
      href: null,
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'saswoti-panda',
      href: mockData.personal.linkedin,
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission with loading animation
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Message Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactClick = (href) => {
    if (href) {
      window.open(href, href.startsWith('http') ? '_blank' : '_self');
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-6 h-6 bg-blue-300 rounded-full animate-float opacity-30"></div>
        <div className="absolute top-1/2 right-1/6 w-4 h-4 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-indigo-300 rounded-full animate-bounce opacity-25"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-violet-400 rounded-full animate-ping opacity-35"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Let's Connect
                </CardTitle>
                <p className="text-gray-600">
                  Feel free to reach out through any of the following channels. I'm always excited to discuss new opportunities and collaborations.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r ${info.color} bg-opacity-5 hover:bg-opacity-10 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ${info.href ? 'cursor-pointer' : ''} group`}
                    onClick={() => handleContactClick(info.href)}
                    style={{ animationDelay: `${500 + index * 200}ms` }}
                  >
                    <div className={`bg-gradient-to-r ${info.color} p-3 rounded-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{info.label}</h4>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{info.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className={`bg-white/80 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="hover:text-blue-600 transition-colors duration-200">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 hover:border-purple-400 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="hover:text-purple-600 transition-colors duration-200">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 hover:border-blue-400 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="hover:text-indigo-600 transition-colors duration-200">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    required
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 hover:border-blue-400 transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="hover:text-blue-600 transition-colors duration-200">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me more about your project or opportunity..."
                    rows={5}
                    required
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 hover:border-purple-400 transition-all duration-200 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;