
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px]"
          style={{
            backgroundImage: "url('/lovable-uploads/ef52aa35-5a46-44df-82a7-a54293a8cbbf.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container-custom relative h-full flex flex-col justify-center">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Get in touch with the Ministry of Environment & Climate Change, Kano State.
            </p>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-kano-primary mb-8">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-kano-primary focus:border-transparent"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-kano-primary focus:border-transparent"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-kano-primary focus:border-transparent"
                      placeholder="Subject of your message"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-kano-primary focus:border-transparent"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-kano-primary mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-kano-primary/10 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-kano-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Address</h3>
                          <p className="text-gray-600">Block 5, Audu Bako Secretariat,</p>
                          <p className="text-gray-600">Kano State, Nigeria</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-kano-primary/10 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-kano-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Phone</h3>
                          <p className="text-gray-600">+234 803 071 9901</p>
                          <p className="text-gray-600">+234 803 456 7890</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-kano-primary/10 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-kano-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Email</h3>
                          <p className="text-gray-600">info@environment.kn.gov.ng</p>
                          <p className="text-gray-600">complaints@environment.kn.gov.ng</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-kano-primary/10 p-3 rounded-full">
                          <Clock className="h-6 w-6 text-kano-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                          <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
                          <p className="text-gray-600">Saturday - Sunday: Closed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com/kanoenvironment" target="_blank" rel="noopener noreferrer" className="bg-kano-primary text-white p-3 rounded-full hover:bg-kano-primary/80 transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href="https://twitter.com/kanoenvironment" target="_blank" rel="noopener noreferrer" className="bg-kano-primary text-white p-3 rounded-full hover:bg-kano-primary/80 transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href="https://instagram.com/kanoenvironment" target="_blank" rel="noopener noreferrer" className="bg-kano-primary text-white p-3 rounded-full hover:bg-kano-primary/80 transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="https://youtube.com/@kanoenvironment" target="_blank" rel="noopener noreferrer" className="bg-kano-primary text-white p-3 rounded-full hover:bg-kano-primary/80 transition-colors">
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-8">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-kano-primary mb-8 text-center">Our Location</h2>
            
            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              {/* This would normally be a Google Maps or other map embed */}
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <p className="text-gray-500">Map Placeholder - Google Maps integration would be here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
