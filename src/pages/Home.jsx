import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section text-left">
        <div className="container">
          <div className="row">
            <div className="col-lg-8" data-aos="fade-up">
              <h1 className="hero-title fw-bold">Nghệ thuật cắt tóc<br />truyền thống</h1>
              <p className="lead mb-5 fs-3 text-white-50">Sống trọn đam mê với những đường kéo điệu nghệ và trau chuốt.</p>
              <Link to="/booking" className="btn btn-outline-light btn-lg px-5 py-3 rounded-0 fs-6 fw-bold border-2">XEM THÊM</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Selection Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <p className="text-dark fw-bold mb-1">Dịch vụ của chúng tôi</p>
            <h2 className="display-5 fw-bold mb-4" style={{fontFamily: "'Montserrat', sans-serif", textTransform: 'none'}}>Tay nghề trong từng đường cắt</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-card text-start">
                <h3 className="mb-4">Cắt tóc</h3>
                <img 
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80" 
                  alt="Cắt tóc" 
                />
                <span className="price-tag text-center w-100 d-block fs-6 fw-bold">Giá từ: <span className="text-dark">94,000 VNÐ</span></span>
                <Link to="/services" className="btn btn-black text-center text-decoration-none">Tìm hiểu thêm</Link>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-card text-start">
                <h3 className="mb-4">Uốn tóc</h3>
                <img 
                  src="https://images.unsplash.com/photo-1532710093739-9470acff878b?auto=format&fit=crop&w=600&q=80" 
                  alt="Uốn tóc" 
                />
                <span className="price-tag text-center w-100 d-block fs-6 fw-bold">Giá từ: <span className="text-dark">386,000 VNÐ</span></span>
                <Link to="/services" className="btn btn-black text-center text-decoration-none">Tìm hiểu thêm</Link>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-card text-start">
                <h3 className="mb-4">Nhuộm tóc</h3>
                <img 
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80" 
                  alt="Nhuộm tóc" 
                />
                <span className="price-tag text-center w-100 d-block fs-6 fw-bold">Giá từ: <span className="text-dark">199,000 VNÐ</span></span>
                <Link to="/services" className="btn btn-black text-center text-decoration-none">Tìm hiểu thêm</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section-padding bg-light-gray">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5" data-aos="fade-right">
              <img 
                src="https://images.unsplash.com/photo-1593702295094-282597e9b601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Style" 
                className="img-fluid shadow-lg"
              />
            </div>
            <div className="col-lg-7 ps-lg-5" data-aos="fade-left">
              <h5 className="text-muted mb-2">TRẢI NGHIỆM ĐẲNG CẤP</h5>
              <h2 className="display-4 fw-bold mb-4">PHONG CÁCH ĐỈNH CAO</h2>
              <p className="lead text-muted mb-4">
                Chúng tôi không chỉ cắt tóc, chúng tôi kiến tạo phong cách. Tại Classic Barber, mỗi đường kéo là một tác phẩm nghệ thuật, mang đến sự tự tin tối cao cho phái mạnh.
              </p>
              <button className="btn btn-outline-dark btn-lg">TÌM HIỂU THÊM</button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog/Guide Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5">CẨM NANG PHÁI MẠNH</h2>
            <div className="row g-4 mt-4">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="card border-0 rounded-0 shadow-sm text-start h-100">
                  <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=600" className="card-img-top rounded-0" alt="Guide 1" />
                  <div className="card-body p-4">
                    <h5 className="card-title text-uppercase fw-bold">Cách chăm sóc râu</h5>
                    <p className="card-text text-muted small">Khám phá những bí quyết giữ cho bộ râu của bạn luôn vào nếp và sạch sẽ...</p>
                    <a href="#" className="text-dark fw-bold text-decoration-none small">CHI TIẾT <i className="bi bi-chevron-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card border-0 rounded-0 shadow-sm text-start h-100">
                  <img src="https://images.unsplash.com/photo-1520192182993-d4584ee30462?auto=format&fit=crop&w=600" className="card-img-top rounded-0" alt="Guide 2" />
                  <div className="card-body p-4">
                    <h5 className="card-title text-uppercase fw-bold">Top kiểu tóc 2024</h5>
                    <p className="card-text text-muted small">Cập nhật ngay những kiểu tóc nam đang dẫn đầu xu hướng năm nay...</p>
                    <a href="#" className="text-dark fw-bold text-decoration-none small">CHI TIẾT <i className="bi bi-chevron-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div className="card border-0 rounded-0 shadow-sm text-start h-100">
                  <img src="https://images.unsplash.com/photo-1512496015851-a1bbb1f4ac5f?auto=format&fit=crop&w=600" className="card-img-top rounded-0" alt="Guide 3" />
                  <div className="card-body p-4">
                    <h5 className="card-title text-uppercase fw-bold">Sử dụng sáp đúng cách</h5>
                    <p className="card-text text-muted small">Bạn đã biết cách chọn và bôi sáp để giữ nếp tóc suốt cả ngày chưa?</p>
                    <a href="#" className="text-dark fw-bold text-decoration-none small">CHI TIẾT <i className="bi bi-chevron-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Team section (as shown in image bottom) */}
      <section className="section-padding bg-light-gray">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-up">Đội ngũ của chúng tôi</h2>
          <div className="row g-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="col-md-3" data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="img-card m-0 border-0 shadow-none">
                  <img 
                    src={`https://images.unsplash.com/photo-${1500648767791 + i}-00dcc994a43e?auto=format&fit=crop&w=600&q=80`} 
                    alt={`Team ${i}`} 
                    className="img-fluid"
                    style={{filter: 'grayscale(100%) brightness(80%)'}}
                  />
                  <div className="p-3 bg-white text-center">
                    <h6 className="fw-bold mb-0">BARBER {String.fromCharCode(64 + i)}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;