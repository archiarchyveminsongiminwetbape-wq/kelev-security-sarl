# Guide de contenu (Articles, Vidéos, Photos)

Ce site est conçu pour être 100% responsive (mobile/tablette/desktop) et pour permettre d’ajouter facilement de nouveaux contenus. Les médias peuvent être stockés directement dans `public/`.

## Où mettre les fichiers médias
- Placez vos fichiers dans:
  - `public/media/articles/` (images d’articles)
  - `public/media/videos/` (thumbnails des vidéos)
  - `public/media/photos/` (galerie photos)
  - `public/media/press/` (images de presse, logos partenaires, visuels officiels)

Astuce: vous pouvez créer des sous-dossiers par date/catégorie si besoin.

## Ajouter un article
1. Ajoutez l’image de couverture (optionnelle) dans `public/media/articles/`.
2. Ouvrez `src/content/articles.js` et ajoutez un objet au tableau `articles`:

```js
{
  slug: 'mon-nouvel-article',
  title: 'Titre FR',
  enTitle: 'Title EN',
  date: '2025-11-01',
  excerpt: 'Résumé FR',
  enExcerpt: 'EN summary',
  cover: '/media/articles/couverture.jpg', // ou URL externe
  content: `Texte FR\n\nParagraphe 2…`,
  enContent: `EN text\n\nParagraph 2…`
}
```

Notes:
- `slug` doit être unique (utilisé dans l’URL `/blog/:slug`).
- Les champs `enTitle`, `enExcerpt`, `enContent` sont optionnels (fallback FR si absents).

## Ajouter une vidéo
1. Ajoutez une miniature dans `public/media/videos/`.
2. Ouvrez `src/content/videos.js` et ajoutez un objet:

```js
{
  id: 'yt-abc123',
  title: 'Titre de la vidéo',
  date: '2025-10-15',
  thumbnail: '/media/videos/miniature.jpg',
  url: 'https://www.youtube.com/watch?v=abc123'
}
```

## Ajouter une photo (galerie)
1. Ajoutez la photo dans `public/media/photos/`.
2. Ouvrez `src/content/photos.js` et ajoutez un objet:

```js
{
  id: 'p-2025-001',
  title: 'Titre de la photo (FR/EN au choix)',
  date: '2025-09-30',
  src: '/media/photos/photo1.jpg'
}
```

## Ajouter des images de presse
1. Ajoutez vos fichiers dans `public/media/press/` (PNG/JPG/WebP).
2. Référencez-les directement dans le contenu ou les pages via un chemin absolu commençant par `/media/press/...`.
   - Exemple: `<img src="/media/press/logo-partenaire.png" alt="Nom partenaire" />`

## Conseils Responsives
- Utilisez des images optimisées (dimensions adaptées, compression).
- Préférez les formats modernes (WebP/AVIF) si possible.
- Les images référencées avec un chemin commençant par `/` pointent vers `public/`.

## Bonnes pratiques
- Conservez une cohérence de nommage des fichiers (dates, slugs).
- Évitez les espaces/accents dans les noms de fichiers.
- Mettez à jour les champs EN si vous souhaitez une expérience bilingue complète.
