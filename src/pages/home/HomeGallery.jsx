import { Link } from 'react-router-dom'
import { GALLERY_IMAGES } from '@/constants/gallery'

function HomeGallery() {
  return (
    <section className="home_gallery">
      <h2 className="gallery_title">Hình ảnh nổi bật của BARBER</h2>

      <div className="gallery_grid">
        {GALLERY_IMAGES.map((img) => (
          <div key={img.id} className="gallery_item">
            <img src={img.src} alt={img.alt} className="gallery_img" />
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
