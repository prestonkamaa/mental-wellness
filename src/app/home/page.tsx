import Community from "../components/Community";
import ExploreLearn from "../components/ExploreLearn";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import NeedHelp from "../components/NeedHelp";
import Services from "../components/Services";  
import Testimonials from "../components/Testimonials";


export default function HomePage() {
  return (
    <div>

      <HeroSection />
      <HowItWorks />
      <Services />
      <Testimonials />
      <ExploreLearn />
      <Community />
      <NeedHelp />
     
    </div>
  )
}
