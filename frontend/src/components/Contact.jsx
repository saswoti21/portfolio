import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: mockData.personal.email,
      href: `mailto:${mockData.personal.email}`,
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: mockData.personal.phone,
      href: `tel:${mockData.personal.phone.replace(/\s+/g, '')}`,
      color: 'from-green-600 to-green-700'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: mockData.personal.location,
      href: null,
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'saswoti-panda',
      href: mockData.personal.linkedin,
      color: 'from-blue-700 to-blue-800'
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

    // Mock form submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
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
                    className={`flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r ${info.color} bg-opacity-5 hover:bg-opacity-10 transition-all duration-200 ${info.href ? 'cursor-pointer' : ''}`}
                    onClick={() => handleContactClick(info.href)}
                  >
                    <div className={`bg-gradient-to-r ${info.color} p-3 rounded-lg`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{info.label}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-2">Available for Opportunities</h3>
                  <p className="text-blue-100">
                    Currently seeking data analyst positions and open to exciting projects. Let's discuss how we can work together!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    required
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me more about your project or opportunity..."
                    rows={5}
                    required
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
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