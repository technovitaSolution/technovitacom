import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import MultiStepForm from '../components/MultiStepForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <MultiStepForm />
      <Footer />
    </main>
  );
}
