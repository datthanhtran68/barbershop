import { Link } from 'react-router-dom'
const ss3 = '/images/home/ss3.jpg'

function HomeAbout() {
  return (
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
  )
}

export default HomeAbout
