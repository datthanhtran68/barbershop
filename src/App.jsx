import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import { routes } from './routes'

function AppContent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App