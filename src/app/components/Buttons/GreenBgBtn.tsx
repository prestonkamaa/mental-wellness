type Props = {
    btnTitle: string
}

export default function GreenBgBtn( {btnTitle}: Props) {
  return (
      <button className="bg-primary text-white font-semibold text-lg w-64 py-2 inline-block rounded-full cursor-pointer ">
        {btnTitle}
      </button>  
  )
}
