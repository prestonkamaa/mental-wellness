import GreenBgBtn from "./Buttons/GreenBgBtn";
import Image from "next/image";
import bgImg1 from "../../../public/img/1-min.png"
import bgImg2 from "../../../public/img/2-min.png"

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary lg:px-20 px-5 lg:py-28 py-5 lg:rounded-[4.375rem] rounded-2xl text-center relative ">
      <h1 className="font-bold lg:text-7xl text-3xl lg:w-[650px]  ">Support for Your Mental Well-being</h1>
      <p className=" lg:py-7 py-3 lg:w-[530px] lg:text-2xl ">Connect with license therapists, counselors and wellness coaches to support your journey.</p>       
      <GreenBgBtn btnTitle="Get Started" />    

      <Image
        src={bgImg1}
        alt=""
        width={0}
        height={0}
        className=" absolute h-full top-0 left-0 lg:rounded-t-[4.375rem] rounded-t-2xl  lg:rounded-l-[4.375rem] rounded-l-2xl "
      />
      <Image
        src={bgImg2}
        alt=""
        width={0}
        height={0}
        className="  absolute top-0 right-0 h-full lg:rounded-r-[4.375rem] rounded-r-2xl "
      />
    </div>
  )
}
