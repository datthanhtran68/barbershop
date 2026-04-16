import ServicesHero from './services/ServicesHero'
import ServicesList from './services/ServicesList'

function Services() {
  return (
    <main className="services_page">
      <ServicesHero />
      <ServicesList />
    </main>
  );
}

export default Services;