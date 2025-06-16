
import React from 'react';
import { Calendar, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const PressReleases = () => {
  const pressReleases = [
    {
      title: "New Air Quality Monitoring Network Operational",
      date: "2024-03-15",
      excerpt: "The Ministry announces the successful deployment of 10 new air quality monitoring stations across Kano State, providing real-time data to residents.",
      downloadUrl: "#"
    },
    {
      title: "Forest Guard Recruitment Programme Launched",
      date: "2024-02-20",
      excerpt: "Applications are now open for 200 forest guard positions as part of our commitment to strengthen environmental protection in Kano State.",
      downloadUrl: "#"
    },
    {
      title: "Partnership Agreement with UNDP Signed",
      date: "2024-01-18",
      excerpt: "Strategic partnership established to enhance climate change adaptation and environmental sustainability projects across the state.",
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div className="container-custom">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Press Releases</h1>
            <p className="text-white/90 text-lg max-w-2xl">
              Official statements and announcements from the Ministry of Environment & Climate Change.
            </p>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16">
          <div className="container-custom">
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
                        <div className="flex items-center text-gray-500 text-sm mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          {release.date}
                        </div>
                        <p className="text-gray-600">{release.excerpt}</p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-4">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PressReleases;
