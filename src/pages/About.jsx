import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="section-padding bg-white">
      <div className="container">
        {/* Top Story Section */}
        <div className="row align-items-center mb-5 pb-5 border-bottom">
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1541334860361-b6574f1cbd02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Story" 
              className="img-fluid shadow-lg"
            />
          </div>
          <div className="col-lg-6 ps-lg-5" data-aos="fade-left">
            <h5 className="text-muted mb-2">VỀ CHÚNG TÔI</h5>
            <h2 className="display-4 fw-bold mb-4">Câu chuyện của chúng tôi</h2>
            <p className="lead text-muted mb-4">Tại Classic Barber, chúng tôi không chỉ đơn thuần là thợ cắt tóc, chúng tôi là những người giữ lửa cho nghệ thuật làm đẹp phái mạnh truyền thống.</p>
            <p className="text-muted mb-4">Từ năm 2010, chúng tôi đã không ngừng nỗ lực để trở thành điểm đến tin cậy nhất cho các quý ông tại Việt Nam. Không gian sang trọng kết hợp giữa sự cổ điển và hiện đại sẽ đem lại cho bạn những giây phút thư giãn tuyệt vời nhất.</p>
            <p className="text-muted">Chúng tôi phục vụ khách hàng không chỉ bằng tay nghề điêu luyện mà còn bằng cả trái tim và sự chân thành nhất trong từng chi tiết nhỏ.</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row text-center section-padding" data-aos="fade-up">
          <div className="col-md-3">
            <h2 className="display-3 fw-bold text-dark">2010</h2>
            <p className="text-muted text-uppercase fw-bold">NĂM THÀNH LẬP</p>
          </div>
          <div className="col-md-3">
            <h2 className="display-3 fw-bold text-dark">3</h2>
            <p className="text-muted text-uppercase fw-bold">CƠ SỞ TẠI HÀ NỘI</p>
          </div>
          <div className="col-md-3">
            <h2 className="display-3 fw-bold text-dark">1000+</h2>
            <p className="text-muted text-uppercase fw-bold">KHÁCH HÀNG THÂN THIẾT</p>
          </div>
          <div className="col-md-3">
            <h2 className="display-3 fw-bold text-dark">4</h2>
            <p className="text-muted text-uppercase fw-bold">GIẢI THƯỞNG LỚN</p>
          </div>
        </div>

        {/* Team List with Portraits */}
        <div className="section-padding">
          <h2 className="text-center mb-5" data-aos="fade-up">ĐỘI NGŨ NHÂN SỰ</h2>
          <div className="row g-4">
            {[1, 2, 3, 4].map(idx => (
              <div key={idx} className="col-md-3" data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="img-card border-0">
                  <img 
                    src={`https://images.unsplash.com/photo-${1506794778202 - idx}-cad84cf45f1d?auto=format&fit=crop&w=400&q=80`} 
                    className="img-fluid" 
                    alt={`Barber ${idx}`} 
                  />
                  <div className="p-3 text-center border mt-2">
                    <h5 className="mb-1 text-uppercase fw-bold">Barber {idx}</h5>
                    <p className="text-muted small mb-0">CHUYÊN GIA TẠO KIỂU</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;