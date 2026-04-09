import { FEATURES } from '@/constants/features'

function HomeFeatures() {
  return (
    <section className="home_features">
      <h2 className="features_title_main">Tại sao chọn chúng tôi?</h2>

      <div className="features_wrapper">
        <div className="features_grid">
          {FEATURES.map((feature) => (
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
