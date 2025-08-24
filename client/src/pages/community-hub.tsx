
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import ParticleSystem from "@/components/3d/particle-system";
import CommunityHero from "@/components/sections/community-hero";
import CommunityStats from "@/components/sections/community-stats";
import CommunityFeatures from "@/components/sections/community-features";
import CommunityEvents from "@/components/sections/community-events";
import CommunityMembers from "@/components/sections/community-members";

export default function CommunityHub() {
  return (
    <div className="min-h-screen bg-luxury-black text-white overflow-x-hidden">
      <ParticleSystem />
      <Navigation />
      <main>
        <CommunityHero />
        <CommunityStats />
        <CommunityFeatures />
        <CommunityEvents />
        <CommunityMembers />
      </main>
      <Footer />
    </div>
  );
}
