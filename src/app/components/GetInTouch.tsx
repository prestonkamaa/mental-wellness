import Image from "next/image"
import support from "../../../public/img/8-min.png";

export default function GetInTouch() {
  return (
    <div className=" lg:py-20 py-4">
        <div className=" flex flex-col items-center justify-center text-center space-y-3 lg:pb-16 pb-4 ">
            <h2 className="text-sm font-semibold uppercase"> Get in Touch</h2>
            <h1 className=" font-semibold lg:text-[2.5rem] text-3xl lg:leading-12 lg:w-[350px]  "> 
                We’re Here to Support You
            </h1>    
            <p className=" lg:text-[1.25rem] lg:w-[450px] "> Whether you have questions, need help getting started, or want to learn more — reach out anytime.</p>
                    
        </div>

        <div className=" grid lg:grid-cols-2 grid-cols-1 lg:p-20 p-4 bg-white lg:space-y-7 space-y-3 lg:rounded-[3.75rem] rounded-3xl  ">  
            
            <div className=" space-y-3" >
                <h3 className=" font-semibold lg:text-3xl text-2xl lg:pb-5  "> Contact Us</h3>
                <p> <span className=" font-semibold ">Email:</span> support@solus.com  </p>
                <p> <span className=" font-semibold ">Phone:</span> +1 (123) 456-7890 </p>
                <p> <span className=" font-semibold ">Address:</span> 123 Wellness Way, Calm City, CA 90210 </p>
               
                <div>
                    social media links
                </div>

                <p>
                    We typically respond within 12 hours.
                </p>
            </div>

            <div className=" bg-[#FDF7F1] lg:p-10 px-4 lg:rounded-[3.125rem] rounded-3xl ">
                <h3 className=" font-semibold lg:text-3xl text-xl "> Send Us a Message</h3>
                Email
                Message
                Submit button
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

                <p className=" text-[#B8B8B8] "> &copy; 2024 Solus. All rights reserved.</p>

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
