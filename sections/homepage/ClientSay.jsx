'use client'

import ClientSayItem from '@/components/client-say/ClientSayItem'
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, EffectFade} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import {useHover} from '@/hooks/useHover'
import Link from 'next/link'
import SectionHeading from '../common/heading/SectionHeading'
import ClientSayPopup from '@/components/client-say/ClientSayItemPopup'

export default function ClientSay() {
  const [hoverRef, isHover] = useHover()
  return (
    <section className='relative md:h-[60rem]'>
      {/* desktop */}
      <div className='hidden md:block'>
        <Image
          src='/imgs/home/1-nguoi-dung-giua-nui-trong-co-ve-ngau.jpg'
          alt='background image'
          className='absolute top-0 left-0 object-cover object-bottom h-full -z-10'
          width={1920}
          height={1080}
        />
        <div
          className='absolute top-0 left-0 w-full h-full'
          style={{
            background:
              'linear-gradient(180deg, #122718 7.6%, rgba(18, 39, 24, 0.71) 43.62%, #122718 79.64%)',
          }}
        />
        <h2 className='h2 absolute top-[8rem] left-1/2 -translate-x-1/2 text-greyscale-0'>
          CLIENTS SAY
        </h2>
        <div className='w-[30.04188rem] h-[29.875rem] absolute top-[16rem] -translate-x-1/2 left-1/2'>
          <Swiper
            speed={400}
            slidesPerView={1}
            effect='fade'
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            loop
            className='swiper-client-say'
          >
            <SwiperSlide>
              <Image
                src={'/imgs/home/demo-1.png'}
                alt='client say'
                className='absolute top-0 left-0 object-cover size-full cut-img'
                width={1920}
                height={1080}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={'/imgs/home/demo-2.jpeg'}
                alt='client say'
                className='absolute top-0 left-0 object-cover size-full cut-img'
                width={1920}
                height={1080}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={'/imgs/home/demo-3.webp'}
                alt='client say'
                className='absolute top-0 left-0 object-cover size-full cut-img'
                width={1920}
                height={1080}
              />
            </SwiperSlide>
          </Swiper>
          <Image
            src={'/imgs/home/1-buc-anh-co-hinh-giong-england-deco-1.png'}
            alt='client say'
            className='absolute -translate-x-1/2 -top-2.5 left-1/2 w-[31.375rem] h-[31.1875rem] object-contain'
            width={1920}
            height={1080}
          />
          {/* dot vietnam */}
          <Image
            src={'/imgs/home/circle-dot-vietnam.svg'}
            alt='vietnam'
            className='size-[1.66rem] absolute top-8 right-[5.5rem]'
            width={120}
            height={120}
          />
          {/* dot 1 */}
          <ClientSayItem
            className='top-[7rem] left-[12.5rem]'
            direction='left'
            hidden={isHover}
            img={'/imgs/home/season-1.jpg'}
            social='tripadvisor'
            name='Athony Ng'
            date='2024-03-20'
            rate={5}
            content='Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year!'
          />
          {/* dot 2 */}
          <ClientSayItem
            className='top-[15rem] right-[10rem]'
            direction='right'
            social='tripadvisor'
            img={'/imgs/home/demo-2_.jpg'}
            name='Athony Ng'
            date='2024-03-20'
            rate={5}
            content='Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year! Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year!'
          />
          {/* dot 3 */}
          <ClientSayItem
            ref={hoverRef}
            className='bottom-[3.5rem] left-[7rem]'
            direction='left'
            social='tripadvisor'
            img={'/imgs/home/demo-3_.png'}
            name='Athony Ng'
            date='2024-03-20'
            rate={5}
            canHover
            content='Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year! Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year!'
          />
        </div>
        <div className='absolute -translate-x-1/2 bottom-20 left-1/2'>
          <p className='text-greyscale-0 font-tripsans text-0.875 text-center font-bold leading-1.2 tracking-0.00875 mb-2'>
            View us on:
          </p>
          <div className='flex flex-row space-x-3'>
            <Link
              href={'/'}
              className='size-9 rounded-full flex justify-center items-center bg-[#33E0A0]'
            >
              <Image
                src={'/imgs/home/tripadvisor.svg'}
                alt='tripadvisor'
                className='w-[1.685rem] h-[1.085rem]'
                width={120}
                height={120}
              />
            </Link>
            <Link
              href={'/'}
              className='flex items-center justify-center rounded-full size-9'
              style={{
                background:
                  'linear-gradient(45deg, #FFD600 8.39%, #FF0100 50%, #D800B9 91.61%)',
              }}
            >
              <Image
                src={'/imgs/home/instagram.svg'}
                alt='instagram'
                className='size-[1.125rem]'
                width={120}
                height={120}
              />
            </Link>
            <Link
              href={'/'}
              className='flex items-center justify-center rounded-full size-9 bg-[#1C7EF2]'
            >
              <Image
                src={'/imgs/home/facebook.svg'}
                alt='facebook'
                className='w-[0.65625rem] h-[1.125rem]'
                width={120}
                height={120}
              />
            </Link>
            <Link
              href={'/'}
              className='flex items-center justify-center rounded-full size-9 bg-elevation-30'
            >
              <Image
                src={'/imgs/home/tiktok.svg'}
                alt='tiktok'
                className='w-[1.05rem] h-5'
                width={120}
                height={120}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className='relative block pt-16 pb-4 kKao4-container md:hidden '>
        <SectionHeading
          h5='READ WHAT OUR RECENT'
          h2='CLIENTS SAY'
          darkTheme
        />
        <div
          className='absolute top-0 left-0 w-full h-[15.4rem] -z-10'
          style={{
            background:
              'linear-gradient(180deg, #122718 7.6%, rgba(18, 39, 24, 0.85) 43.62%, #122718 79.64%)',
          }}
        />
        <div className='flex flex-row items-center px-3 mt-8 -mx-3 space-x-3 overflow-x-auto'>
          {Array(4)
            .fill(0)
            .map((item, i) => {
              return (
                <ClientSayPopup
                  key={i}
                  direction='none'
                  img={'/imgs/home/demo-3.png'}
                  social='tripadvisor'
                  name='Athony Ng'
                  date='2024-03-20'
                  rate={5}
                  canHover
                  content='Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year! Blown away by our Tanzania safari, I never expected it to be that good — it totally exceeded my expectations and was all hassle free. Our guide was absolutely amazing too. Have re-booked and cannot wait for next year!'
                />
              )
            })}
        </div>
        <div className='absolute top-[15rem] left-0 w-full h-[15.4rem] overflow-hidden -z-10'>
          <Image
            src={'/imgs/home/bg-img-client-say-mobile.png'}
            alt='client say'
            className='scale-[1.2]'
            width={1920}
            height={1080}
          />
        </div>
        <div className='mt-8'>
          <p className='text-greyscale-0 font-tripsans text-0.875 text-center font-bold leading-1.2 tracking-0.00875 mb-2'>
            View us on:
          </p>
          <div className='flex flex-row justify-center space-x-3'>
            <Link
              href={'/'}
              className='size-9 rounded-full flex justify-center items-center bg-[#33E0A0]'
            >
              <Image
                src={'/imgs/home/tripadvisor.svg'}
                alt='tripadvisor'
                className='w-[1.685rem] h-[1.085rem]'
                width={120}
                height={120}
              />
            </Link>
            <Link
              href={'/'}
              className='flex items-center justify-center rounded-full size-9'
              style={{
                background:
                  'linear-gradient(45deg, #FFD600 8.39%, #FF0100 50%, #D800B9 91.61%)',
              }}
            >
              <Image
                src={'/imgs/home/instagram.svg'}
                alt='instagram'
                className='size-[1.125rem]'
                width={120}
                height={120}
              />
            </Link>
            <Link
              href={'/'}
              className='flex items-center justify-center rounded-full size-9 bg-[#1C7EF2]'
            >
              <Image
                src={'/imgs/home/facebook.svg'}
                alt='facebook'
                className='w-[0.65625rem] h-[1.125rem]'
                width={120}
                height={120}
              />
            </Link>
            <Link
              href={'/'}
              className='flex items-center justify-center rounded-full size-9 bg-elevation-30'
            >
              <Image
                src={'/imgs/home/tiktok.svg'}
                alt='tiktok'
                className='w-[1.05rem] h-5'
                width={120}
                height={120}
              />
            </Link>
          </div>
        </div>
        <div className='absolute top-[30rem] h-[6rem] bg-[#122718] left-0 w-full -z-10' />
      </div>
    </section>
  )
}
