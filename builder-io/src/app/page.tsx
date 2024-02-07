"use client"
import { assets } from '@/utils/asset-utils'
import Image from 'next/image'
import { type Framework, frameworks } from '@/utils/framework-utils'
import { useState, useEffect } from 'react'
import { cn } from '@/utils/cn'
import FrameworkRotation from '@/components/FrameworkRotation'
import { getFrameworkColor } from '@/helpers/colors'
import EventCountdown from '@/components/EventCountdown'

export default function Home() {

  const [currentFramework, setCurrentFramework] = useState<Framework>(frameworks[0])
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const rotateFrameworks = () => {
      setCurrentFramework(frameworks[currentIndex])
      currentIndex = (currentIndex + 1) % frameworks.length
    }

    const intervalId = setInterval(rotateFrameworks, 2000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    setShowBackground(true)
  }, [])



  return (
    <main>
      <div className={cn('fixed inset-0 transition-colors delay-100 duration-700 opacity-25', getFrameworkColor('bg', currentFramework))}
      />
      <Image src={assets.gradient} height={1200} width={1200} role='presentation' alt='gradiet background' className='fixed inset-0 w-screen h-screen object-cover' />
      <div className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `url(${assets.square})`,
          backgroundSize: 30
        }}
      />

      <div className={cn('bg-black fixed inset-0 transition-opacity duration-[1500md]',
        !showBackground ? 'opacity-100' : 'opacity-0'
      )}
      />

      <div className='max-w-7xl mt-20 mx-auto'>
        <div className='flex flex-col items-center relative z-10'>
          <h1 className={'text-5xl max-w-3xl text-center leading-snug mb-12'}>
            <Image
              src={assets.figma}
              width={50}
              height={50}
              className='inline-block me-8 -mt-2'
              alt='figma'
            />
            to <FrameworkRotation currentFramework={currentFramework} /> will
            <span className={cn('transition-colors duration-200 text-orange-400', getFrameworkColor('text', currentFramework))}>
              {' '}never{' '}
            </span>
            be the same again
          </h1>

          <p className='mb-8'>
            <span className='text-gray-300'>
              Join us for an AI launch event by {' '}
            </span>

            <Image alt='Builder.io logo' className='inline-block ms-1 -mt-1' height={20} width={100} src={assets.builder} />
            {' + '}
            <Image alt='Figma logo' className='inline-block mx-1' height={20} width={55} src={assets.figmatwo} />
          </p>

          <div className='mb-8'>
            <button className={cn('text-black px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-200', getFrameworkColor('bg', currentFramework))}>
              Claim Ticket
            </button>
          </div>
          <EventCountdown currentFramework={currentFramework} />
        </div>
      </div>

    </main >
  )
}
