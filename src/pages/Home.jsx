import { Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'
import '../styles/Home.css'
// Import các ảnh
import dv1 from '../assets/images/home/dv1.png'
import dv2 from '../assets/images/home/dv2.jpg'
import dv3 from '../assets/images/home/dv3.png'
import ss3 from '../assets/images/home/ss3.jpg'

import anh1 from '../assets/images/home/anh1.png'
import anh2 from '../assets/images/home/anh2.jpg'
import anh3 from '../assets/images/home/anh3.png'


function Home() {
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

  const features = [
    {
      id: 1,
      title: 'Thấu hiểu nhu cầu',
      desc: 'Thợ chuyên nghiệp, nhiệt tình chu đáo',
      img: anh1
    },
    {
      id: 2,
      title: 'Không gian hiện đại',
      desc: 'Tiệm được thiết kế hiện đại, sạch sẽ và thoải mái',
      img: anh2
    },
    {
      id: 3,
      title: 'Đặt lịch dễ dàng',
      desc: 'Hệ thống đặt lịch trực tuyến đơn giản, nhanh chóng',
      img: anh3
    }
  ]

  return (
    <main className="home_page">
      <HeroBanner />

      {/* Section 2: Dịch vụ của chúng tôi */}
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

      {/* Section 3: Về chúng tôi */}
      <section className="home_about">
        <div className="about_image-container">
          <img src={ss3} alt="About Us" className="about_img" />
        </div>

        <div className="about_content">
          <span className="about_tag">Về chúng tôi</span>
          <h2 className="about_title">Di sản của sự xuất sắc</h2>
          <div className="about_text">
            <p>
              Được thành lập với niềm đam mê nghề cắt tóc, tiệm của chúng tôi đã phục vụ cộng đồng hơn một thập kỷ.
              Chúng tôi kết hợp kỹ thuật truyền thống với phong cách hiện đại để mang lại kết quả xuất sắc.
            </p>
            <p>
              Đội ngũ thợ lành nghề của chúng tôi tận tâm cung cấp dịch vụ cá nhân hóa, đảm bảo mỗi khách hàng ra về với vẻ ngoài và cảm giác tuyệt vời nhất.
            </p>
          </div>
          <Link to="/about" className="about_link">
            Tìm hiểu thêm về chúng tôi <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      {/* Section 4: Tại sao chọn chúng tôi? */}
      <section className="home_features">
        <h2 className="features_title_main">Tại sao chọn chúng tôi?</h2>

        <div className="features_wrapper">
          <div className="features_grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature_card">
                <div className="feature_img-container">
                  <img src={feature.img} alt={feature.title} className="feature_img" />
                </div>
                <h3 className="feature_name">{feature.title}</h3>
                <p className="feature_desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home