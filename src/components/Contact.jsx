import React from 'react'

export default function Contact() {
  return (
    <div id="contact">
      <body className="h-screen w-full overflow-hidden flex items-center justify-center bg-[#171717]">


<div className="flex min-h-screen items-center justify-center bg-[#171717]">
  <div className="mx-auto w-full max-w-lg">
    <h1 className="text-4xl font-bold text-white m-10 ">Contact</h1>
    <p className="mt-3 text-white">Drop your Feedback</p>

    <form action="https://getform.io/f/5eecec90-0c0e-4ac8-9eb4-40e2adb687c0" method='POST' class="mt-10">
    

      <input type="hidden" name="access_key" value="e5aee2aa-94e5-4c42-8882-d147ecd5dc5b" /> 
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative z-0">
          <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-2xl text-[#26a75d] focus:border-[#26a75d] focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#26a75d] peer-focus:dark:text-[#26a75d]">Your name</label>
        </div>
        <div className="relative z-0">
          <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-2xl focus:border-[#26a75d] focus:outline-none focus:ring-0 text-[#26a75d]" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#26a75d] peer-focus:dark:text-[#26a75d]">Your email</label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-2xl text-[#26a75d] focus:border-[#26a75d] focus:outline-none focus:ring-0" placeholder=" "></textarea>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#26a75d] peer-focus:dark:text-[#26a75d]">Your message</label>
        </div>
      </div>
      <button type="submit" class="mt-5 rounded-md bg-[#26a75d] px-10 py-2 text-black">Send Message</button>
    </form>
  </div>
</div>
</body>
    </div>
  )
}
