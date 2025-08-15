import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const API_KEY = 'e83b3c4c08285bf87b99f9bbc0abe3f0';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const CityMapPage = () => {
  const { cityName, lat, lon } = useParams();
  const navigate = useNavigate();

  const [selectedCity, setSelectedCity] = useState(cityName);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const customIcon = new L.Icon({
    iconUrl,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  // Fonction pour récupérer météo + prévisions d'une ville
  const fetchWeather = async (city) => {
    if (!city) return;
    setLoading(true);
    setError('');
    try {
      const weatherResponse = await axios.get(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`
      );
      const forecastResponse = await axios.get(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=fr`
      );

      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
      setSelectedCity(city);
    } catch {
      setError('Erreur lors de la récupération des données météo');
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  // Icônes météo simples
  const getWeatherIcon = (code) => {
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
    return icons[code] || '🌤️';
  };

  // Au clic sur un marker, on charge la météo de la ville
  const handleMarkerClick = (city) => {
    fetchWeather(city);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white p-6 w-80 overflow-auto">
        <h2 className="text-2xl font-bold mb-4">{selectedCity}</h2>
        {loading && <p>Chargement...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {weatherData && (
          <>
            <p>Température : {weatherData.main.temp} °C {getWeatherIcon(weatherData.weather[0].icon)}</p>
            <p>Météo : {weatherData.weather[0].description}</p>
            <p>Humidité : {weatherData.main.humidity} %</p>
            <p>Vent : {weatherData.wind.speed} m/s</p>

            <h3 className="mt-4 font-semibold">Prévisions à venir :</h3>
            <ul className="text-sm max-h-48 overflow-auto">
              {forecastData.list
                .filter((item, index) => index % 8 === 0) // 1 prévision par jour
                .map((item, i) => (
                  <li key={i}>
                    {new Date(item.dt * 1000).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })}
                    : {item.main.temp} °C, {item.weather[0].description}
                  </li>
                ))}
            </ul>

           <button
  onClick={() => navigate(`/weather/${selectedCity}`)}
  className="mt-6 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
>
  Voir prévisions complètes
</button>

          </>
        )}

        {!weatherData && !loading && <p>Cliquez sur une ville pour voir la météo.</p>}
      </div>

      {/* Carte */}
      <div className="flex-1">
        <MapContainer
          center={[parseFloat(lat), parseFloat(lon)]}
          zoom={6}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; OpenStreetMap contributors &copy; CARTO'
          />

          {/* Exemple : marker pour la ville initiale */}
          <Marker
            position={[parseFloat(lat), parseFloat(lon)]}
            icon={customIcon}
            eventHandlers={{
              click: () => handleMarkerClick(cityName),
            }}
          >
            <Popup>{cityName}</Popup>
          </Marker>

          {/* Tu peux ajouter d'autres markers ici en suivant la même logique */}
        </MapContainer>
      </div>
    </div>
  );
};

export default CityMapPage;
