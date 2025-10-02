"use client"
import GreenBgBtn from "./Buttons/GreenBgBtn";
import Image from "next/image";
import bgImg1 from "../../../public/img/1-min.png"
import bgImg2 from "../../../public/img/2-min.png"
import {motion} from "framer-motion"

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary lg:px-20 px-5 lg:py-28 py-5 lg:rounded-[4.375rem] rounded-2xl text-center relative ">
      <motion.h1 
        initial={{opacity:0, y:-100 }}
        animate={{ opacity:1, y:0 }}
        transition={{ 
          type:"spring", 
          stiffness:50,
          damping:10,
          delay:0.03,
        
        }}
        className="font-bold lg:text-7xl text-3xl lg:w-[650px]  "
      >
        Support for Your Mental Well-being
      </motion.h1>

      <motion.p 
        initial={{opacity:0, y:-100 }}
        animate={{ opacity:1, y:0 }}
        transition={{ 
          type:"spring", 
          stiffness:50,
          damping:10,
          delay:0.2,
        
        }}      
        className=" lg:py-7 py-3 lg:w-[530px] lg:text-2xl ">
        Connect with license therapists, counselors and wellness coaches to support your journey.
      </motion.p>  
      <motion.div
        initial={{opacity:0, y:-100 }}
        animate={{ opacity:1, y:0 }}
        transition={{ 
          type:"spring", 
          stiffness:50,
          damping:10,
          delay:0.3,
        
        }}  
      >
        <GreenBgBtn btnTitle="Get Started" />
      </motion.div>     
          

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
