import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { GALLERY_IMAGES } from '@/constants/gallery'

function HomeGallery() {
  // Get 4 random images using useMemo to keep them stable across re-renders
  const randomImages = useMemo(() => {
    return [...GALLERY_IMAGES]
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
  }, []);

  return (
    <section className="home_gallery">
      <h2 className="gallery_title">Hình ảnh nổi bật của BARBER</h2>

      <div className="gallery_grid">
        {randomImages.map((img) => (
          <div key={img.id} className="gallery_item">
            <img src={img.src} alt="Gallery item" className="gallery_img" />
          </div>
        ))}
      </div>

      <div className="gallery_footer">
        <Link to="/gallery" className="gallery_more_link">
          Xem nhiều hơn <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  )
}

export default HomeGallery
