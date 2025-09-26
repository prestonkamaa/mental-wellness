"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"


export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide border-2">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
        <div className="embla__slide">Slide 4</div>
        <div className="embla__slide">Slide 5</div>
      </div>
    </div>
  )
}
