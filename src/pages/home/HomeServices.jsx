import { Link } from 'react-router-dom'
import { SERVICES } from '@/constants/services'

function HomeServices() {
  return (
    <section className="home_services">
      <div className="home_services-header">
        <span className="services_tag">Dịch vụ của chúng tôi</span>
        <h2 className="services_title">Tay nghề trong từng đường cắt</h2>
      </div>

      <div className="services_grid">
        {SERVICES.map((service) => (
          <div key={service.id} className="service_card">
            <h3 className="service_card-name">{service.title}</h3>
            <div className="service_card-img-wrapper">
              <img src={service.img} alt={service.title} className="service_card-img" />
            </div>
            <p className="service_card-price">
              Giá từ: <strong>{service.price}</strong>
            </p>
          </div>
        ))}
      </div>

      <div className="services_view-all">
        <Link to="/services" className="btn_secondary">
          Xem tất cả dịch vụ <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  )
}

export default HomeServices
