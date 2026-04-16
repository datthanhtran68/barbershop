import GalleryHero from './gallery/GalleryHero'
import GalleryGrid from './gallery/GalleryGrid'

function Gallery() {
  return (
    <main className="gallery_page">
      <GalleryHero />
      <GalleryGrid />
    </main>
  );
}

export default Gallery;