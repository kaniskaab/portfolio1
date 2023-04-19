import React from 'react'
import linkedin from '../images/logo/linkedin.png'
import github from '../images/logo/github.png'
import facebook from '../images/logo/facebook.png'
import instagram from '../images/logo/instagram.png'

export default function About() {
    const socials = [
        {
            id: 1,
            title: "LinkedIn",
            src: linkedin,
            link: "https://www.linkedin.com/in/kaniskaa-behera-b30b53145/"
          },
          {
            id: 2,
            title: "Github",
            src: github,
            link:"https://github.com/kaniskaab"
          },
          {
            id: 3,
            title: "Facebook",
            src: facebook,
            link:"https://www.instagram.com/why_kaniskaa_/"
          },
          {
            id: 4,
            title: "Instagram",
            src: instagram,
            link:"https://m.facebook.com/kaniskaa.behera"
          },
    ]
  return (
    <div id="about" className='bg-[#171717] w-screen overflow-hidden flex flex-col h-auto' >
        <div>
          <h2 className="text-3xl font-bold w-full mb-10 text-center stext-center md:text-3xl tracking-wider uppercase p-3 text-white">
          About
      </h2>  
        </div>
      
      <div className='flex h-full w-full justify-center items-center align-middle  '>
        <div className=' text-gray-50 text-center w-4/5 '>
      Welcome to my portfolio website! I'm a <span className='underline decoration-blue-500'>full stack web developer</span>  with extensive experience in <span className='underline decoration-pink-500'>HTML, CSS, JavaScript, React, Tailwind, MongoDB, and Node.js</span>. I have a passion for creating visually stunning and user-friendly web applications that meet and exceed client expectations. My technical proficiency allows me to deliver high-quality solutions in a timely and efficient manner.

In addition to my technical skills, I'm also a skilled UI/UX designer with a keen eye for detail. I understand the importance of creating intuitive interfaces that provide users with an optimal experience. As a result, I always strive to incorporate the latest design trends and best practices into my work.

As a <span className='underline decoration-yellow-500'>content writer</span> , I'm able to effectively communicate complex technical concepts to a wider audience. Whether it's creating blog posts, documentation, or marketing material, I'm able to write in a clear, concise, and engaging manner.

I invite you to explore my website to learn more about my work. Thank you for taking the time to visit my website, and I look forward to hearing from you soon.
      </div>
      </div>
      <div>
      <div className="flex flex-auto flex-col md:flex-row justify-center items-center m-9 transition-all duration-150 ease-out hover:ease-in">
          {socials.map(({ id, title, src, link }) => (
            <div
              key={id}
              className="bg-[#26a75d] w-40 h-10 m-2 static rounded-lg"
            >
              <div className="bg-[#171717] text-white font-light w-40 h-10 hover:-m-2 text-center flex items-center absolute rounded-lg shadow-lg hover:shadow-xl transition-all duration-150 ease-out hover:ease-in"
              >
                <img src={src} width="30px" height="30px" alt={title} />
                <div>
                  <h1 className="m-4 text-xl font-bold"><a href={link}>{title}</a></h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      
  )
}
