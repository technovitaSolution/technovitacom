import Hero from '../components/Hero';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import MultiStepForm from '../components/MultiStepForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Testimonials />
      <MultiStepForm />
      <About />
      <Footer />
    </main>
  );
}
