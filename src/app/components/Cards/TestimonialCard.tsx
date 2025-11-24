

type Props ={
  testimonialtext: string,
  persons: string,
}

export default function TestimonalCard({testimonialtext, persons}:Props) {
  return (
    <div className=" relative flex flex-col bg-secondary lg:rounded-[3.75rem] rounded-2xl px-10 py-12 h-[393px] w-[393px] text-xl">
        <p>
          {testimonialtext}
        </p>
        <p className=" absolute bottom-10 ">
            {persons}
        </p>
    </div>   
  )
}
