"use client"
import GreenBgBtn from "./Buttons/GreenBgBtn";
import Image from "next/image";
import meditate from "../../../public/img/3-min.png"
import { motion } from "framer-motion";
// import * as motion from "motion/react-client" 

export default function HowItWorks() {
  return (
    <div className=" container grid lg:grid-cols-2 grid-cols-1 lg:py-16 py-5 lg:px-20 items-center lg:space-y-0 space-y-3">
        <div className=" lg:space-y-5 space-y-2 ">
            <motion.h2
                initial={{opacity:0, x:-100 }} 
                whileInView={{opacity:1, x:0 }}
                animate={{ opacity:1, x:0 }}
                transition={{ 
                    type:"spring", 
                    stiffness:50,
                    damping:10,
                    delay:0.2,
                
                }}   
                className="text-sm font-semibold uppercase"
            > 
                How It Works
            </motion.h2>

            <motion.h1
                initial={{opacity:0, x:-100 }} 
                whileInView={{opacity:1, x:0 }}
                animate={{ opacity:1, x:0 }}
                transition={{ 
                    type:"spring", 
                    stiffness:50,
                    damping:10,
                    delay:0.4,
                
                }}              
             className="lg:text-[3.25rem] text-3xl font-bold lg:w-[400px] lg:leading-16 "
             > 
                We Help You Prioritize Your Mental Health
            </motion.h1>
            
            <motion.p
                initial={{opacity:0, x:-100 }} 
                whileInView={{opacity:1, x:0 }}
                animate={{ opacity:1, x:0 }}
                transition={{ 
                    type:"spring", 
                    stiffness:50,
                    damping:10,
                    delay:0.6,
                
                }}          
             className=" lg:text-[1.375rem] lg:w-[400px] "
            > 
            Browse therapists, book a session, and start your healing journey with trusted professionals. 
            </motion.p>

            <motion.div
                initial={{opacity:0, x:-100 }} 
                whileInView={{opacity:1, x:0 }}
                animate={{ opacity:1, x:0 }}
                transition={{ 
                    type:"spring", 
                    stiffness:50,
                    damping:10,
                    delay:0.8,
                
                }}             
            >
                <GreenBgBtn btnTitle="Find A Therapist" />  
            </motion.div> 
            

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
