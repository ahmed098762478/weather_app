import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search } from 'lucide-react';
import WeatherCard from './WeatherCard';
import ForecastCard from './ForecastCard';
import LoadingSpinner from './LoadingSpinner';
import WeatherMap from './WeatherMap';
import { useParams } from 'react-router-dom';

function AppWeather() {
  const { selectedCity } = useParams();

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';
  const BASE_URL = 'https://api.openweathermap.org/data/2.5';

  const fetchWeather = async (cityName) => {
    if (!cityName.trim()) return;

    setLoading(true);
    setError('');

    try {
      const weatherResponse = await axios.get(`${BASE_URL}/weather`, {
        params: { q: cityName, appid: API_KEY, units: 'metric', lang: 'fr' },
      });

      const forecastResponse = await axios.get(`${BASE_URL}/forecast`, {
        params: { q: cityName, appid: API_KEY, units: 'metric', lang: 'fr' },
      });

      setWeather(weatherResponse.data);
      setForecast(forecastResponse.data);
    } catch (err) {
      setError('Ville non trouvée. Veuillez vérifier le nom de la ville.');
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  // Dès que selectedCity change dans l'URL, on charge la météo
  useEffect(() => {
    if (selectedCity) {
      fetchWeather(selectedCity);
      setCity(selectedCity);
    }
  }, [selectedCity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  const getWeatherIcon = (weatherCode) => {
    const icons = {
      '01d': '☀️',
      '01n': '🌙',
      '02d': '⛅',
      '02n': '☁️',
      '03d': '☁️',
      '03n': '☁️',
      '04d': '☁️',
      '04n': '☁️',
      '09d': '🌧️',
      '09n': '🌧️',
      '10d': '🌦️',
      '10n': '🌧️',
      '11d': '⛈️',
      '11n': '⛈️',
      '13d': '🌨️',
      '13n': '🌨️',
      '50d': '🌫️',
      '50n': '🌫️',
    };
    return icons[weatherCode] || '🌤️';
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
  };

  return (
    <div className="min-h-screen weather-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Météo App
          </h1>
          <p className="text-white/80 text-lg">
            Découvrez la météo en temps réel
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8 animate-slide-up">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Entrez une ville..."
                className="weather-input pl-10"
              />
            </div>
            <button type="submit" className="weather-btn">
              Rechercher
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="max-w-md mx-auto mb-6 p-4 bg-red-500/20 backdrop-blur-sm border border-red-300/30 rounded-xl text-red-100 text-center animate-fade-in">
            {error}
          </div>
        )}

        {/* Loading Spinner */}
        {loading && <LoadingSpinner />}

        {/* Current Weather */}
        {weather && !loading && (
          <>
            <WeatherCard
              weather={weather}
              getWeatherIcon={getWeatherIcon}
              formatTime={formatTime}
              formatDate={formatDate}
            />

            {/* Carte avec Sidebar */}
            <div className="mt-6">
              <WeatherMap
                lat={weather.coord.lat}
                lon={weather.coord.lon}
                city={weather.name}
              />
            </div>
          </>
        )}

        {/* Forecast */}
        {forecast && !loading && (
          <div className="mt-8 animate-slide-up">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Prévisions sur 5 jours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {forecast.list
                .filter((item, index) => index % 8 === 0) // Une prévision par jour
                .map((item, index) => (
                  <ForecastCard
                    key={index}
                    forecast={item}
                    getWeatherIcon={getWeatherIcon}
                    formatDate={formatDate}
                  />
                ))}
            </div>
          </div>
        )}

        {/* Default State */}
        {!weather && !loading && !error && (
          <div className="text-center text-white/80 animate-fade-in">
            <div className="text-6xl mb-4">🌤️</div>
            <h2 className="text-2xl font-semibold mb-2">
              Bienvenue dans votre app météo
            </h2>
            <p className="text-lg">
              Entrez le nom d'une ville pour commencer
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppWeather;