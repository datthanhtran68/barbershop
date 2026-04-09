import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    if (!menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <nav className="header">
      <Link to="/" className="header_logo">BARBER</Link>

      {/* Hamburger Toggle */}
      <div className="header_toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <div className={`header_nav_container ${menuOpen ? 'open' : ''}`}>
        <div className="header_mobile_header">
          <Link to="/" className="header_logo" onClick={closeMenu}>BARBER</Link>
          <div className="header_close" onClick={closeMenu}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="header_nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'header_link active' : 'header_link'} onClick={closeMenu}>
            Trang chủ
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? 'header_link active' : 'header_link'} onClick={closeMenu}>
            Giới thiệu
          </NavLink>

          <NavLink to="/services" className={({ isActive }) => isActive ? 'header_link active' : 'header_link'} onClick={closeMenu}>
            Dịch vụ
          </NavLink>

          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'header_link active' : 'header_link'} onClick={closeMenu}>
            Bộ sưu tập
          </NavLink>

          <NavLink to="/booking" className="header_link mobile_only" onClick={closeMenu}>
            Đặt lịch
          </NavLink>
        </div>
      </div>
      <Link to="/booking" className="header_cta">ĐẶT LỊCH NGAY</Link>
    </nav>
  )
}

export default Header