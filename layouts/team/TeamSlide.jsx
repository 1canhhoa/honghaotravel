"use client"
import NavigationCustom from '@/components/navigationcustom'
import { Swiper, SwiperSlide, } from "swiper/react";
import { Navigation } from 'swiper/modules'
import React, { useState, useRef } from 'react'
import "swiper/css";
import CardOurTeam from './CardOurTeam';
import Image from 'next/image'
const TeamSlide = () => {
  const swiperRef = useRef(null)
  const [indexSlider, setIndexSlider] = useState(0)

  const handleSlideChange = (swiper) => {
    setIndexSlider(swiper.realIndex)
  }

  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }
  return <div className='relative flex items-center justify-center  w-full'>
    <div className=" xmd:hidden w-[58rem] absolute top-[12rem]">
      <NavigationCustom
        white={true}
        indexSlider={3}
        length={5}
        handlePrevSlide={handlePrevSlide}
        handleNextSlide={handleNextSlide}
        outline={true}
      /></div>
    <Swiper
      breakpoints={{
        767: {
          speed: 1100
        }
      }}
      ref={swiperRef}
      slidesPerView={3.3}
      onSlideChange={handleSlideChange}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper
      }}
      speed={1000}
      loop={'true'}
      modules={[Navigation]}
      className=' w-[62.0625rem]'

    >
      {new Array(5).fill(0)?.map((d, i) => (

        <SwiperSlide key={i} className='!pb-[4rem] xmd:!pl-[0.8rem]'>
          < CardOurTeam />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className='w-32 h-[28.5rem] z-10 absolute top-0 right-[0rem] shrink-0 bg-[linear-gradient(90deg,rgba(255,255,255,0)_1.95%,#fff_94.2%)]'>

    </div>
  </div >
}

export default TeamSlide

