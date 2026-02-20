import Hero from '../components/home/Hero';
import FeatureCards from '../components/home/FeatureCards';
import AboutSection from '../components/home/AboutSection';
// Import your gallery here!
import ProjectGallery from '../components/home/ProjectGallery'; 

const Home = () => {
  return (
    <main>
      <Hero />
      <FeatureCards />
      <AboutSection />
      {/* Add the Gallery here so it appears underneath the About Section */}
      <ProjectGallery /> 
      {/* We removed StatsCounter because those numbers are not in your brand identity */}
    </main>
  );
};

export default Home;