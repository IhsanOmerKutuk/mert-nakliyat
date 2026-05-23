import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
