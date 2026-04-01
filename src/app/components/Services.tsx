import GreenBgBtn from "./Buttons/GreenBgBtn";
import OutlineBtn from "./Buttons/OutlineBtn";
import Image from "next/image";
import mindful from "../../../public/img/4-min.png";
import selfcare from "../../../public/img/5-min.png";


export default function Services() {
  return (
    <div className=" container lg:py-5">
        <div className="flex flex-col items-center justify-center lg:space-y-5 space-y-3 text-center">
            <h2 className="text-sm font-semibold  uppercase"> How It Works</h2>
            <h1 className="lg:text-[3.25rem] text-3xl font-bold lg:w-[400px] lg:leading-16 "> 
                Your Path to Well-being
            </h1>    
            <p className=" lg:text-[1.375rem] lg:w-[450px] ">Discover expert guidance for a healthier mind and balanced life.</p>
        </div>

        <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 pt-10 pb-5 ">
            <div className=" flex flex-col lg:p-20 p-5 bg-secondary lg:space-y-7 space-y-5 lg:rounded-[3.75rem] rounded-2xl relative ">
                <h1 className=" font-semibold lg:text-[2.5rem] text-xl lg:w-[300px] lg:leading-12  "> Mindfulness & Meditation</h1>
                <p className=" lg:text-[1.25rem] lg:w-[300px] z-20 "> Guided meditation sessions and stress managment techniques.</p>
                
                <OutlineBtn btnTitle="Learn More" /> 
                <Image
                    src={mindful}
                    alt="Mindfulness Illustration"
                    width={400}
                    height={400}
                    className=" lg:w-[200px] w-[100px] z-10 absolute right-0  mr-5"
                />

            </div>

            <div className=" flex flex-col lg:p-20 p-5 bg-white lg:space-y-7 space-y-5 lg:rounded-[3.75rem] rounded-2xl ">
                <h1 className=" font-semibold lg:text-[2.5rem] text-xl lg:w-[300px] lg:leading-12  ">  One-on-One Therapy</h1>
                <p className=" lg:text-[1.25rem] lg:w-[300px] "> Virtual and in-person therapy session with liscensed proffessionals.</p>
                <OutlineBtn btnTitle="Learn More" /> 

            </div>
        </div>

        <div className=" flex flex-col lg:p-20 p-5 bg-white lg:space-y-7 space-y-3 lg:rounded-[3.75rem] rounded-2xl relative ">
            <h1 className=" font-semibold lg:text-[2.5rem] text-xl lg:leading-12  "> Wellness Coaching</h1>
            <p className=" lg:text-[1.25rem] lg:w-[600px] z-20  "> Personalised guidance to help you build healtheir habits, manage stress and achieve balance in all areas of your life.</p>
            <p className=" lg:text-[1.25rem] lg:w-[600px] z-20 "> Our wellness coaches support you in creating sustainable routines for mental, emotional and physical well-being.</p>                
            <div className="z-20"> 
                <GreenBgBtn btnTitle="Learn More" /> 
            </div>

                <Image
                    src={selfcare}
                    alt="Mindfulness Illustration"
                    width={400}
                    height={400}
                    className=" lg:w-[500px] w-[300px]  absolute right-0 bottom-0 z-10  lg:rounded-b-[3.75rem] rounded-r-2xl "
                />

        </div>

   
   
    </div>
  )
}
