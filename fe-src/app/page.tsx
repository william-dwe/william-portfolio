import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ZoomParalaxSection from "../components/ZoomParalaxSection"

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <AboutSection/>
      <ZoomParalaxSection/>
      <div className="h-screen"></div>
    </main>
  );
}
