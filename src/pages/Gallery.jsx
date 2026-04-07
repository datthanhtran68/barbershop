import { useState } from 'react';

const categories = ['TẤT CẢ', 'CẮT TÓC', 'GỘI ĐẦU', 'KHÔNG GIAN', 'BARBERS'];

const images = [
  { id: 1, cat: 'CẮT TÓC', src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80' },
  { id: 2, cat: 'CẮT TÓC', src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80' },
  { id: 3, cat: 'CẮT TÓC', src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80' },
  { id: 4, cat: 'BARBERS', src: 'https://images.unsplash.com/photo-1532710093739-9470acff878b?auto=format&fit=crop&w=600&q=80' },
  { id: 5, cat: 'KHÔNG GIAN', src: 'https://images.unsplash.com/photo-1520338661084-68006d41b52b?auto=format&fit=crop&w=600&q=80' },
  { id: 6, cat: 'KHÔNG GIAN', src: 'https://images.unsplash.com/photo-1512496015851-a1bbb1f4ac5f?auto=format&fit=crop&w=600&q=80' },
  { id: 7, cat: 'CẮT TÓC', src: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600&q=80' },
  { id: 8, cat: 'GỘI ĐẦU', src: 'https://images.unsplash.com/photo-1536765655574-2bb4515d111c?auto=format&fit=crop&w=600&q=80' },
];

function Gallery() {
  const [activeTab, setActiveTab] = useState('TẤT CẢ');

  const filteredImages = activeTab === 'TẤT CẢ' 
    ? images 
    : images.filter(img => img.cat === activeTab);

  return (
    <div className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <h1 className="display-4 fw-bold">Bộ sưu tập</h1>
          <p className="text-muted fs-5">Những tác phẩm nghệ thuật và không gian đặc trưng của chúng tôi.</p>
        </div>

        {/* Filter Tabs */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5 pb-3 border-bottom" data-aos="fade-up">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`btn btn-link text-decoration-none px-4 py-2 fw-bold text-uppercase ${activeTab === cat ? 'text-dark border-bottom border-dark border-3' : 'text-muted'}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="row g-4 mb-5">
          {filteredImages.map((img, index) => (
            <div key={img.id} className="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="img-card m-0" style={{height: '400px'}}>
                <img 
                  src={img.src} 
                  alt={img.cat} 
                  className="w-100 h-100 object-fit-cover shadow-sm bg-dark"
                  style={{filter: 'brightness(85%)'}}
                />
                <div className="position-absolute bottom-0 start-0 p-3 w-100 bg-gradient text-white d-flex align-items-center opacity-0 hover-opacity-100 transition" style={{background: 'linear-gradient(transparent, rgba(0,0,0,0.8))'}}>
                   <h6 className="mb-0 text-uppercase fw-bold">{img.cat}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Space Images Grid */}
        <div className="section-padding" data-aos="fade-up">
           <h2 className="text-center mb-5 fw-bold">KHÔNG GIAN TIỆM</h2>
           <div className="row g-2">
              <div className="col-md-8">
                 <img src="https://images.unsplash.com/photo-1541334860361-b6574f1cbd02?auto=format&fit=crop&w=1200" className="img-fluid" alt="Space 1" />
              </div>
              <div className="col-md-4">
                 <img src="https://images.unsplash.com/photo-1520338661084-68006d41b52b?auto=format&fit=crop&w=600" className="img-fluid mb-2 h-50 object-fit-cover" alt="Space 2" />
                 <img src="https://images.unsplash.com/photo-1512496015851-a1bbb1f4ac5f?auto=format&fit=crop&w=600" className="img-fluid h-50 object-fit-cover" alt="Space 3" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;