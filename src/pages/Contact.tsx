
import AcademicLayout from '@/components/AcademicLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Calendar, Video, Linkedin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <AcademicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Contact
            </h1>
            <p className="text-xl text-gray-600">
              Get in touch for collaborations, consultations, or academic inquiries
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-academic-blue rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">lcol@ufu.br</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+55 (34) 3230-9536</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Video className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">MS-Teams</h3>
                      <a 
                        href="https://teams.microsoft.com/l/chat/0/0?users=lcol@ufu.br" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-academic-blue hover:text-academic-blue-dark"
                      >
                        Start Chat
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-blue-800 rounded-lg flex items-center justify-center">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/in/lu%C3%ADs-cl%C3%A1udio-oliveira-lopes-a1b28414?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgkwwG1ayTG6XiYt7XFuiRQ%3D%3D" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-academic-blue hover:text-academic-blue-dark"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Office Address</h3>
                      <p className="text-gray-600">
                        Faculdade de Engenharia Química<br />
                        Universidade Federal de Uberlândia<br />
                        Av. João Naves de Ávila, 2121<br />
                        Campus Santa Mônica - Bloco 1K<br />
                        Uberlândia, MG - 38400-902<br />
                        Brasil
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: By appointment only
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <Button 
                size="lg" 
                className="w-full academic-gradient text-white"
                onClick={() => window.open('https://calendar.google.com', '_blank')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Meeting
              </Button>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institution/Organization
                    </label>
                    <Input placeholder="Your institution or company" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input placeholder="Brief subject of your message" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Please provide details about your inquiry, collaboration proposal, or consultation request..."
                      rows={6}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1 academic-gradient text-white">
                      Send Message
                    </Button>
                    <Button type="button" variant="outline" className="border-academic-blue text-academic-blue">
                      Clear Form
                    </Button>
                  </div>
                </form>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> For urgent matters, please call directly. 
                    I typically respond to emails within 24-48 hours during business days.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AcademicLayout>
  );
};

export default Contact;
