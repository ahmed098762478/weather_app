# 🌤️ Météo App - Application Météo React

Une application météo moderne et responsive construite avec React et Tailwind CSS, offrant des informations météorologiques en temps réel et des prévisions sur 5 jours.

![Météo App](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Fonctionnalités

### 🌍 **Météo en temps réel**
- **Température actuelle** et ressentie
- **Conditions météorologiques** avec icônes dynamiques
- **Humidité et vitesse du vent**
- **Visibilité** en kilomètres
- **Lever et coucher du soleil**

### 📅 **Prévisions sur 5 jours**
- **Prévisions détaillées** pour chaque jour
- **Température et humidité** prévues
- **Conditions météorologiques** avec descriptions
- **Affichage en grille responsive**

### 🎨 **Interface moderne**
- **Design glassmorphism** avec effets de transparence
- **Animations fluides** et transitions CSS
- **Interface responsive** pour tous les appareils
- **Recherche intuitive** par nom de ville
- **Gestion d'erreurs** élégante

## 🚀 Installation et Configuration

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn
- Clé API OpenWeatherMap (gratuite)

### 1. Cloner le projet
```bash
git clone <votre-repo>
cd weather-app
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer l'API OpenWeatherMap

#### Obtenir une clé API gratuite :
1. Allez sur [OpenWeatherMap](https://openweathermap.org/)
2. Créez un compte gratuit
3. Obtenez votre clé API (gratuite)

#### Configurer la clé API :
Modifiez le fichier `src/App.js` :
```javascript
// ❌ Incorrect
const API_KEY = 'YOUR_API_KEY';

// ✅ Correct
const API_KEY = 'votre_vraie_clé_api_openweathermap';
```

### 4. Lancer l'application
```bash
npm start
```

L'application sera accessible sur `http://localhost:3000`

## 🛠️ Technologies utilisées

| Technologie | Version | Description |
|-------------|---------|-------------|
| **React** | 18.2.0 | Framework JavaScript |
| **Tailwind CSS** | 3.3.0 | Framework CSS utilitaire |
| **Axios** | 1.4.0 | Client HTTP pour les requêtes API |
| **Lucide React** | 0.263.1 | Icônes modernes |
| **OpenWeatherMap API** | - | Données météorologiques |

## 📱 Fonctionnalités détaillées

### 🔍 **Recherche de villes**
- Recherche par nom de ville
- Support des villes françaises et internationales
- Gestion des erreurs de recherche
- Interface de recherche intuitive

### 🌡️ **Informations météorologiques**
- **Température** : Actuelle et ressentie
- **Conditions** : Ensoleillé, nuageux, pluvieux, etc.
- **Humidité** : Pourcentage d'humidité
- **Vent** : Vitesse en km/h
- **Visibilité** : Distance en kilomètres
- **Soleil** : Heures de lever et coucher

### 📊 **Prévisions**
- Prévisions sur 5 jours
- Température maximale et minimale
- Conditions météorologiques prévues
- Humidité prévue

## 🎨 Design et UX

### **Glassmorphism**
- Effets de transparence et flou
- Bordures subtiles
- Arrière-plans dégradés

### **Animations**
- `fade-in` : Apparition en fondu
- `slide-up` : Glissement vers le haut
- `pulse-slow` : Pulsation lente
- Transitions fluides

### **Responsive Design**
- Mobile-first approach
- Adaptation à tous les écrans
- Grille flexible
- Typographie responsive

## 📁 Structure du projet

```
weather-app/
├── public/
│   └── index.html          # Page HTML principale
├── src/
│   ├── components/
│   │   ├── WeatherCard.js      # Carte météo actuelle
│   │   ├── ForecastCard.js     # Carte de prévisions
│   │   └── LoadingSpinner.js   # Indicateur de chargement
│   ├── App.js                  # Composant principal
│   ├── index.js                # Point d'entrée
│   └── index.css               # Styles Tailwind et personnalisés
├── package.json                # Dépendances et scripts
├── tailwind.config.js          # Configuration Tailwind
├── postcss.config.js           # Configuration PostCSS
└── README.md                   # Documentation
```

## 🔧 Configuration

### Variables d'environnement
Créez un fichier `.env` à la racine du projet :
```env
REACT_APP_WEATHER_API_KEY=votre_clé_api_openweathermap
```

### Personnalisation

#### Couleurs (tailwind.config.js)
```javascript
colors: {
  'weather-blue': '#1e40af',
  'weather-light-blue': '#3b82f6',
  'weather-dark': '#1f2937',
  'weather-gray': '#6b7280',
}
```

#### Animations (src/index.css)
```css
@keyframes fadeIn {
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
}
```

## 📦 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm start` | Lance le serveur de développement |
| `npm build` | Construit l'application pour la production |
| `npm test` | Lance les tests |
| `npm eject` | Éjecte la configuration (irréversible) |

## 🌐 API utilisée

L'application utilise l'API OpenWeatherMap :

### Endpoints
- **Météo actuelle** : `/weather`
- **Prévisions** : `/forecast`

### Paramètres
- **Unité** : Métrique (Celsius)
- **Langue** : Français
- **Format** : JSON

### Exemple de requête
```javascript
const response = await axios.get(
  `${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=fr`
);
```

## 🧪 Test de l'application

### Villes de test recommandées
- **Paris** - France
- **Lyon** - France
- **Marseille** - France
- **London** - Angleterre
- **New York** - États-Unis
- **Tokyo** - Japon

### Fonctionnalités à tester
1. ✅ Recherche de ville
2. ✅ Affichage météo actuelle
3. ✅ Prévisions sur 5 jours
4. ✅ Responsive design
5. ✅ Gestion d'erreurs
6. ✅ Animations

## 🐛 Dépannage

### Problèmes courants

#### 1. "Ville non trouvée"
- Vérifiez que la clé API est correcte
- Assurez-vous que la ville existe
- Vérifiez votre connexion internet

#### 2. Erreur de réseau
- Vérifiez votre connexion internet
- Vérifiez que l'API OpenWeatherMap est accessible

#### 3. Problème d'affichage
- Vérifiez que Tailwind CSS est bien installé
- Redémarrez le serveur de développement

## 🤝 Contribution

Les contributions sont les bienvenues ! 

### Comment contribuer
1. **Fork** le projet
2. **Créez** une branche pour votre fonctionnalité
   ```bash
   git checkout -b feature/nouvelle-fonctionnalite
   ```
3. **Commitez** vos changements
   ```bash
   git commit -m 'Ajout d'une nouvelle fonctionnalité'
   ```
4. **Poussez** vers la branche
   ```bash
   git push origin feature/nouvelle-fonctionnalite
   ```
5. **Ouvrez** une Pull Request

### Bonnes pratiques
- Suivez les conventions de code existantes
- Ajoutez des tests pour les nouvelles fonctionnalités
- Mettez à jour la documentation
- Vérifiez que l'application fonctionne sur mobile

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- [OpenWeatherMap](https://openweathermap.org/) pour l'API météo
- [Tailwind CSS](https://tailwindcss.com/) pour le framework CSS
- [Lucide React](https://lucide.dev/) pour les icônes
- [React](https://reactjs.org/) pour le framework JavaScript

## 📞 Support

Pour toute question ou problème :
- 📧 Ouvrez une issue sur GitHub
- 💬 Contactez l'équipe de développement
- 📖 Consultez la documentation

---

**Développé avec ❤️ en React et Tailwind CSS** 