import Home from '../pages/Home'
import About from '../pages/About'

export const routes = [
  {
    path: '/',
    element: <Home />,
    index: true
  },
  {
    path: '/about',
    element: <About />
  }
]
