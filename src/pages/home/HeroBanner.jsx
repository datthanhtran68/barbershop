import { Link } from 'react-router-dom'
const bannerImg = '/images/home/banner.jpg'

function HeroBanner() {
    return (
        <section className="hero">
            <img src={bannerImg} alt="Hero Banner" className="hero_bg" />
            <div className="hero_overlay" />
            <div className="hero_content">
                <h1 className="hero_title">Nghệ thuật cắt tóc truyền thống</h1>
                <p className="hero_desc">
                    Trải nghiệm dịch vụ cắt tóc cao cấp trong không gian sang trọng.
                    Đội ngũ thợ lành nghề mang đến những kiểu tóc chính xác
                    và phong cách vượt thời gian
                </p>
                <Link to="/booking" className="hero_btn">ĐẶT LỊCH NGAY</Link>
            </div>
        </section>
    )
}

export default HeroBanner
