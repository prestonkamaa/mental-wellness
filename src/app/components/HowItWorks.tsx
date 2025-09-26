import GreenBgBtn from "./Buttons/GreenBgBtn";
import Image from "next/image";
import meditate from "../../../public/img/3-min.png"

export default function HowItWorks() {
  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1 lg:py-16 py-5 lg:px-20 items-center lg:space-y-0 space-y-3">
        <div className=" lg:space-y-5 space-y-2 ">
            <h2 className="text-sm font-semibold uppercase"> How It Works</h2>
            <h1 className="lg:text-[3.25rem] text-3xl font-bold lg:w-[400px] lg:leading-16 "> 
                We Help You Prioritize Your Mental Health
            </h1>
            
            <p className=" lg:text-[1.375rem] lg:w-[400px] "> Browse therapists, book a session, and start your healing journey with trusted professionals. </p>
             
            <GreenBgBtn btnTitle="Find A Therapist" />  

        </div>

        <div>
            <div className=" bg-primary w-full lg:h-[500px] h-[350px] lg:rounded-[3.75rem] rounded-2xl relative items-center justify-center inset-0 ">
                <Image
                    src={meditate}
                    alt=""
                    width={0}
                    height={0}
                    className=" mx-auto lg:w-[350px] w-[250px] absolute left-0 right-0 bottom-0   "

                />
            </div>

        </div>
      
    </div>
  )
}
