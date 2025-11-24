"use client" 

import EmblaCarousel from "./EmblaCarousel"
import { EmblaOptionsType } from "embla-carousel" 

const OPTIONS: EmblaOptionsType = { containScroll: false }
const SLIDE_COUNT = 1
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


export default function TestimonialSlider() {
  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} /> 
    </>
  )
}
