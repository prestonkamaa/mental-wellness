import Image from "next/image"
import support from "../../../public/img/8-min.png"; 

export default function GetInTouch() {
  return (
    <div className=" container lg:py-20 py-4">
        <div className=" flex flex-col items-center justify-center text-center space-y-3 lg:pb-16 pb-4 ">
            <h2 className="text-sm font-semibold uppercase"> Get in Touch</h2>
            <h1 className=" font-semibold lg:text-[2.5rem] text-3xl lg:leading-12 lg:w-[350px]  "> 
                We’re Here to Support You
            </h1>    
            <p className=" lg:text-[1.25rem] lg:w-[450px] "> Whether you have questions, need help getting started, or want to learn more — reach out anytime.</p>
                    
        </div>

        <div className=" grid lg:grid-cols-2 grid-cols-1 lg:p-20 p-4 bg-white lg:space-y-7 space-y-3 lg:rounded-[3.75rem] rounded-3xl relative ">  
            
            <div className=" space-y-3  " >
                <h3 className=" font-semibold lg:text-3xl text-2xl lg:pb-5  "> Contact Us</h3>
                <p> <span className=" font-semibold ">Email:</span> support@solus.com  </p>
                <p> <span className=" font-semibold ">Phone:</span> +1 (123) 456-7890 </p>
                <p> <span className=" font-semibold ">Address:</span> 123 Wellness Way, Calm City, CA 90210 </p>
               
                <div className=" flex gap-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>

                <div className=" absolute bottom-20 ">
                    We typically respond within 12 hours.
                </div>
            </div>

            <div className=" ">
                <h3 className=" font-semibold lg:text-3xl text-xl "> Send Us a Message</h3>

                <div className=" bg-[#FDF7F1] lg:p-10 px-4 lg:rounded-[3.125rem] rounded-3xl space-y-3 mt-9">                                 
                    <div>
                        <p>
                            Email
                        </p>
                        <input type="email" className="peer py-2.5 sm:py-3 pe-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 sm:text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600" placeholder="Email" />                                                                
                    </div>
                    <div>
                        <p>
                            Message
                        </p>                        
                        <input type="textarea" className="peer py-2.5 sm:py-3 pe-0 mt-6 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 sm:text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:focus:border-b-neutral-600" placeholder="Message" />                                             
                    </div>

                    <button className="bg-primary text-white font-semibold text-lg w-full py-2 mt-8 inline-block rounded-full">
                        Send Message
                    </button> 


               </div>


            </div>
        </div>

        <div className=" grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 lg:pt-16 pt-4  ">

            <div className=" bg-white lg:rounded-[3.75rem] rounded-3xl lg:p-10 p-4 ">
                <h3 className=" font-semibold lg:text-[2.5rem] text-3xl "> Solus</h3>
                
                <div className=" grid lg:grid-cols-3 grid-cols-2 lg:gap-5 lg:py-10"> 
                    <div className=" space-y-3">
                        <p> About</p>
                        <p> Services</p>
                        <p> Therapist</p>
                        <p> Resources</p>
                        <p> Contact</p>
                    </div>
                    <div className=" space-y-3">
                        <p> Instagram</p>
                        <p> Facebook</p>
                        <p> Youtube</p>
                        <p> LinkedIn</p> 
                    </div>
                    <div className=" space-y-3">
                        <p> Terms of Use</p>
                        <p> Privacy Policy</p> 
                    </div>
                </div>

                <p className=" text-[#B8B8B8] "> &copy; 2024 Solus. All rights reserved. <a href="https://www.figma.com/community/file/1490253901740476987/solus-mental-health-wellness-website-template"> Figma design link </a>  </p> 

            </div>

            <div className=" bg-primary lg:rounded-[3.75rem] rounded-3xl lg:p-10 p-4 relative ">
                <h3 className=" font-semibold lg:text-[2.5rem] text-xl text-white lg:w-[250px] lg:pb-10 pb-4 "> Find Support, Guidance, and Balance.</h3>

                <button className=" font-semibold bg-white w-full py-2 lg:rounded-[3.75rem] rounded-3xl  ">
                    Find Support Now
                </button>

                <Image 
                    src={support}
                    alt="support"
                    width={500}
                    height={500}
                    className=" absolute w-[200px] top-12 right-0"
                /> 


            </div>
        </div>
      
    </div>
  )
}
