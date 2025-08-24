
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import ParticleSystem from "@/components/3d/particle-system";
import HustleHero from "@/components/sections/hustle-hero";
import Articles from "@/components/sections/articles";
import Ideas from "@/components/sections/ideas";
import Learning from "@/components/sections/learning";

export default function HustleHub() {
  return (
    <div className="min-h-screen bg-luxury-black text-white overflow-x-hidden">
      <ParticleSystem />
      <Navigation />
      <main>
        <HustleHero />
        <Articles />
        <Ideas />
        <Learning />
      </main>
      <Footer />
    </div>
  );
}
