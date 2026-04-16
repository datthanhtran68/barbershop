import { Link } from 'react-router-dom'
import { SERVICES_DETAIL } from '@/constants/servicesDetail'

function ServicesList() {
  return (
    <section className="services_list">
      {SERVICES_DETAIL.map((category, idx) => (
        <div key={idx} className="services_group">
          <h2 className="services_group-title">{category.category}</h2>
          <div className="services_items-grid">
            {category.items.map((item) => (
              <div key={item.id} className="service_item-card">
                <div className="service_item-header">
                  <h3 className="service_item-title">{item.title}</h3>
                  <span className="service_item-price">{item.price}</span>
                </div>
                <p className="service_item-desc">{item.description}</p>
                <Link to="/booking" className="btn_book-now">
                  Đặt ngay
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default ServicesList
