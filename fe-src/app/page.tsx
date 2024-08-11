import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import TextParalaxDevider from "../components/TextParalaxDevider"

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-tl from-gray-900 to-black flex-col items-center justify-between p-12 lg:p-24">
      <HeroSection/>
      <TextParalaxDevider/>
      <AboutSection/>
    </main>
  );
}
