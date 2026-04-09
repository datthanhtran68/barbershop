import HeroBanner from '../components/home/HeroBanner/HeroBanner'
import HomeServices from '../components/home/HomeServices/HomeServices'
import HomeAbout from '../components/home/HomeAbout/HomeAbout'
import HomeFeatures from '../components/home/HomeFeatures/HomeFeatures'
import HomeGallery from '../components/home/HomeGallery/HomeGallery'
import '../styles/Home.css'

function Home() {
  return (
    <main className="home_page">
      <HeroBanner />
      <HomeServices />
      <HomeAbout />
      <HomeFeatures />
      <HomeGallery />
    </main>
  )
}

export default Home