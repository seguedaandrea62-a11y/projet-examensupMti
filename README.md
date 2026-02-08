#  Refonte Site Web SUPMTI Meknès

##  Description du Projet
Refonte complète et moderne du site web de l'École Supérieure SUPMTI Meknès, créée dans le cadre du projet d'examen de Développement Web - Prof. MOUNCIF Hamza.

##  Caractéristiques Principales

### Design Moderne & Créatif
-  **Palette de Couleurs Sophistiquée** : Bleu profond (#0a2540) et doré (#d4af37)
-  **Typographie Distinctive** : Playfair Display (titres) + Sora (corps de texte)
-  **Animations Fluides** : Transitions CSS, Animate.css, et AOS
-  **Effets Interactifs** : Hover effects avec Hover.css
-  **Design Asymétrique** : Layouts modernes et dynamiques

### Technologies Utilisées
| Technologie | Version | Usage |
|------------|---------|-------|
| HTML5 | - | Structure sémantique |
| CSS3 | - | Styles modernes avec variables CSS |
| JavaScript | ES6+ | Interactions dynamiques |
| jQuery | 3.7.1 | Manipulation DOM et animations |
| Bootstrap | 5.3.2 | Grille responsive et composants |
| Animate.css | 4.1.1 | Animations CSS prédéfinies |
| Hover.css | 2.3.1 | Effets de survol |
| AOS | 2.3.1 | Animations au scroll |
| Font Awesome | 6.4.0 | Icônes vectorielles |

##  Structure du Site

### 1. Header + Navbar
- Navigation fixe avec effet de transparence au scroll
- Menu responsive mobile
- Bouton CTA "Candidater" avec effet doré
- Liens de navigation smooth scroll

### 2. Section Hero (Carousel)
- **3 slides animés** présentant :
  - Excellence en Ingénierie & Management
  - Programmes d'Ingénierie Informatique
  - Programmes de Management & Finance
- Cartes flottantes avec animations
- Gradients dynamiques en arrière-plan
- Boutons d'action call-to-action

### 3. Section Statistiques
- **3 compteurs animés** :
  - 8 Filières Accréditées
  - 1500+ Lauréats
  - 15+ Nationalités
- Cartes statistiques avec animations flip
- Boîtes de fonctionnalités (Accréditation, Double Diplomation, Certifications)

### 4. Section Formations
- **Système d'onglets** (Ingénierie / Management)
- **Département Ingénierie** :
  - BAC+3 : Ingénierie Intelligente des Systèmes Informatiques
  - BAC+5 : Systèmes d'Informations et Communications
  - BAC+5 : Systèmes Réseaux et Télécommunications
- **Département Management** :
  - BAC+3 : Management de l'Entreprise
  - BAC+3 : Management et Développement International
  - BAC+5 : Management et Relations Internationales
  - BAC+5 : Finance, Audit et Contrôle de Gestion
- Cartes interactives avec icônes et listes de fonctionnalités

### 5. Section Témoignages
- **Carousel de témoignages** (2 slides)
- 6 témoignages d'étudiants et lauréats
- Système d'étoiles 5/5
- Avatars et informations des auteurs
- Animation automatique avec pause au survol

### 6. Section Partenaires & Coopérations
- **Partenariats Académiques Internationaux** :
  - Université de Lorraine (France)
  - Groupe IGS (France)
  - ISTEC Paris (France)
  - UMI Meknès (Maroc)
- **Certifications Professionnelles** :
  - CISCO (Networking Academy)
  - MICROSOFT (Azure, Office 365)
  - ORACLE (Database & Cloud)
  - SAGE (Gestion d'Entreprise)
- Mise en avant du partenariat UMI avec section dédiée

### 7. Footer
- **Informations de l'école** avec description
- **Liens réseaux sociaux** (Facebook, Instagram, LinkedIn, TikTok)
- **Liens rapides** vers toutes les sections
- **Contact** :
  - Adresse : Al kobera VN, 35 Rue Badr, Meknès
  - Téléphone : 06 45 62 70 70
  - Email : contact@supmtimeknes.ac.ma
- Copyright et crédits

##  Fonctionnalités Interactives

### Animations et Effets
1. **Scroll Animations** : AOS (Fade, Zoom, Flip)
2. **Hover Effects** : Hover.css (Grow, Float, Underline)
3. **Compteurs Animés** : jQuery animate
4. **Parallax Background** : Hero section
5. **Floating Cards** : Animation continue
6. **Carousel Transitions** : Bootstrap carousel avec fade
7. **Tab Switching** : Animations staggered
8. **Ripple Effect** : Sur les boutons d'onglets
9. **Scroll Progress Bar** : Barre de progression en haut de page
10. **Scroll to Top Button** : Bouton flottant doré

### Interactivité jQuery
- Navigation smooth scroll
- Active link highlighting
- Mobile menu toggle
- Counter animations on scroll
- Carousel pause on hover
- Dynamic year in footer
- Console welcome message
- Easter egg (Konami code)

##  Responsive Design

### Breakpoints
- **Desktop** : > 991px
- **Tablet** : 768px - 991px
- **Mobile** : < 768px

### Adaptations Mobile
- Menu hamburger responsive
- Carousels adaptés tactile
- Grille Bootstrap flexible
- Tailles de police adaptatives (clamp)
- Images optimisées
- Boutons pleine largeur sur mobile

##  Installation et Utilisation

### Méthode 1 : Utilisation Simple
1. Télécharger les 3 fichiers :
   - `index.html`
   - `styles.css`
   - `script.js`
2. Placer tous les fichiers dans le même dossier
3. Ouvrir `index.html` dans un navigateur moderne
4. Le site fonctionne ! Toutes les ressources sont chargées via CDN

### Méthode 2 : Hébergement en Ligne
1. Uploader les fichiers sur un serveur web
2. Accessible via n'importe quel navigateur
3. Compatible avec tous les services d'hébergement (GitHub Pages, Netlify, Vercel, etc.)

### Méthode 3 : Développement Local
```bash
# Si vous avez Python installé
python -m http.server 8000

# Ou avec Node.js et http-server
npx http-server

# Puis ouvrir : http://localhost:8000
```

##  Dépendances (CDN)

Toutes les bibliothèques sont chargées via CDN (aucune installation requise) :

```html
<!-- Bootstrap CSS -->
https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css

<!-- Animate.css -->
https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css

<!-- Hover.css -->
https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css

<!-- Google Fonts -->
https://fonts.googleapis.com/css2?family=Playfair+Display...

<!-- Font Awesome -->
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css

<!-- AOS -->
https://unpkg.com/aos@2.3.1/dist/aos.css

<!-- jQuery -->
https://code.jquery.com/jquery-3.7.1.min.js

<!-- Bootstrap JS -->
https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js

<!-- AOS JS -->
https://unpkg.com/aos@2.3.1/dist/aos.js
```

##  Conformité aux Exigences

###  Structure Minimale Obligatoire
-  Header + Navbar
-  Section 1 (Hero avec carousel)
-  Section 2 (Statistiques)
-  Section 3 (Formations)
-  Section 4 (Témoignages)
-  Section 5 (Partenaires)
-  Footer avec contact

###  Technologies Obligatoires
-  HTML5
-  CSS3
-  JavaScript
-  jQuery
-  Bootstrap
-  Animate.css
-  Hover.css

###  Exigences UI
-  Design moderne et créatif
-  Carousels fonctionnels
-  Cards avec effets
-  Animations fluides
-  Transitions CSS
-  Site responsive (mobile, tablette, desktop)
-  Cohérence graphique (couleurs, typographie, alignement)

##  Palette de Couleurs

```css
--primary-dark: #0a2540    - Bleu profond 
--primary-medium: #1e4976  - Bleu moyen 
--primary-light: #2d5f8d   - Bleu clair 
--accent-gold: #d4af37     - Or 
--accent-gold-light: #f4d03f - Or clair 
--accent-teal: #17a2b8     - Turquoise 
```

##  Personnalisation

### Modifier les Couleurs
Éditer les variables CSS dans `styles.css` :
```css
:root {
    --primary-dark: #votre-couleur;
    --accent-gold: #votre-couleur;
}
```

### Ajouter/Modifier le Contenu
Éditer directement le fichier `index.html` :
- Modifier les textes des sections
- Ajouter/supprimer des formations
- Changer les témoignages
- Mettre à jour les informations de contact

### Personnaliser les Animations
Dans `script.js`, ajuster les paramètres AOS :
```javascript
AOS.init({
    duration: 1000,  // Durée des animations
    easing: 'ease-in-out-cubic',
    once: true,
    offset: 100
});
```

##  Optimisations Incluses

1. **Performance** :
   - Debounce sur les événements scroll
   - Lazy loading (préparé)
   - CSS optimisé avec variables
   - Transitions GPU-accélérées

2. **SEO** :
   - HTML sémantique
   - Meta tags appropriés
   - Structure heading logique
   - Attributs alt sur icônes

3. **Accessibilité** :
   - Aria labels
   - Navigation au clavier
   - Contrastes de couleurs
   - Tailles de texte lisibles

4. **UX** :
   - Feedback visuel sur interactions
   - Smooth scrolling
   - Indicateurs de chargement
   - États hover clairs

##  Fonctionnalités Bonus

- **Scroll Progress Bar** : Barre de progression en haut
- **Custom Cursor** : Curseur personnalisé sur desktop
- **Easter Egg** : Code Konami (↑↑↓↓←→←→BA)
- **Page Visibility API** : Titre dynamique quand onglet inactif
- **Console Art** : Message de bienvenue dans la console
- **Floating Animations** : Cards avec animations continues

##  Support et Contact

Pour toute question ou assistance :
- **Email** : contact@supmtimeknes.ac.ma
- **Téléphone** : 06 45 62 70 70
- **Adresse** : Al kobera VN, 35 Rue Badr, Meknès

##  Crédits

**Projet d'Examen - Développement Web**
- **Professeur** : MOUNCIF Hamza
- **École** : SUPMTI Meknès
- **Date** : 2026

---

##  Licence

Ce projet est réalisé dans un cadre éducatif pour SUPMTI Meknès.



