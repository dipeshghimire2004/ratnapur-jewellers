import { Header, Footer } from '@/components/layout';
import { ContactSection } from '@/components/sections/contact-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Ratnapur Jewellers',
  description: 'Get in touch with Ratnapur Jewellers for fine jewelry inquiries, bespoke designs, and private boutique appointments.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-white">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
