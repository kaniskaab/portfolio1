import React from 'react'
import html from "../images/logo/html.png";
import css from "../images/logo/css.png";
import javascript from "../images/logo/javascript.png";
import reactImage from "../images/logo/react.png";
import tailwind from "../images/logo/tailwind.png";
import node from "../images/logo/node.png";
import mongo from "../images/logo/mongo.png";
import github from '../images/logo/github.png'
import vs from '../images/logo/vscode.png'
import canva from '../images/logo/canva.png'
import replit from '../images/logo/replit.png'
import c from '../images/logo/c.png'
import cp from '../images/logo/c++.png'
import python from '../images/logo/python.png'
export default function Tools() {
    const all = [
        {
            id: 1,
            title: "HTML",
            src: html,
            style: "col-span-4 flex justify-flex-start ml-3 h-2 w-2",
            style2:" rounded-full"
          },
          {
            id: 2,
            title: "CSS",
            src: css,
            style: "col-span-2 flex justify-flex-start ml-3 mt-5",
            style2:" rounded-full h-12 w-12"
          },
          {
            id: 3,
            title: "JavaScript",
            src: javascript,
            style: "col-span-2 flex flex-auto justify-flex-start -ml-40",
            style2:" rounded-full h-16 w-16"
          },
          {
            id: 4,
            title: "React",
            src: reactImage,
            style: "col-span-2 flex flex-auto justify-flex-end h-30 w-30 items-start ",
            style2:" rounded-full h-20 w-25 -mt-35"
          },
          {
            id: 5,
            title: "Tailwind",
            src: tailwind,
            style: "col-span-1 flex flex-auto justify-flex-start -ml-40 items-start" ,
            style2:" h-10 w-10"
          },
          {
            id: 6,
            title: "Node JS",
            src: node,
            style: "flex flex-auto justify-flex-start -ml-40 -mt-20 items-start",
            style2:"h-20 w-20"
          },
          {
            id: 7,
            title: "MongoDB",
            src: mongo,
            style: "flex flex-auto justify-center items-start -mt-8",
            style2:"rounded-full h-20 w-20"
          },
          {
            id: 8,
            title: "GitHub",
            src: github,
            style: "flex flex-auto justify-center items-start -m-10",
            style2:"h-40 w-40"
          },
          {
            id: 9,
            title: "VSCode",
            src: vs,
            style: "flex flex-auto mt-40 -ml-20 items-end",
            style2:"h-10 w-10"
          },
          {
            id: 10,
            title: "Canva",
            src: canva,
            style: "flex flex-auto -ml-20 items-center -mt-40",
            style2:"rounded-full h-10 w-10"
          },
          {
            id: 11,
            title: "Replit",
            src: replit,
            style: " flex flex-auto -mt-40 items-start",
            style2:"h-20 w-20"
          },
          {
            id: 12,
            title: "C++",
            src: cp,
            style: "flex flex-auto -mt-20 items-start",
            style2:"h-10 w-10"
          },
          {
            id: 13,
            title: "C",
            src: c,
            style: "flex flex-auto -mt-20 items-start",
            style2:"h-20 w-20"
          },
          {
            id: 14,
            title: "Python",
            src: python,
            style: "flex flex-auto -mt-40 -ml-20 items-start",
            style2:"h-20 w-20"
          },

    ]
  return (
    <div id="tools" className='flex flex-col'>
        <h1 className="text-white text-3xl mb-10 font-bold py-4 text-center">Tools and Languages that I can work with: </h1>
        <div className='grid grid-cols-4 md:grid-cols-8 gap-2 w-full h-full'>
       {all.map(({ id, title, src, style, style2 }) => (
        <div>
            <div
              key={id}
              className=" mt-3 flex flex-col justify-center items-center shadow-white rounded-full "
            >
                <img src={src} alt='logo' className='rounded-full h-12 w-12'/>
                <div className='text-xs text-white'>{title}</div>
            </div>
            </div>
          ))}
        </div></div>
    
  )
}
