import React from 'react';
import { Calendar, Thermometer, Droplets } from 'lucide-react';

const ForecastCard = ({ forecast, getWeatherIcon, formatDate }) => {
  const {
    dt,
    main: { temp, humidity },
    weather: [weatherInfo],
  } = forecast;

  return (
    <div className="weather-card p-4 text-center animate-slide-up">
      {/* Date */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <Calendar className="w-4 h-4 text-white/70" />
        <div className="text-white/80 text-sm">
          {formatDate(dt)}
        </div>
      </div>

      {/* Weather Icon */}
      <div className="text-4xl mb-3">
        {getWeatherIcon(weatherInfo.icon)}
      </div>

      {/* Weather Description */}
      <div className="text-white font-medium mb-3 text-sm">
        {weatherInfo.description}
      </div>

      {/* Temperature */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <Thermometer className="w-4 h-4 text-white/70" />
        <span className="text-white font-bold text-xl">
          {Math.round(temp)}°C
        </span>
      </div>

      {/* Humidity */}
      <div className="flex items-center justify-center gap-2">
        <Droplets className="w-4 h-4 text-white/70" />
        <span className="text-white/80 text-sm">
          {humidity}%
        </span>
      </div>
    </div>
  );
};

export default ForecastCard; 