import { Link } from 'react-router-dom'
import './HomeGallery.css'

// Import images
import sidepart from '../../../assets/images/gallery/sidepart.jpg'
import free4 from '../../../assets/images/gallery/free4.jpg'
import free1 from '../../../assets/images/gallery/free1.jpg'
import fade2 from '../../../assets/images/gallery/fade2.jpg'

const galleryImages = [
  { id: 1, src: sidepart, alt: 'Sidepart hairstyle' },
  { id: 2, src: free4, alt: 'Creative hairstyle' },
  { id: 3, src: free1, alt: 'Modern hairstyle' },
  { id: 4, src: fade2, alt: 'Fade hairstyle' }
]

function HomeGallery() {
  return (
    <section className="home_gallery">
      <h2 className="gallery_title">Hình ảnh nổi bật của BARBER</h2>

      <div className="gallery_grid">
        {galleryImages.map((img) => (
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
