import './HomeFeatures.css'
import anh1 from '../../../assets/images/home/anh1.png'
import anh2 from '../../../assets/images/home/anh2.jpg'
import anh3 from '../../../assets/images/home/anh3.png'

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

function HomeFeatures() {
  return (
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
  )
}

export default HomeFeatures
