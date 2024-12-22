import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <AboutSection isParalax={false}/>
      <div className="h-[100vh] w-full bg-black"></div>
    </main>
  );
}
