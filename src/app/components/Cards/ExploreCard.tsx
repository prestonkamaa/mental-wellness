import GreenBgBtn from "../Buttons/GreenBgBtn";

type Props = {
  btnTitle: string,
  cardHeading: string,
  cardDescription: string


}

export default function ExploreCard( {btnTitle,cardHeading, cardDescription}: Props ) {
  return (
    <div className=" flex flex-col bg-white items-center justify-center lg:p-10 p-4 lg:rounded-[3.75rem] rounded-3xl text-center lg:space-y-5 space-y-3 ">
        <h3 className="lg:text-[2rem] text-2xl font-semibold lg:w-[200px] lg:leading-10 ">{cardHeading}</h3>
        <p className=" text-lg lg:pb-10 pb-5">
          {cardDescription}
        </p>
        <GreenBgBtn btnTitle={btnTitle}  />
    </div>
  )
}
