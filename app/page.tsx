import { NoSSR } from '../components/NoSSR';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ClientServicesSection } from '../components/ClientServicesSection';
import { ServicesSection } from '../components/ServicesSection';
import { SoliSection } from '../components/SoliSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { LibrarySection } from '../components/LibrarySection';
import { GlossarySection } from '../components/GlossarySection';
import { BlogSection } from '../components/BlogSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <NoSSR fallback={
        <div className="bg-green-800 text-white py-2 text-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>ООО "Лесбюро"</div>
              <div>Загрузка...</div>
            </div>
          </div>
        </div>
      }>
        <Header />
      </NoSSR>
      
      <main>
        <NoSSR fallback={
          <div className="bg-green-50 py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="h-8 bg-green-200 rounded mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded mb-8 animate-pulse"></div>
              <div className="h-12 bg-green-200 rounded w-32 mx-auto animate-pulse"></div>
            </div>
          </div>
        }>
          <HeroSection />
        </NoSSR>
        
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
