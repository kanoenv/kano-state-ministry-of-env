
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Scale, BookOpen, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Resources = () => {
  const resourceCategories = [
    {
      title: "Environmental Laws",
      description: "Access current environmental legislation and regulations in Kano State",
      icon: <Scale className="h-8 w-8" />,
      link: "/resources/laws",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Guidelines & Procedures",
      description: "Step-by-step guides for environmental compliance and best practices",
      icon: <BookOpen className="h-8 w-8" />,
      link: "/resources/guidelines",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Frequently Asked Questions",
      description: "Find answers to common questions about environmental policies and procedures",
      icon: <HelpCircle className="h-8 w-8" />,
      link: "/resources/faqs",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px]" style={{
          backgroundImage: "url('/lovable-uploads/dfcb890c-81e9-41aa-8fab-7fed5a682818.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container-custom relative h-full flex flex-col justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Resources & Policies</h1>
            <p className="text-white/90 text-lg max-w-2xl">
              Access environmental laws, guidelines, and resources to stay informed and compliant.
            </p>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Resource Categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resourceCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                      <div className={category.color}>
                        {category.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link to={category.link}>Explore Resources</Link>
                    </Button>
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

export default Resources;
