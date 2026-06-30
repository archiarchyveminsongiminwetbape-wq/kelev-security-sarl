import { useState } from 'react'
import Seo from '../components/Seo'
import { useI18n } from '../i18n/i18n.jsx'

export default function Gallery() {
  const { t } = useI18n()
  const galleryCategories = [
    { id: 'all', label: t('gallery.category.all'), enLabel: 'All' },
    { id: 'interventions', label: t('gallery.category.interventions'), enLabel: 'Interventions' },
    { id: 'equipment', label: t('gallery.category.equipment'), enLabel: 'Equipment' },
    { id: 'training', label: t('gallery.category.training'), enLabel: 'Training' },
    { id: 'events', label: t('gallery.category.events'), enLabel: 'Events' }
  ]
  
  const galleryItems = [
    {
      id: 1,
      category: 'interventions',
      title: t('gallery.item1.title'),
      description: t('gallery.item1.description'),
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'equipment',
      title: t('gallery.item2.title'),
      description: t('gallery.item2.description'),
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'training',
      title: t('gallery.item3.title'),
      description: t('gallery.item3.description'),
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 4,
      category: 'events',
      title: t('gallery.item4.title'),
      description: t('gallery.item4.description'),
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 5,
      category: 'interventions',
      title: t('gallery.item5.title'),
      description: t('gallery.item5.description'),
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 6,
      category: 'equipment',
      title: t('gallery.item6.title'),
      description: t('gallery.item6.description'),
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 7,
      category: 'training',
      title: t('gallery.item7.title'),
      description: t('gallery.item7.description'),
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 8,
      category: 'events',
      title: t('gallery.item8.title'),
      description: t('gallery.item8.description'),
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600&auto=format&fit=crop'
    }
  ]
  
  const [selectedCategory, setSelectedCategory] = useState('all')
  const isEnglish = window.location.pathname.startsWith('/en')
  
  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)
  
  return (
    <section className="section">
      <div className="container-page max-w-5xl">
        <Seo title={t('seo.gallery.title')} description={t('seo.gallery.desc')} />
        <h1 className="h1 mb-2">{t('gallery.title')}</h1>
        <p className="lead mb-8">{t('gallery.lead')}</p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-brand-gold text-black'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {isEnglish ? cat.enLabel : cat.label}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div key={item.id} className="card overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-10 banner p-4 sm:p-8">
          <div className="grid gap-2 sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">{t('gallery.cta.title')}</h3>
              <p className="text-sm text-neutral-300">{t('gallery.cta.lead')}</p>
            </div>
            <a href="/contact" className="btn-primary w-full sm:w-auto">{t('gallery.cta.button')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}