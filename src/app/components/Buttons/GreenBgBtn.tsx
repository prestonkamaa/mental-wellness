type Props = {
    btnTitle: string
}

export default function GreenBgBtn( {btnTitle}: Props) {
  return (
      <button className="bg-primary text-white font-semibold text-lg w-64 py-2 inline-block rounded-full">
        {btnTitle}
      </button> 

      // <button className="bg      // <button className="bg-primary text-white font-semibold text-lg px-10 py-2 inline-block rounded-full">
      //   {btnTitle}
      // </button> -primary text-white font-semibold text-lg px-10 py-2 inline-block rounded-full">
      //   {btnTitle}
      // </button> 
  )
}
