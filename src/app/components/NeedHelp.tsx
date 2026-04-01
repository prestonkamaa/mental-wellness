import Accordions from "./Accordions";
import Image from "next/image";
import openMind  from "../../../public/img/7-min.png";


export default function NeedHelp() {
  return (
    <div className=" container grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 ">
        <div className=" lg:space-y-5 space-y-3 relative lg:pt-0 pt-5">
            <h2 className="text-sm font-semibold uppercase lg:text-left text-center "> Need Help?</h2>
            <h1 className=" font-semibold lg:text-[2.5rem] text-3xl lg:leading-12 lg:w-[350px]  lg:text-left text-center  "> 
                Frequently Asked Questions
            </h1>    
            <p className=" lg:text-[1.25rem] lg:w-[400px] pb-12  lg:text-left text-center "> Find answers to common questions about our services, therapy, and mental well-being.</p>
            
            <Image 
                src={openMind}
                alt="community"
                width={500}
                height={500}
                className="   right-0 bottom-0"
            /> 
        
        </div>

        <div className=" flex items-end">
            <Accordions />
        </div>
      
    </div>
  )
}
