import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ClientServicesSection } from './components/ClientServicesSection';
import { ServicesSection } from './components/ServicesSection';
import { SoliSection } from './components/SoliSection';
import { ProjectsSection } from './components/ProjectsSection';
import { LibrarySection } from './components/LibrarySection';
import { GlossarySection } from './components/GlossarySection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ClientServicesSection />
        <ServicesSection />
        <SoliSection />
        <ProjectsSection />
        <LibrarySection />
        <GlossarySection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}