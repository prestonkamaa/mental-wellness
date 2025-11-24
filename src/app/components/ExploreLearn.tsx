"use client";
import ExploreCard from './Cards/ExploreCard'
import { motion } from "framer-motion";
// import * as motion from "motion/react-client" 

export default function ExploreLearn() {
  return (
    <div className=" container lg:py-5 py-4 ">
        <div className="flex flex-col items-center justify-center lg:space-y-5 space-y-3 text-center">
            <motion.h2 
                initial={{opacity:0, x:-100 }} 
                whileInView={{opacity:1}}
                viewport={{ once: true, amount: 0.8 }}
                animate={{ opacity:1, x:0 }}
                transition={{ 
                    type:"spring", 
                    stiffness:50,
                    damping:10,
                    delay:0.8,
                
                }}             
            className="text-sm font-semibold  uppercase"
            >
               Explore & Learn
            </motion.h2>
            <h1 className="lg:text-[3.25rem] text-3xl font-bold lg:w-[400px] lg:leading-16 "> 
                Resources for Your Well-being
            </h1>    
            <p className=" lg:text-[1.375rem] lg:w-[450px] "> Explore expert insights, self-care guides, and tools to support your mental health.</p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4 lg:pt-16 pt-4 ">
            <ExploreCard />
            <ExploreCard />
            <ExploreCard />
        </div>













    </div>
  )
}
