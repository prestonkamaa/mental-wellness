import React from "react"
import { EmblaOptionsType } from "embla-carousel"
import { DotButton, useDotButton } from "../Slider/EmblaCarouselDotButton"
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from "../Slider/EmblaCarouselArrowButtons"
import useEmblaCarousel from "embla-carousel-react"
import TestimonialCard from "../Cards/TestimonialCard" 
import { div } from "framer-motion/client"

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}


    const testimonialdata = [
        {
            personname: "Anna R, 32",
            text: "“Solus made it so easy to find the right therapist for me. The sessions have truly transformed my mindset, and I feel more in control of my emotions than ever before!”",        
        },
        {
            personname: "Mark S, 41",
            text: "“The wellness programs offered by Solus have been a game-changer for my overall well-being. The guided meditation and mindfulness exercises have helped me manage stress and improve my focus.”",        
        },
        {
            personname: "Susan, 22",
            text: "“I was initially hesitant about online therapy, but Solus exceeded my expectations. The platform is user-friendly, and the therapists are incredibly supportive and understanding.”",        
        },
    ]

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {
            testimonialdata.map( (item, i) => {
              return ( 
                  <>
                    {slides.map((index) => (
                      <div className="embla__slide " key={index}> 
                        <div className=" embla__slide__number bg-secondary lg:rounded-[3.75rem] rounded-2xl lg:px-10 px-5 " key={i}>
                          <p className="lg:text-xl text-lg ">
                            {item.text}
                          </p>
                          <p className=" absolute bottom-10 lg:text-xl  text-lg ">
                              {item.personname}
                          </p>
                        </div>
                      </div>
                    ))}
                  </> 
                )
            } )
          } 
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel