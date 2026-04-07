import { Link, useParams } from 'react-router-dom';

const servicesList = [
  { id: 1, name: 'Classic Haircut', desc: 'Precision cut featuring classic fades or modern textures, finished nicely.', fullDesc: 'Experience a tailored haircut from true professionals. Whether you want a classic fade, an undercut, or a modern textured style, our barbers pay close attention to the shape of your head and the direction of your hair growth to provide a perfect cut.', price: '$35', duration: '45 min', icon: 'bi-scissors' },
  { id: 2, name: 'Hot Towel Shave', desc: 'Relaxing straight razor shave with essential oils and hot towels.', fullDesc: 'Our signature straight razor shave is an experience in itself. Using premium shaving creams, pre-shave oils, and multiple hot towels, we ensure a close, comfortable shave that leaves your skin feeling refreshed and smooth without irritation.', price: '$40', duration: '30 min', icon: 'bi-droplet' },
  { id: 3, name: 'Beard Trim & Sculpt', desc: 'Detailed shaping and trimming for the perfect bearded look.', fullDesc: 'Tame your mane with our beard trim and sculpt service. We trim, edge, and shape your beard to compliment your facial structure, followed by applying premium beard oil and balm to keep it healthy and soft.', price: '$25', duration: '20 min', icon: 'bi-stars' },
  { id: 4, name: 'Kids Haircut', desc: 'Patience and skill for the little gentlemen (under 12).', fullDesc: 'We provide a fun and comfortable experience for the little ones. Our barbers are trained to work with kids, making sure they enjoy their time while getting a stylish cut.', price: '$25', duration: '30 min', icon: 'bi-person' },
  { id: 5, name: 'Coloring & Highlights', desc: 'Professional coloring to cover gray or completely change your style.', fullDesc: 'Want a new look or need to hide some gray hairs? We offer everything from natural color blending to full bold coloring, using high-quality professional hair dyes designed specifically for men.', price: 'From $50', duration: '60+ min', icon: 'bi-palette' },
  { id: 6, name: 'The Full Package', desc: 'Haircut, shave, facial, and styling. The ultimate grooming experience.', fullDesc: 'Treat yourself to the ultimate grooming package. Starting with a consultation, moving to our precision haircut, followed by a hot towel shave, and finishing with a refreshing mini-facial and style. Guaranteed to leave you feeling like a new man.', price: '$90', duration: '90 min', icon: 'bi-award' },
];

function ServiceDetail() {
  const { id } = useParams();
  const service = servicesList.find(s => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="section-padding text-center">
        <h2 className="text-warning">Service Not Found</h2>
        <Link to="/services" className="btn btn-outline-light mt-3">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
            <div className="bg-dark p-5 rounded text-center border border-secondary shadow">
              <i className={`bi ${service.icon} text-warning d-block mb-4`} style={{fontSize: '6rem'}}></i>
              <h1 className="h2 fw-bold">{service.name}</h1>
              <div className="d-flex justify-content-center gap-4 mt-4 text-muted fs-5">
                <div><i className="bi bi-clock me-2"></i> {service.duration}</div>
                <div><i className="bi bi-tag me-2"></i> {service.price}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5" data-aos="fade-left">
            <h2 className="text-warning mb-4">About this service</h2>
            <p className="lead text-light mb-4">{service.fullDesc}</p>
            <div className="d-flex gap-3">
              <Link to="/booking" className="btn btn-warning btn-lg px-4">Book This Service</Link>
              <Link to="/services" className="btn btn-outline-light btn-lg px-4">Back to Menu</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
