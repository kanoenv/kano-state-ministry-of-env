import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Briefcase, Users, Award, Globe, Shield, MapPin, BookOpen, ChevronRight, Settings, BarChart, Leaf, Building2, FlaskConical, ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  // Leadership data with updated images
  const leadership = [
    {
      name: "Dr. Dahiru Muhammad Hashim",
      title: "Honorable Commissioner",
      image: "/lovable-uploads/319212f0-dc1b-435d-9429-51762c07918d.png",
      showImage: true,
    },
    {
      name: "Dr. Abdulhamid Bala",
      title: "Ag. Permanent Secretary",
      image: "/lovable-uploads/46c6a3be-4025-4801-ad46-97499cd50ab6.png",
      showImage: true,
    }
  ];

  // Directors data with updated images
  const directors = [
    {
      name: "Adamu Fate Jigawaire",
      title: "Director, Admin and General Services",
      image: "/lovable-uploads/6f93c916-f8fc-43c1-9ed5-5cc9e624f29f.png",
      showImage: true,
    },
    {
      name: "Dr. Umar Saleh Anka",
      title: "Director, Climate Change",
      image: "/lovable-uploads/7e06bf53-3435-4584-9601-bfddc3535419.png",
      showImage: true,
    },
    {
      name: "Ibrahim Nasir",
      title: "Director, Pollution Control",
      image: "/lovable-uploads/dfcb890c-81e9-41aa-8fab-7fed5a682818.png",
      showImage: true,
    },
    {
      name: "Salman Abdu Adamu",
      title: "Director, Environmental Sanitation",
      image: "/lovable-uploads/a1b820e8-8fff-49d0-bc92-8fcf0120a031.png",
      showImage: true,
    },
    {
      name: "Ahmad Ibrahim Chigari",
      title: "Director, Special Duties",
      image: "/lovable-uploads/0846eb2a-3829-47e3-8a86-6a824fa06c7b.png",
      showImage: true,
    },
    {
      name: "Qs. Shazali Garba",
      title: "Director, Planning, Research and Statistics",
      image: "/lovable-uploads/3b854c9b-94ef-42ad-b72f-fa13645e3aca.png",
      showImage: true,
    },
    {
      name: "Murtala Shehu Umar",
      title: "Director, Public Enlightenment",
      image: "/lovable-uploads/37b827ba-aeb1-455b-a3e4-0c073d03fa10.png",
      showImage: true,
    },
    {
      name: "Arc. Nasiru",
      title: "Director, Engineering",
      image: "",
      showImage: false,
    },
    {
      name: "Alawiyya Baba Musa",
      title: "Coordinator, Pollution Control Laboratory",
      image: "/lovable-uploads/c30451c6-d258-4162-86fb-563454fb8340.png",
      showImage: true,
    },
    {
      name: "Professor AB Nabegu",
      title: "Technical Advisor to the Honorable Commissioner",
      image: "/lovable-uploads/0f2f0833-c845-4a65-b900-0491a7135a49.png",
      showImage: true,
    }
  ];

  // Departments data
  const departments = [
    {
      name: "Administration and General Services",
      description: "Responsible for human resource management, administrative coordination, and general support services across all ministry operations.",
      icon: <Settings className="h-8 w-8" />,
      functions: [
        "Human Resource Management",
        "Administrative Coordination",
        "General Support Services",
        "Office Management"
      ]
    },
    {
      name: "Climate Change",
      description: "Leads climate change mitigation and adaptation strategies, policy development, and international climate cooperation initiatives.",
      icon: <Globe className="h-8 w-8" />,
      functions: [
        "Climate Policy Development",
        "Mitigation Strategies",
        "Adaptation Programs",
        "International Cooperation"
      ]
    },
    {
      name: "Pollution Control",
      description: "Monitors and controls environmental pollution, conducts environmental impact assessments, and enforces pollution control regulations.",
      icon: <Shield className="h-8 w-8" />,
      functions: [
        "Pollution Monitoring",
        "Environmental Impact Assessment",
        "Regulatory Enforcement",
        "Industrial Pollution Control"
      ]
    },
    {
      name: "Environmental Sanitation",
      description: "Oversees waste management systems, sanitation programs, and public health environmental initiatives throughout Kano State.",
      icon: <Building2 className="h-8 w-8" />,
      functions: [
        "Waste Management",
        "Sanitation Programs",
        "Public Health Initiatives",
        "Urban Cleanliness"
      ]
    },
    {
      name: "Planning, Research and Statistics",
      description: "Conducts environmental research, collects and analyzes environmental data, and develops strategic plans for the ministry.",
      icon: <BarChart className="h-8 w-8" />,
      functions: [
        "Environmental Research",
        "Data Collection & Analysis",
        "Strategic Planning",
        "Statistical Reporting"
      ]
    },
    {
      name: "Public Enlightenment",
      description: "Develops and implements public awareness campaigns, environmental education programs, and community engagement initiatives.",
      icon: <Users className="h-8 w-8" />,
      functions: [
        "Public Awareness Campaigns",
        "Environmental Education",
        "Community Engagement",
        "Media Relations"
      ]
    },
    {
      name: "Engineering",
      description: "Provides technical engineering support for environmental projects, infrastructure development, and facility management.",
      icon: <Briefcase className="h-8 w-8" />,
      functions: [
        "Project Engineering",
        "Infrastructure Development",
        "Technical Support",
        "Facility Management"
      ]
    },
    {
      name: "Special Duties",
      description: "Handles special assignments, emergency response coordination, and cross-departmental project implementation.",
      icon: <Award className="h-8 w-8" />,
      functions: [
        "Special Assignments",
        "Emergency Response",
        "Cross-departmental Projects",
        "Strategic Initiatives"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]"
          style={{
            backgroundImage: "url('/lovable-uploads/cf45aab3-ccbc-4ef5-a201-276198f68571.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          <div className="container-custom relative h-full flex flex-col justify-center text-center">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">About Us</h1>
            <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Learn about our ministry's mission, vision, and commitment to environmental sustainability in Kano State.
            </p>
          </div>
        </section>
        
        {/* About Content */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-4xl font-bold text-kano-primary mb-8 border-b border-kano-primary/20 pb-4">Our History</h2>
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      The Kano State Ministry of Environment and Climate Change was established to protect, 
                      restore, and enhance the environment of Kano State, while ensuring ecological 
                      sustainability and climate resilience. With a rich history dating back to the state's 
                      formation, our ministry has evolved to address the complex environmental challenges facing 
                      our communities today.
                    </p>
                    <p className="text-lg">
                      Under the current administration led by His Excellency, Alhaji Abba Kabir Yusuf, 
                      the ministry has been revitalized with renewed focus on sustainable environmental 
                      management, waste disposal, pollution control, and climate change mitigation and adaptation 
                      strategies.
                    </p>
                    <p className="text-lg">
                      Our comprehensive approach includes engaging communities, collaborating with international 
                      partners, and implementing evidence-based policies to ensure that Kano State remains at 
                      the forefront of environmental stewardship in Nigeria.
                    </p>
                  </div>
                </div>

                <div className="mt-16">
                  <h2 className="text-4xl font-bold text-kano-primary mb-8 border-b border-kano-primary/20 pb-4">Leadership Structure</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      The Ministry is headed by the Honorable Commissioner, Dr. Dahiru Muhammad Hashim, 
                      who provides strategic direction and leadership. The Ministry comprises various departments 
                      and agencies, each led by seasoned professionals specializing in different aspects of 
                      environmental management and climate change.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our structure ensures effective implementation of policies and programs across the state,
                      with robust monitoring and evaluation mechanisms to track progress and ensure accountability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-kano-primary/5 to-kano-secondary/5 rounded-2xl shadow-xl p-8 mb-8 border border-kano-primary/10">
                  <h3 className="text-2xl font-bold text-kano-primary mb-6">Key Facts</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <div className="bg-red-600 rounded-full p-2 mr-4 flex-shrink-0">
                        <Shield className="text-white" size={16} />
                      </div>
                      <span className="text-gray-700">Established in 1967 as part of Kano State's founding administrative structure</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-600 rounded-full p-2 mr-4 flex-shrink-0">
                        <Users className="text-white" size={16} />
                      </div>
                      <span className="text-gray-700">Over 500 dedicated staff across all departments and agencies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-600 rounded-full p-2 mr-4 flex-shrink-0">
                        <MapPin className="text-white" size={16} />
                      </div>
                      <span className="text-gray-700">Present in all 44 Local Government Areas of Kano State</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-600 rounded-full p-2 mr-4 flex-shrink-0">
                        <Globe className="text-white" size={16} />
                      </div>
                      <span className="text-gray-700">Partnerships with international organizations including UNDP, GIZ, and World Bank</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-red-600 rounded-full p-2 mr-4 flex-shrink-0">
                        <Award className="text-white" size={16} />
                      </div>
                      <span className="text-gray-700">Multiple recognitions for environmental programs and initiatives</span>
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <AspectRatio ratio={4/3}>
                    <img 
                      src="/lovable-uploads/8c00111d-1410-4210-93aa-5877bd4b6ee7.png"
                      alt="Ministry of Environment Building" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="p-6 bg-gradient-to-r from-kano-primary to-kano-secondary text-white">
                    <p className="text-center font-medium">
                      Ministry of Environment and Climate Change, Kano State Headquarters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center text-kano-primary mb-16">Our Mission & Vision</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">
              {/* Mission */}
              <div className="bg-white rounded-2xl p-10 border-l-8 border-kano-primary shadow-2xl hover:shadow-3xl transition-all duration-300 animate-fade-in">
                <div className="flex items-center mb-6">
                  <div className="bg-kano-primary rounded-full p-3 mr-4">
                    <BookOpen className="text-white" size={28} />
                  </div>
                  <h3 className="text-kano-primary text-3xl font-bold">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To manage land, air, and water pollution; conserve habitats and biodiversity; 
                  develop alternative energy sources; promote environmental education; 
                  prevent and control drought, desertification, flood, and erosion; 
                  restore degraded lands; and address climate change issues.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-2xl p-10 border-l-8 border-kano-accent shadow-2xl hover:shadow-3xl transition-all duration-300 animate-fade-in">
                <div className="flex items-center mb-6">
                  <div className="bg-kano-accent rounded-full p-3 mr-4">
                    <Globe className="text-white" size={28} />
                  </div>
                  <h3 className="text-kano-accent text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To improve the quality of living through healthy environmental development, 
                  transforming Kano into a clean, green, and climate‑resilient state.
                </p>
              </div>
            </div>
            
            {/* Mandate with professional icons */}
            <div className="mt-16">
              <h3 className="text-kano-dark text-3xl font-bold mb-12 text-center">Our Mandate</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-kano-primary group hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-kano-primary to-kano-secondary rounded-full p-4 text-white group-hover:scale-110 transition-transform duration-300">
                      <BookOpen size={28} strokeWidth={1.5} />
                    </div>
                    <h4 className="ml-4 font-bold text-xl text-gray-800">Policy Implementation</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">Plan, promote, coordinate, and oversee implementation of environmental policies and programs.</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-kano-primary group hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-kano-primary to-kano-secondary rounded-full p-4 text-white group-hover:scale-110 transition-transform duration-300">
                      <Award size={28} strokeWidth={1.5} />
                    </div>
                    <h4 className="ml-4 font-bold text-xl text-gray-800">Quality Environment</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">Secure and foster a quality environment conducive to ecosystem health and human well‑being.</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-kano-primary group hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-kano-primary to-kano-secondary rounded-full p-4 text-white group-hover:scale-110 transition-transform duration-300">
                      <Shield size={28} strokeWidth={1.5} />
                    </div>
                    <h4 className="ml-4 font-bold text-xl text-gray-800">Environmental Protection</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">Design and execute measures to prevent flooding, erosion, drought, and desertification.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Departments Section - NEW */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center text-kano-primary mb-6">Our Departments</h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
              The Ministry is organized into specialized departments, each playing a crucial role in achieving our environmental goals. 
              Our departmental structure ensures comprehensive coverage of all environmental and climate change aspects affecting Kano State.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {departments.map((department, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl bg-gradient-to-br from-white to-gray-50/50 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-kano-primary to-kano-secondary rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          {department.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-kano-primary transition-colors duration-300">
                          {department.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {department.description}
                        </p>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-kano-primary mb-2 uppercase tracking-wide">Key Functions</h4>
                          <ul className="space-y-1">
                            {department.functions.map((func, funcIndex) => (
                              <li key={funcIndex} className="flex items-center text-sm text-gray-600">
                                <ChevronRight className="h-4 w-4 text-kano-primary mr-2 flex-shrink-0" />
                                {func}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call-to-Action to Departments Page */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-kano-primary/5 to-kano-secondary/5 rounded-2xl p-8 border border-kano-primary/10">
                <h3 className="text-2xl font-bold text-kano-primary mb-4">Explore Detailed Department Information</h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Get comprehensive details about each department's mandate, functions, programs, and contact information.
                </p>
                <Button 
                  asChild
                  className="bg-gradient-to-r from-kano-primary to-kano-secondary hover:from-kano-primary/90 hover:to-kano-secondary/90 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Link to="/departments" className="flex items-center gap-2">
                    View All Departments
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Pollution Control Laboratory Section */}
            <div className="mt-16">
              <Card className="bg-gradient-to-r from-kano-primary/5 to-kano-secondary/5 border-2 border-kano-primary/10 rounded-2xl overflow-hidden">
                <CardContent className="p-10">
                  <div className="flex items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                        <FlaskConical className="h-10 w-10" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Pollution Control Laboratory</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Our state-of-the-art laboratory facility conducts comprehensive environmental testing and analysis, 
                        providing scientific data to support evidence-based policy decisions and regulatory enforcement.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-kano-primary mb-3">Laboratory Services</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center text-gray-600">
                              <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                              Water Quality Testing
                            </li>
                            <li className="flex items-center text-gray-600">
                              <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                              Air Pollution Monitoring
                            </li>
                            <li className="flex items-center text-gray-600">
                              <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                              Soil Contamination Analysis
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-kano-primary mb-3">Technical Capabilities</h4>
                          <ul className="space-y-2">
                            <li className="flex items-center text-gray-600">
                              <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                              Environmental Impact Assessment
                            </li>
                            <li className="flex items-center text-gray-600">
                              <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                              Industrial Emissions Testing
                            </li>
                            <li className="flex items-center text-gray-600">
                              <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                              Research & Development
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Leadership Team Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-kano-dark mb-16 text-center">Our Leadership</h2>
            
            {/* Senior Leadership */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              {leadership.map((leader, index) => (
                <Card key={index} className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 rounded-2xl group">
                  <CardContent className="p-0">
                    <div className="relative">
                      {leader.showImage && (
                        <div className="relative overflow-hidden">
                          <AspectRatio ratio={4/3}>
                            <img 
                              src={leader.image} 
                              alt={leader.name} 
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                          </AspectRatio>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{leader.name}</h3>
                        <p className="text-lg font-medium opacity-90 drop-shadow-lg">{leader.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Directors */}
            <h3 className="text-3xl font-bold text-kano-dark mb-12 text-center">Ministry Directors & Key Officials</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {directors.map((director, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 rounded-2xl group bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      {director.showImage ? (
                        <div className="mx-auto mb-6 relative">
                          <div className="h-24 w-24 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-kano-primary to-kano-secondary shadow-xl group-hover:scale-110 transition-transform duration-300">
                            <AspectRatio ratio={1}>
                              <img 
                                src={director.image} 
                                alt={director.name} 
                                className="w-full h-full object-cover object-top"
                              />
                            </AspectRatio>
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-kano-primary rounded-full p-2">
                            <Briefcase className="text-white" size={16} />
                          </div>
                        </div>
                      ) : (
                        <div className="mx-auto mb-6 relative">
                          <Avatar className="h-24 w-24 mx-auto border-4 border-kano-primary shadow-xl group-hover:scale-110 transition-transform duration-300">
                            <AvatarFallback className="bg-gradient-to-br from-kano-primary to-kano-secondary text-white text-2xl font-bold">
                              {director.name.split(' ').map(name => name[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="absolute -bottom-2 -right-2 bg-kano-primary rounded-full p-2">
                            <Briefcase className="text-white" size={16} />
                          </div>
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-kano-dark text-lg mb-2 leading-tight">{director.name}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{director.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Core Values Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center text-kano-primary mb-16">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-red-600 group hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">Integrity</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We uphold the highest ethical standards in all our operations and interactions with stakeholders.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-kano-primary group hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-kano-primary to-kano-secondary rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">Professionalism</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We maintain the highest standards of competence and efficiency in delivering our mandate.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-green-600 group hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">Community-Focused</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  We place the needs and well-being of Kano State communities at the center of our policies and actions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
