import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          CLASSIC BARBER
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Trang Chủ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Giới Thiệu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Dịch Vụ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Bộ Sưu Tập</Link>
            </li>
          </ul>
          <Link className="btn btn-book" to="/booking">Đặt Lịch Ngay</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;