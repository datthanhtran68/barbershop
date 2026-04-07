import { useState } from 'react';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    barber: '',
    dateTime: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="section-padding text-center bg-white">
        <div className="container py-5">
           <div className="card p-5 border-0 shadow-lg mx-auto" style={{maxWidth: '600px'}}>
              <i className="bi bi-check-circle-fill text-dark display-1 mb-4"></i>
              <h2 className="fw-bold mb-3">ĐĂNG KÝ THÀNH CÔNG!</h2>
              <p className="text-muted mb-4">Cảm ơn {formData.name}, yêu cầu đặt lịch của bạn đang được xử lý. Chúng tôi sẽ gọi điện xác nhận trong 15 phút tới.</p>
              <button className="btn btn-book py-3" onClick={() => setSubmitted(false)}>QUAY LẠI</button>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding bg-white">
      <div className="container">
        <div className="row g-0 shadow-lg border">
          {/* Booking Form Side */}
          <div className="col-lg-7 p-4 p-md-5 bg-white" data-aos="fade-right">
            <h2 className="fw-bold mb-5 border-start border-4 border-dark ps-3">ĐẶT LỊCH HẸN</h2>
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-6 mb-3">
                <label className="form-label small fw-bold text-uppercase">Họ tên *</label>
                <input type="text" className="form-control rounded-0 p-3 bg-light border-0" name="name" onChange={handleChange} required placeholder="Nhập họ và tên..." />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label small fw-bold text-uppercase">Số điện thoại *</label>
                <input type="tel" className="form-control rounded-0 p-3 bg-light border-0" name="phone" onChange={handleChange} required placeholder="09xx xxx xxx" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label small fw-bold text-uppercase">Chọn dịch vụ *</label>
                <select className="form-select rounded-0 p-3 bg-light border-0" name="service" onChange={handleChange} required>
                  <option value="">-- Chọn dịch vụ --</option>
                  <option value="Cắt tóc">Cắt tóc nam</option>
                  <option value="Gội đầu">Gội đầu thư giãn</option>
                  <option value="Combo">Combo đặc biệt</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label small fw-bold text-uppercase">Chọn thợ cắt tóc</label>
                <select className="form-select rounded-0 p-3 bg-light border-0" name="barber" onChange={handleChange}>
                  <option value="">-- Chọn thợ (tùy chọn) --</option>
                  <option value="Barber A">Barber A</option>
                  <option value="Barber B">Barber B</option>
                  <option value="Barber C">Barber C</option>
                </select>
              </div>
              <div className="col-12 mb-4">
                <label className="form-label small fw-bold text-uppercase">Ngày & Giờ mong muốn *</label>
                <input type="datetime-local" className="form-control rounded-0 p-3 bg-light border-0" name="dateTime" onChange={handleChange} required />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-book w-100 py-3 mt-2">GỬI ĐĂNG KÝ <i className="bi bi-send ms-2"></i></button>
              </div>
            </form>
          </div>

          {/* Contact Info Side */}
          <div className="col-lg-5 p-4 p-md-5 bg-dark text-white" data-aos="fade-left">
            <h2 className="fw-bold mb-5 border-start border-4 border-light ps-3">THÔNG TIN LIÊN HỆ</h2>
            <div className="mb-4 d-flex align-items-center">
               <i className="bi bi-geo-alt fs-2 me-3"></i>
               <div>
                  <h6 className="fw-bold mb-0">ĐỊA CHỈ</h6>
                  <p className="mb-0 text-white-50">123 Trần Duy Hưng, Cầu Giấy, Hà Nội</p>
               </div>
            </div>
            <div className="mb-4 d-flex align-items-center">
               <i className="bi bi-telephone fs-2 me-3"></i>
               <div>
                  <h6 className="fw-bold mb-0">HOTLINE ĐẶT LỊCH</h6>
                  <p className="mb-0 text-white-50">024 - 1234 5678 (24/7)</p>
               </div>
            </div>
            <div className="mb-4 d-flex align-items-center">
               <i className="bi bi-clock fs-2 me-3"></i>
               <div>
                  <h6 className="fw-bold mb-0">GIỜ MỞ CỬA</h6>
                  <p className="mb-0 text-white-50">Thứ 2 - Chủ Nhật: 08:00 - 20:00</p>
               </div>
            </div>
            <div className="mt-5">
               <h6 className="fw-bold mb-3">KẾT NỐI VỚI CHÚNG TÔI</h6>
               <div className="d-flex gap-3 fs-3">
                  <a href="#" className="text-white hover-opacity-75"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-white hover-opacity-75"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="text-white hover-opacity-75"><i className="bi bi-tiktok"></i></a>
                  <a href="#" className="text-white hover-opacity-75"><i className="bi bi-youtube"></i></a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;