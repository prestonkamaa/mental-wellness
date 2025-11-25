
type Props = {
    btnTitle: string
}

export default function OutlineBtn({btnTitle}: Props) {
  return (
    <button className=" border rounded-full w-48 py-2 inline font-semibold text-lg cursor-pointer ">
        {btnTitle}
    </button>
  )
}
