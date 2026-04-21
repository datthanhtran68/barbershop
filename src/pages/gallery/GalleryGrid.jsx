import { useState } from 'react'
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from '@/constants/gallery'

function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('mullet')
  const filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory)

  return (
    <section className="gallery_content">
      <div className="gallery_filters">
        {GALLERY_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`gallery_filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="gallery_grid">
        {filteredImages.map(img => (
          <div key={img.id} className="gallery_item">
            <img src={img.src} alt={img.category} className="gallery_img" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default GalleryGrid
