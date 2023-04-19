import React from 'react'
import webd from '../images/webd.jpg'
import ui from '../images/ui.png'
import content from '../images/content.png'
export default function Skills() {
  return (
    <div>
      <div class="">
  {/* <!-- Header --> */}
    <h1 className="text-white text-3xl font-bold py-4 text-center">What Can I Do? </h1>

  <section className="min-h-screen body-font text-gray-600 ">
    <div className="container mx-auto px-5 py-10">
      <div className="-m-4 flex justify-around flex-wrap">
        <div className="w-full p-4 md:w-1/2 lg:w-1/4">
          <span className="relative block h-48 overflow-hidden rounded">
            <img alt="webdev" className="block h-full w-full object-cover object-center cursor-pointer" src={webd} />
          </span>
          <div class="mt-4 text-3xl">
            <h3 class="title-font mb-1 text-3xl tracking-widest text-gray-500">Web Development</h3>
            <h2 class="title-font font-medium text-white text-xl">Full - stack web developer</h2>
          </div>
        </div>
      
        <div className="w-full p-4 md:w-1/2 lg:w-1/4">
          <span className="relative block h-48 overflow-hidden rounded">
            <img alt="webdev" className="block h-full w-full object-cover object-center cursor-pointer" src={ui} />
          </span>
          <div class="mt-4 text-3xl">
            <h3 class="title-font mb-1 text-3xl tracking-widest text-gray-500">UI/UX</h3>
            <h2 class="title-font font-medium text-white text-xl">Interactive user-interface</h2>
          </div>
        </div>
        <div className="w-full p-4 md:w-1/2 lg:w-1/4">
          <span className="relative block h-48 overflow-hidden rounded">
            <img alt="webdev" className="block h-full w-full object-cover object-center cursor-pointer" src={content} />
          </span>
          <div class="mt-4 text-3xl">
            <h3 class="title-font mb-1 text-3xl tracking-widest text-gray-500">Content Writing</h3>
            <h2 class="title-font font-medium text-white text-xl">Emails, MoU's and much more.</h2>
          </div>
        </div>
    </div>
    </div>
  </section>
</div>
    </div>
  )
}
