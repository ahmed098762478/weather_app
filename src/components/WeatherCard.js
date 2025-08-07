import React from 'react';
import { MapPin, Thermometer, Droplets, Wind, Eye, Sunrise, Sunset } from 'lucide-react';

const WeatherCard = ({ weather, getWeatherIcon, formatTime, formatDate }) => {
  const {
    name,
    main: { temp, feels_like, humidity, pressure },
    weather: [weatherInfo],
    wind: { speed },
    visibility,
    sys: { sunrise, sunset },
  } = weather;

  const weatherDetails = [
    {
      icon: <Thermometer className="w-5 h-5" />,
      label: 'Ressenti',
      value: `${Math.round(feels_like)}°C`,
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      label: 'Humidité',
      value: `${humidity}%`,
    },
    {
      icon: <Wind className="w-5 h-5" />,
      label: 'Vent',
      value: `${Math.round(speed)} km/h`,
    },
    {
      icon: <Eye className="w-5 h-5" />,
      label: 'Visibilité',
      value: `${(visibility / 1000).toFixed(1)} km`,
    },
  ];

  return (
    <div className="weather-card p-6 mb-6 animate-fade-in">
      {/* Location and Date */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-white/80" />
          <h2 className="text-2xl font-bold text-white">{name}</h2>
        </div>
        <div className="text-white/80 text-sm">
          {formatDate(weather.dt)}
        </div>
      </div>

      {/* Main Weather Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div className="text-center">
          <div className="text-8xl mb-4">
            {getWeatherIcon(weatherInfo.icon)}
          </div>
          <h3 className="text-2xl font-semibold text-white mb-2">
            {weatherInfo.description}
          </h3>
          <div className="text-6xl font-bold text-white">
            {Math.round(temp)}°C
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          {weatherDetails.map((detail, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
            >
              <div className="flex justify-center mb-2 text-white/80">
                {detail.icon}
              </div>
              <div className="text-white/60 text-sm mb-1">{detail.label}</div>
              <div className="text-white font-semibold">{detail.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sunrise and Sunset */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
          <div className="flex justify-center mb-2 text-yellow-300">
            <Sunrise className="w-5 h-5" />
          </div>
          <div className="text-white/60 text-sm mb-1">Lever du soleil</div>
          <div className="text-white font-semibold">
            {formatTime(sunrise)}
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
          <div className="flex justify-center mb-2 text-orange-300">
            <Sunset className="w-5 h-5" />
          </div>
          <div className="text-white/60 text-sm mb-1">Coucher du soleil</div>
          <div className="text-white font-semibold">
            {formatTime(sunset)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard; 