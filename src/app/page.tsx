import HomePage from "./home/page";
import NavBar from "./components/NavigationBar/NavBar";
import GetInTouch from "./components/GetInTouch";



export default function Home() {
  return (
    <div className=" lg:px-20 px-4 "> 
      <NavBar />   
      <HomePage />
      <GetInTouch />
    </div>
  );
}
