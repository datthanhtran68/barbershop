import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4 border-bottom border-secondary pb-5">
          <div className="col-lg-4">
            <Link className="footer-logo text-white text-decoration-none" to="/">
              CLASSIC BARBER
            </Link>
            <p className="text-white-50 mb-4 pe-lg-4">Điểm đến tin cậy nhất cho các quý ông tại Việt Nam. Không gian sang trọng, dịch vụ chuyên nghiệp.</p>
            <div className="d-flex gap-3 fs-3">
              <a href="#" className="text-white-50"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white-50"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white-50"><i className="bi bi-tiktok"></i></a>
            </div>
          </div>
          <div className="col-lg-2">
            <h5 className="fw-bold mb-4 text-uppercase">Liên kết</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-white-50 text-decoration-none">TRANG CHỦ</Link></li>
              <li className="mb-2"><Link to="/about" className="text-white-50 text-decoration-none">GIỚI THIỆU</Link></li>
              <li className="mb-2"><Link to="/services" className="text-white-50 text-decoration-none">DỊCH VỤ</Link></li>
              <li className="mb-2"><Link to="/gallery" className="text-white-50 text-decoration-none">BỘ SƯU TẬP</Link></li>
              <li className="mb-2"><Link to="/booking" className="text-white-50 text-decoration-none">ĐẶT LỊCH</Link></li>
            </ul>
          </div>
          <div className="col-lg-3">
             <h5 className="fw-bold mb-4 text-uppercase">Dịch vụ</h5>
             <ul className="list-unstyled">
               <li className="mb-2"><Link to="/services" className="text-white-50 text-decoration-none">Cắt tóc nam</Link></li>
               <li className="mb-2"><Link to="/services" className="text-white-50 text-decoration-none">Gội đầu thư giãn</Link></li>
               <li className="mb-2"><Link to="/services" className="text-white-50 text-decoration-none">Chăm sóc râu</Link></li>
               <li className="mb-2"><Link to="/services" className="text-white-50 text-decoration-none">Tẩy da chết</Link></li>
             </ul>
          </div>
          <div className="col-lg-3">
            <h5 className="fw-bold mb-4 text-uppercase">Liên hệ</h5>
            <p className="text-white-50 mb-2"><i className="bi bi-geo-alt me-2"></i> 123 Trần Duy Hưng, Cầu Giấy, Hà Nội</p>
            <p className="text-white-50 mb-2"><i className="bi bi-telephone me-2"></i> 024 - 1234 5678</p>
            <p className="text-white-50 mb-0"><i className="bi bi-envelope me-2"></i> contact@classicbarber.vn</p>
          </div>
        </div>
        <div className="text-center pt-4 text-white-50 small">
          <p className="mb-0">&copy; {new Date().getFullYear()} Classic Barbershop. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;