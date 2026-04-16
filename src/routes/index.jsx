import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Gallery from '../pages/Gallery'

export const routes = [
  {
    path: '/',
    element: <Home />,
    index: true
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/gallery',
    element: <Gallery />
  }
]
