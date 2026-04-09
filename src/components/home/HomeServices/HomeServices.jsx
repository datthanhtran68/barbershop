import { Link } from 'react-router-dom'
import './HomeServices.css'
import dv1 from '../../../assets/images/home/dv1.png'
import dv2 from '../../../assets/images/home/dv2.jpg'
import dv3 from '../../../assets/images/home/dv3.png'

const services = [
  {
    id: 1,
    title: 'Cắt tóc',
    price: '94,000 VNĐ',
    img: dv1
  },
  {
    id: 2,
    title: 'Uốn tóc',
    price: '386,000 VNĐ',
    img: dv2
  },
  {
    id: 3,
    title: 'Nhuộm tóc',
    price: '199,000 VNĐ',
    img: dv3
  }
]

function HomeServices() {
  return (
    <section className="home_services">
      <div className="home_services-header">
        <span className="services_tag">Dịch vụ của chúng tôi</span>
        <h2 className="services_title">Tay nghề trong từng đường cắt</h2>
      </div>

      <div className="services_grid">
        {services.map((service) => (
          <div key={service.id} className="service_card">
            <h3 className="service_card-name">{service.title}</h3>
            <div className="service_card-img-wrapper">
              <img src={service.img} alt={service.title} className="service_card-img" />
            </div>
            <p className="service_card-price">
              Giá từ: <strong>{service.price}</strong>
            </p>
            <Link to={`/services/${service.id}`} className="service_card-btn">
              Tìm hiểu thêm
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomeServices
