import GreenBgBtn from "./Buttons/GreenBgBtn";
import Image from "next/image"; 
import communityImg from "../../../public/img/6-min.png"

export default function Community() {
  return (
    <div className=" container lg:py-10 ">
        <div className=" flex flex-col lg:p-20 p-4 bg-white lg:space-y-7 space-y-3 lg:rounded-[3.75rem] rounded-3xl relative ">
            <h2 className="text-sm lg:text-left text-center font-semibold uppercase"> Community</h2>
            <h1 className=" font-semibold lg:text-[2.5rem] text-3xl lg:leading-12 lg:w-[350px]  lg:text-left text-center  ">  
                You&apos;re Not Alone on This Journey
            </h1>    
            <p className=" lg:text-[1.25rem] lg:w-[400px] z-20  lg:text-left text-center "> Connect with others, share experiences, and find encouragement in a safe, supportive space.</p>
            <div className=" flex lg:justify-start justify-center items-center z-20 ">
                <GreenBgBtn btnTitle="Join The Community " /> 
            </div>

            <Image 
                src={communityImg}
                alt="community"
                width={500}
                height={500}
                className=" lg:absolute w-[610px] lg:right-0 lg:bottom-0 z-10"
            /> 
 
        </div>  

    </div>
  )
}
