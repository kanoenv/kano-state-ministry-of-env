
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ThermometerSun, CloudSun, Gauge, CloudRain } from 'lucide-react';

const AirQualityWidget = () => {
  const [loading, setLoading] = useState(true);
  const [activeLocation, setActiveLocation] = useState('kano_central');

  const kanoLocations = {
    kano_central: { name: "Kano Central", aqi: 75, weather: "Sunny", temp: "32°C", humidity: "45%" },
    nassarawa: { name: "Nassarawa", aqi: 92, weather: "Partly Cloudy", temp: "33°C", humidity: "42%" },
    kumbotso: { name: "Kumbotso", aqi: 68, weather: "Clear", temp: "31°C", humidity: "40%" },
    dala: { name: "Dala", aqi: 85, weather: "Sunny", temp: "34°C", humidity: "38%" },
  };

  useEffect(() => {
    // Simulate API call
    const loadData = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };
    
    loadData();
    // Refresh every 30 minutes
    const interval = setInterval(loadData, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const getAqiCategory = (value) => {
    if (value <= 50) return { label: "Good", color: "bg-green-500", text: "text-green-700", advice: "Air quality is satisfactory, and air pollution poses little or no risk." };
    if (value <= 100) return { label: "Moderate", color: "bg-yellow-500", text: "text-yellow-700", advice: "Air quality is acceptable. However, some pollutants may be moderate concern for a very small number of people." };
    if (value <= 150) return { label: "Unhealthy for Sensitive Groups", color: "bg-orange-500", text: "text-orange-700", advice: "Members of sensitive groups may experience health effects. The general public is less likely to be affected." };
    if (value <= 200) return { label: "Unhealthy", color: "bg-red-500", text: "text-red-700", advice: "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects." };
    if (value <= 300) return { label: "Very Unhealthy", color: "bg-purple-500", text: "text-purple-700", advice: "Health alert: The risk of health effects is increased for everyone." };
    return { label: "Hazardous", color: "bg-rose-700", text: "text-rose-800", advice: "Health warning of emergency conditions: everyone is more likely to be affected." };
  };

  const renderAqiInfo = (locationKey) => {
    const location = kanoLocations[locationKey];
    const aqi = location.aqi;
    const aqiInfo = getAqiCategory(aqi);
    const percentage = Math.min(aqi / 3, 100);

    return (
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2 text-xs text-gray-500">
          <span>0</span>
          <span>150</span>
          <span>300+</span>
        </div>
        
        <div className="h-4 w-full bg-gray-200 rounded-full mb-4">
          <div 
            className={`h-4 ${aqiInfo.color} rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className={`text-4xl font-bold ${aqiInfo.text}`}>{aqi}</span>
            <p className={`text-xl font-semibold ${aqiInfo.text}`}>{aqiInfo.label}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end mb-1">
              <ThermometerSun className="h-4 w-4 mr-1 text-orange-500" />
              <span>{location.temp}</span>
            </div>
            <div className="flex items-center justify-end">
              <CloudSun className="h-4 w-4 mr-1 text-blue-500" />
              <span>{location.weather}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md mt-4">
          <div className="flex items-start">
            <Gauge className="h-5 w-5 mr-2 text-gray-700 mt-0.5" />
            <div>
              <h4 className="font-semibold mb-1">Health Implications:</h4>
              <p className="text-gray-700 text-sm">{aqiInfo.advice}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
          <span>Last updated: {new Date().toLocaleTimeString()}</span>
          <span className="flex items-center">
            <CloudRain className="h-3 w-3 mr-1" />
            Humidity: {location.humidity}
          </span>
        </div>
      </div>
    );
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-kano-dark mb-4">Air Quality Monitoring System</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real-time air quality data from monitoring stations across Kano State. Our monitoring network provides accurate, up-to-date information on air pollution levels.
            </p>
          </div>

          <Card className="shadow-lg border-t-4 border-t-kano-primary">
            <CardHeader className="bg-gradient-to-r from-kano-primary to-green-700 text-white">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl md:text-2xl font-semibold">Air Quality Index (AQI)</CardTitle>
                <Gauge className="h-6 w-6" />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-kano-primary mb-4"></div>
                    <p className="text-gray-500">Loading air quality data...</p>
                  </div>
                </div>
              ) : (
                <Tabs defaultValue="kano_central" value={activeLocation} onValueChange={setActiveLocation}>
                  <TabsList className="grid grid-cols-4 mb-6">
                    <TabsTrigger value="kano_central">Kano Central</TabsTrigger>
                    <TabsTrigger value="nassarawa">Nassarawa</TabsTrigger>
                    <TabsTrigger value="kumbotso">Kumbotso</TabsTrigger>
                    <TabsTrigger value="dala">Dala</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="kano_central">
                    {renderAqiInfo('kano_central')}
                  </TabsContent>
                  
                  <TabsContent value="nassarawa">
                    {renderAqiInfo('nassarawa')}
                  </TabsContent>
                  
                  <TabsContent value="kumbotso">
                    {renderAqiInfo('kumbotso')}
                  </TabsContent>
                  
                  <TabsContent value="dala">
                    {renderAqiInfo('dala')}
                  </TabsContent>
                </Tabs>
              )}
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-2">What is AQI?</h4>
                <p className="text-xs text-gray-600">
                  The Air Quality Index (AQI) is a measure used to communicate how polluted the air is currently or how polluted it is forecast to become. 
                  Higher AQI values represent higher levels of air pollution and greater health concerns.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AirQualityWidget;
