import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ZoomParalaxSection from "../components/ZoomParalaxSection"
import ServiceSection from "../components/ServiceSection"

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <ServiceSection/>
      <AboutSection/>
      <ZoomParalaxSection/>
      <div className="h-screen"></div>
    </main>
  );
}
