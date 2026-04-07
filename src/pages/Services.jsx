import { Link } from 'react-router-dom';

const services = {
  cutting: [
    { name: 'Cắt Tóc Phổ Thông', price: '100.000 VNĐ', desc: 'Combo cắt + xả + sấy tạo kiểu cơ bản.' },
    { name: 'Cắt Tóc Master', price: '250.000 VNĐ', desc: 'Master Barber tư vấn & thực hiện kỹ lưỡng.' },
    { name: 'Cắt Tóc Trẻ Em', price: '80.000 VNĐ', desc: 'Dành cho các bé dưới 12 tuổi.' },
  ],
  washing: [
    { name: 'Gội Đầu Cơ Bản', price: '50.000 VNĐ', desc: 'Gội đầu thư giãn & massage da đầu nhẹ.' },
    { name: 'Combo Gội & Massage Mặt', price: '120.000 VNĐ', desc: 'Massage mặt + đắp mặt nạ thảo mộc.' },
    { name: 'Gội Đầu Dưỡng Sinh', price: '180.000 VNĐ', desc: 'Gội đầu kết hợp bấm huyệt cổ vai gáy.' },
  ]
};

function Services() {
  return (
    <div className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-down">
          <h1 className="display-4 fw-bold">Dịch vụ của chúng tôi</h1>
          <p className="text-muted fs-5">Làm mới phong cách - Nâng tầm đẳng cấp cho quý ông.</p>
        </div>

        {/* Round Category Icons */}
        <div className="row text-center mb-5 pb-5 g-4" data-aos="fade-up">
          {['Tư vấn', 'Cắt tóc', 'Gội đầu', 'Combo'].map((cat, i) => (
            <div key={i} className="col-md-3">
              <div className="bg-light-gray rounded-circle p-4 scale-hover transition mx-auto d-flex align-items-center justify-content-center" style={{width: '120px', height: '120px'}}>
                <i className={`bi bi-${['chat-dots', 'scissors', 'droplet', 'gift'][i]} fs-2`}></i>
              </div>
              <h5 className="mt-3 fw-bold">{cat.toUpperCase()}</h5>
            </div>
          ))}
        </div>

        {/* CẮT TÓC Row */}
        <div className="row mb-5 pb-5 g-4" data-aos="fade-right">
          <div className="col-lg-6">
            <h2 className="mb-4 border-start border-4 border-dark ps-3 fw-bold">CẮT TÓC</h2>
            <div className="pe-lg-4">
              {services.cutting.map((s, idx) => (
                <div key={idx} className="service-item d-flex justify-content-between align-items-center py-4 mb-2 border-bottom">
                  <div>
                    <h5 className="mb-1 text-uppercase fw-bold">{s.name}</h5>
                    <p className="text-muted small mb-0">{s.desc}</p>
                  </div>
                  <div className="service-price fw-bold fs-5">{s.price}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-2 mt-1">
              {[1, 2, 3, 4].map(idx => (
                <div key={idx} className="col-6">
                  <img src={`https://images.unsplash.com/photo-${1599351431202 + idx}-1e0f0137899a?auto=format&fit=crop&w=400`} className="img-fluid mb-2 rounded-0 shadow-sm" alt="cut" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GỘI ĐẦU Section with large images */}
        <div className="section-padding" data-aos="fade-left">
          <h2 className="mb-5 text-center fw-bold">GỘI ĐẦU THƯ GIÃN</h2>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="ps-lg-4">
                {services.washing.map((s, idx) => (
                  <div key={idx} className="service-item d-flex justify-content-between align-items-center py-4 mb-2 border-bottom text-end">
                    <div className="service-price fw-bold fs-5 me-4">{s.price}</div>
                    <div>
                      <h5 className="mb-1 text-uppercase fw-bold">{s.name}</h5>
                      <p className="text-muted small mb-0">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <img src="https://images.unsplash.com/photo-1593702295094-118501254645?auto=format&fit=crop&w=800" className="img-fluid mb-2 shadow-lg" alt="Wash wide" />
            </div>
          </div>
        </div>

        {/* Combo / Ưu đãi section */}
        <div className="row mt-5" data-aos="zoom-in">
          <div className="col-12">
            <div className="p-5 text-center bg-light-gray border border-2">
              <h5 className="text-muted mb-2">ĐẶC BIỆT</h5>
              <h2 className="display-4 fw-bold mb-4">COMBO ƯU ĐÃI</h2>
              <p className="lead mb-4">Trải nghiệm dịch vụ tốt nhất của chúng tôi với mức giá cực kỳ ưu đãi cho combo trọn gói.</p>
              <button className="btn btn-outline-dark btn-lg px-5">XEM COMBO <i className="bi bi-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;