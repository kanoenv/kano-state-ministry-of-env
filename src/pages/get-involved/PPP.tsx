
import React from 'react';
import { Building2, Handshake, Target, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const PPP = () => {
  const partnerships = [
    {
      title: "Renewable Energy Projects",
      description: "Partner with us to develop solar and wind energy infrastructure",
      icon: <Target className="h-6 w-6" />,
      sector: "Energy"
    },
    {
      title: "Waste-to-Energy Solutions",
      description: "Innovative waste management and energy generation partnerships",
      icon: <Building2 className="h-6 w-6" />,
      sector: "Waste Management"
    },
    {
      title: "Environmental Technology",
      description: "Develop and deploy cutting-edge environmental monitoring systems",
      icon: <Award className="h-6 w-6" />,
      sector: "Technology"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px]" style={{
          backgroundImage: "url('/lovable-uploads/b891ccb4-0eae-4159-a4fe-b8c1456a3efb.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container-custom relative h-full flex flex-col justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Public-Private Partnership</h1>
            <p className="text-white/90 text-lg max-w-2xl">
              Collaborate with the Ministry to create sustainable environmental solutions through strategic partnerships.
            </p>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {partnerships.map((partnership, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                        {partnership.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{partnership.title}</CardTitle>
                        <div className="text-sm text-gray-500">{partnership.sector}</div>
                      </div>
                    </div>
                    <CardDescription>{partnership.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Section */}
            <div className="bg-purple-50 p-8 rounded-xl text-center">
              <Handshake className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Start a Partnership</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We welcome innovative partnerships that align with our environmental goals. Contact our PPP unit to discuss opportunities.
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Submit Partnership Proposal
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PPP;
