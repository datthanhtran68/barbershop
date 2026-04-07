import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Header.css'

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="header">

      <Link to="/" className="header_logo">BABER</Link>

      <div className="header_nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'header_link active' : 'header_link'}>
          Trang chủ
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? 'header_link active' : 'header_link'}>
          Giới thiệu
        </NavLink>

        <NavLink to="/services" className={({ isActive }) => isActive ? 'header_link active' : 'header_link'}>
          Dịch vụ
        </NavLink>

        <NavLink to="/gallery" className={({ isActive }) => isActive ? 'header_link active' : 'header_link'}>
          Bộ sưu tập
        </NavLink>
      </div>

      <Link to="/booking" className="header_cta">ĐẶT LỊCH NGAY</Link>

    </nav>
  )
}

export default Header