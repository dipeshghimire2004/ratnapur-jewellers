import { Header } from '@/components/layout';
import { Hero, TimelessElegance, FeaturedProducts } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <TimelessElegance />
      </main>
    </>
  );
}

