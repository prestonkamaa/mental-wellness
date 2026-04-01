import Image from "next/image"
import client1 from "../../../public/img/client1.svg"
import client2 from "../../../public/img/client2.svg"
import client3 from "../../../public/img/client3.svg"
import client4 from "../../../public/img/client4.svg"
import client5 from "../../../public/img/client5.svg"
import TestimonialSlider from "./Slider/TestimonialSlider"

export default function Testimonials() {



  return (
    <div className=" container lg:py-16 py-4  ">

        <div className="lg:flex gap-5">
            <div className=" lg:space-y-0 space-y-3">
                <h2 className="text-sm font-semibold  uppercase"> Testimonials</h2>
                <h1 className="lg:text-[3.25rem] font-bold lg:w-[450px] lg:leading-16 text-xl "> 
                    What Our Clients Are Saying
                </h1>    
                <p className=" lg:text-[1.375rem] lg:w-[450px] ">Positive expiriences from users who have benefited from therapy or wellness programs.</p>
            </div>

            <div className="lg:pt-0 pt-5">
                <TestimonialSlider/>
            </div>
 
                

            {/* <div className="flex ml-40 gap-5">
                <div className=" relative flex flex-col bg-secondary lg:rounded-[3.75rem] rounded-2xl px-10 py-12 h-[393px] w-[393px] text-xl space- ">
                    <p>
                        &quot;Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!&quot;
                    </p>
                    <p className=" absolute bottom-10 ">
                        Anna R, 32
                    </p>
                </div>
                <div className=" relative flex flex-col bg-primary text-white lg:rounded-[3.75rem] rounded-2xl px-10 py-12 h-[393px] w-[393px] text-xl space- ">
                    <p>
                        &quot;Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!&quot;
                    </p>
                    <p className=" absolute bottom-10 ">
                        Anna R, 32
                    </p>
                </div>
            </div> */}




        </div>
        




        <div className=" flex lg:flex-row flex-col lg:gap-5 bg-white lg:rounded-[3.75rem] rounded-3xl lg:py-7 py-3 lg:px-10 px-5 lg:mt-16 mt-4 items-center justify-between ">
             
                <p className=" lg:text-[1.375rem] text-xl "> Our Partners </p>
             
                <Image 
                    src={client1}
                    alt=""
                    width={150}
                    height={0}
                    className="  "
                />
                <Image 
                    src={client2}
                    alt=""
                    width={150}
                    height={0}
                    className="  "
                />
                <Image 
                    src={client3}
                    alt=""
                    width={150}
                    height={0}
                    className="  "
                />
                <Image 
                    src={client4}
                    alt=""
                    width={150}
                    height={0}
                    className="  "
                />
                <Image 
                    src={client5}
                    alt=""
                    width={150}
                    height={0}
                    className="  "
                /> 
        </div>
      
    </div>
  )
}
