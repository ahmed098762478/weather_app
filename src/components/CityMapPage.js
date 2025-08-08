import React from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const CityMapPage = () => {
  const { cityName, lat, lon } = useParams();

  const customIcon = new L.Icon({
    iconUrl,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  });

  return (
    <div className="flex min-h-screen">
      {/* Sidebar bleue */}
      <div className="bg-blue-950 text-white p-6 w-64">
        <h2 className="text-2xl font-bold mb-4">{cityName}</h2>
        <p>📍 Latitude : {lat}</p>
        <p>📍 Longitude : {lon}</p>
        <p className="mt-4">Recommandations :</p>
        <ul className="mt-2 text-sm">
          <li>☀️ Extérieur : Excellent</li>
          <li>☂️ Parapluie : Inutile</li>
          <li>🧥 Vêtements : Légers</li>
        </ul>
      </div>

      {/* Carte */}
      <div className="flex-1">
        <MapContainer
          center={[parseFloat(lat), parseFloat(lon)]}
          zoom={12}
          style={{ height: '100%', width: '100%' }}
        >
          {/* Mode sombre avec Carto Dark Matter */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://www.carto.com/">CARTO</a>'
          />
          <Marker position={[parseFloat(lat), parseFloat(lon)]} icon={customIcon}>
            <Popup>{cityName}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default CityMapPage;
