import { Header, Footer } from '@/components/layout';
import { Hero, TimelessElegance, SignatureShowcase, FeaturedProducts, TestimonialsSection } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TimelessElegance />
        <SignatureShowcase />
        <FeaturedProducts />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}

