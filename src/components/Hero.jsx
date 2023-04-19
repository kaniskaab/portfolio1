import React from 'react'
import Navbar from './Navbar'
import "../styles/hero.css"

export default function Hero() {
  return (
    <div id="hero" className='w-full h-full flex flex-col justify-center items-center'>
        <Navbar/>
      <div className="flex mr-auto min-h-screen w-full items-center justify-center  font-bold text-white">
          <div className=" tracking-tight hover:tracking-wide text-center space-y-12 transition-all duration-150 ease-out hover:ease-in">
            <div className="text-center text-5xl font-bold">
              <div className="text-2xl">
                Hie! I'm Kaniskaa, and I'm a{" "}
                <span className="underline decoration-sky-500">developer</span>
              </div>
              Services offered
              <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
                <span className="animate-word col-span-full row-span-full">
                  Website
                </span>
                <span className="animate-word-delay-1 col-span-full row-span-full">
                  Front End
                </span>
                <span className="animate-word-delay-2 col-span-full row-span-full">
                  Back End
                </span>
                <span className="animate-word-delay-3 col-span-full row-span-full">
                  UI/UX
                </span>
                <span className="animate-word-delay-4 col-span-full row-span-full">
                  Content
                </span>
              </div>
            </div>
            <p class=" text-white text-xs">
              Want to hire me for work ping me{" "}
              <a class="underline" href="mailto:kaniskaab33@gmail.com">
                mail here
              </a>
            </p>
          </div>
        </div>
    </div>
  )
}
