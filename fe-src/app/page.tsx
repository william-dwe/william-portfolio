import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import TextParalaxDevider from "../components/TextParalaxDevider"
import ZoomParalax from "../components/ZoomParalax"

export default function Home() {
  return (
    <main>
      <HeroSection/>
      {/* <TextParalaxDevider/> */}
      <ZoomParalax/>
      <AboutSection/>
      
    </main>
  );
}
