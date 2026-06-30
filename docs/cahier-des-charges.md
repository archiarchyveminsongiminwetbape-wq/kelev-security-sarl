# Cahier des charges – Kelev Security SARL

## 1. Présentation
- **Client**: Kelev Security SARL
- **Objectif**: Site vitrine bilingue (FR/EN) pour présenter les services de sécurité et convertir via un formulaire devis/contact.
- **KPIs**:
  - Taux de conversion (soumissions formulaire)
  - Engagement (clics CTA, vues Services/Contact/Blog)
  - Trafic (sessions, sources)

## 2. Périmètre fonctionnel
- **Pages**
  - **Accueil**: Hero, valeurs/atouts, services clés, CTA "Demander un devis".
  - **Services**: Tuiles riches (icônes), points forts, bannière CTA.
  - **Blog**: onglets Articles/Vidéos/Photos, cartes, lien détail article.
  - **Article**: titre, date, image, contenu, lien retour.
  - **Contact / Devis**: formulaire (nom, entreprise, email, téléphone, service, message), envoi Formspree, honeypot, redirection Merci.
  - **Merci**: accusé de réception, CTA retour/voir services.
  - **404**: page introuvable, CTA retour/contact.
  - (Optionnel) **À propos**: valeurs, équipe, certifications.
- **Internationalisation (i18n)**
  - FR/EN via sélecteur Navbar, persistance localStorage.
  - Tous textes UI + SEO localisés. Dates formatées selon langue.
- **Formulaire**
  - Validation client (champs requis, formats), états (loading/success/error).
  - Anti-spam: honeypot (+ reCAPTCHA v3 optionnel).
  - Analytics: event de conversion `lead_submitted`.
- **Contenus**
  - Blog en fichiers (JS): Articles/Vidéos/Photos.
  - Articles bilingues via champs EN (title/excerpt/content).

## 3. Périmètre non-fonctionnel
- **Performance**: Vite + React, Tailwind; images optimisées.
- **Accessibilité**: contrastes, focus visibles, aria labels.
- **Sécurité**: pas de secrets exposés; backend formulaire Formspree; reCAPTCHA optionnel.
- **SEO**: titres/meta par page, Open Graph; sitemap/robots selon hébergeur.
- **Compatibilité**: navigateurs modernes (dernières versions principales).

## 4. Identité & UI
- **Charte**: thème noir/doré (conforme logo).
- **Logo**: `public/logo.png`.
- **Design system**: boutons (`btn-primary`, `btn-ghost`), cartes (`card`), bannières (`banner`), fond hero (`hero-bg`).

## 5. Architecture technique
- **Stack**: React 18, Vite, TailwindCSS, React Router v6.
- **Structure**:
  - `src/pages`: Home, Services, Blog, Article, Contact, Merci, NotFound
  - `src/components`: Navbar, Footer, Seo
  - `src/i18n`: provider + dictionnaires (FR/EN)
  - `src/content`: `articles.js`, `videos.js`, `photos.js`
  - `src/config/site.js`: coordonnées, Formspree, reCAPTCHA, analytics
- **i18n**: contexte `I18nProvider`, hook `useI18n()`, clés pour UI/SEO/labels/menus/options.
- **SEO**: composant `Seo` sur chaque page (titre/description localisés, Open Graph).
- **Formulaire**: POST JSON vers `https://formspree.io/f/<ID>`, redirection `/merci`, erreur gérée, honeypot, reCAPTCHA (si configuré).

## 6. Modèle de contenu
- **Articles (`src/content/articles.js`)**
  - `slug`, `title`, `excerpt`, `content`, `date`, `cover`
  - Champs EN: `enTitle`, `enExcerpt`, `enContent`
- **Videos (`videos.js`)**: `id`, `title`, `date`, `thumbnail`, `url`
- **Photos (`photos.js`)**: `id`, `title`, `date`, `src`

## 7. Données & configuration
- `src/config/site.js`:
  - Coordonnées: `phone`, `phoneLink`, `email`, `address`, `hours`
  - Formulaires: `forms.formspreeId = "mwpwjlwv"`, `forms.recaptchaSiteKey` (optionnel)
  - Analytics: `analytics.enabled` (booléen)

## 8. Règles de validation (Contact)
- Requis: nom, email (format), téléphone, service, message (≥ 10 chars)
- Honeypot: champ caché qui bloque les bots
- reCAPTCHA v3: token ajouté si `recaptchaSiteKey` présent

## 9. Analytics & Tracking
- Événement conversion: `lead_submitted` (gtag/dataLayer si présent).

## 10. Déploiement
- Hébergeur: Netlify/Vercel recommandé (SPA fallback automatique).
- Build: `vite build`.
- Domaine: DNS + HTTPS auto.
- CI/CD: build sur branche principale; previews.

## 11. Tests & recette
- **i18n**: FR/EN sur toutes les pages, persistance.
- **Formulaire**: validations, envoi OK, redirection `/merci`, erreurs affichées.
- **Anti-spam**: honeypot actif (et reCAPTCHA si configuré).
- **SEO**: titres/meta localisés.
- **Accessibilité**: navigation clavier, contrastes.
- **Responsif**: mobile/tablette/desktop.
- **Acceptation**:
  - Site entièrement bilingue (UI + SEO + dates + options).
  - Formulaire opérationnel via Formspree + redirection `/merci`.
  - Event `lead_submitted` émis si analytics présent.
  - Blog/Article affichent la langue choisie (fallback FR si EN manquant).

## 12. Planning indicatif
- J0–J1: UI/UX Home & Services + Navbar/Footer
- J1: Contact (Formspree, validations, honeypot, reCAPTCHA opt), Merci, analytics
- J1: Blog (onglets + détail)
- J2: i18n complet (UI/SEO/dates/options/articles EN)
- J3: Tests + optimisations + déploiement

## 13. Risques & mitigations
- **Formspree ID** manquant → formulaire désactivé (message explicite).
- **reCAPTCHA** absent → honeypot suffit (surveiller spam).
- **Contenus EN** incomplets → fallback FR (clés absentes visibles pour QA).

## 14. Maintenance & évolutivité
- Ajout de contenu: éditer `src/content/*.js`
- Nouvelles pages: suivre pattern pages + `Seo` + i18n
- CMS (optionnel): migration possible (Contentful/Strapi/Netlify CMS)
- Analytics: ajouter des events (clic CTA, navigation onglets)

## 15. Livrables
- Code source React + Tailwind + Vite
- Fichiers de contenu (`src/content`)
- Configurations (`src/config/site.js`, i18n)
- Manifest & favicon
- Option: README technique

## 16. Glossaire
- **CTA**: Call To Action
- **Honeypot**: champ anti-spam caché
- **Formspree**: backend serverless pour formulaires
- **i18n**: internationalisation
