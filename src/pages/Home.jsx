import HeroBanner from './home/HeroBanner'
import HomeServices from './home/HomeServices'
import HomeAbout from './home/HomeAbout'
import HomeFeatures from './home/HomeFeatures'
import HomeGallery from './home/HomeGallery'


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