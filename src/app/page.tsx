import HomePage from "./home/page";
import NavBar from "./components/NavigationBar/NavBar";
import GetInTouch from "./components/GetInTouch";
// import { EmblaCarousel } from "./components/Slider/Slider";
// import { EmblaCarousel } from "./components/Slider/EmblaCarousel";



export default function Home() {
  return (
    <div className=" lg:px-20 px-4 ">
      <NavBar />
      {/* <EmblaCarousel /> */}
      <HomePage />
      <GetInTouch />  
    </div>
  );
}
