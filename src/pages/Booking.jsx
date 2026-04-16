import BookingHero from './booking/BookingHero'
import BookingForm from './booking/BookingForm'

function Booking() {
  return (
    <main className="booking_page">
      <BookingHero />
      <BookingForm />
    </main>
  );
}

export default Booking;