import { Header } from '@/components/layout/header';
import { Hero } from '@/components/home/hero';
import { Features } from '@/components/home/features';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}