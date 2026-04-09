import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">

        {/* Cột 1 - Thương hiệu */}
        <div>
          <div className="footer_logo">BABER</div>
          <p className="footer_desc">
            Dịch vụ cắt tóc cao cấp dành cho quý ông hiện đại.
            Trải nghiệm nghệ thuật cắt tóc truyền thống
          </p>
          <div className="footer_socials">
            <a href="#" className="footer_social-btn">𝕏</a>
            <a href="#" className="footer_social-btn">f</a>
            <a href="#" className="footer_social-btn">◎</a>
          </div>
        </div>

        {/* Cột 2 - Điều hướng */}
        <div>
          <div className="footer_heading">Điều hướng</div>
          <nav className="footer_nav">
            <Link to="/" className="footer_nav-link">Trang chủ</Link>
            <Link to="/about" className="footer_nav-link">Giới thiệu</Link>
            <Link to="/services" className="footer_nav-link">Dịch vụ</Link>
            <Link to="/gallery" className="footer_nav-link">Bộ sưu tập</Link>
            <Link to="/booking" className="footer_nav-link">Đặt lịch</Link>
          </nav>
        </div>

        {/* Cột 3 - Liên hệ */}
        <div>
          <div className="footer_heading">Liên hệ</div>
          <div className="footer_contact">
            <span className="footer_contact-item">101 Phú Diễn, Bắc Từ Liêm, Hà Nội</span>
            <span className="footer_contact-item">+84 28 1234 5678</span>
            <span className="footer_contact-item">hello@barber.vn</span>
          </div>
        </div>

        {/* Cột 4 - Giờ mở cửa */}
        <div>
          <div className="footer_heading">Giờ mở cửa</div>
          <div className="footer_hours">
            <div className="footer_hours-item">
              <span className="footer_hours-day">Thứ 2 - Thứ 6</span>
              <span className="footer_hours-time">9:00 - 20:00</span>
            </div>
            <div className="footer_hours-item">
              <span className="footer_hours-day">Thứ 7</span>
              <span className="footer_hours-time">10:00 - 18:00</span>
            </div>
            <div className="footer_hours-item">
              <span className="footer_hours-day">Chủ nhật</span>
              <span className="footer_hours-time">Nghỉ</span>
            </div>
          </div>
        </div>

      </div>

      <div className="footer_bottom">
        © Copyright 2026, All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer