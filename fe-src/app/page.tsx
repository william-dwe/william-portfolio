import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import IntroSection from "../components/IntroSection"

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <IntroSection/>
      <AboutSection/>
      <div className="h-screen"></div>
    </main>
  );
}
