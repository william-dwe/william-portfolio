import ServiceSection from "../../components/ServiceSection"
import AboutSection from "@/components/AboutSection";
import ZoomParalaxSection from "../../components/ZoomParalaxSection"

export default function Project() {
  return (
    <main>
      <ServiceSection/>
      <AboutSection isShowingModel={false}/>
      <ZoomParalaxSection/>
    </main>
  );
}
