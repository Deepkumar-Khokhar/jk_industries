import React from 'react'
import phone4 from '../IMG/phone4.png'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
      <section className="py-10 bg-gray-900 sm:py-16 lg:py-24 w-screen flex">
  <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
      <div className="flex flex-col justify-between lg:py-5">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">
            Send Us Message
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white text-justify">
            We understand the value of each customer gained by us, so don’t
            hesitate to contact us. Drop us a message now and we promise we will
            response you under few minutes.
          </p>
          <img
            className="relative z-10 max-w-xs mx-auto -mb-16 md:hidden"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg"
            alt=""
          />
          <img
            className="hidden w-full translate-x-24 translate-y-8 md:block"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg"
            alt=""
          />
        </div>
        <div className="hidden md:mt-auto md:block">
          <div className="flex flex-row">
            <div className="icon">
              <Link
                to="https://api.whatsapp.com/send?phone=9327053441"
                title=""
                className="flex"
              >
                <img
                  className="w-auto h-8 lg:h-7 pr-6"
                  src={phone4}
                  height={20}
                  width={20}
                  alt=""
                />
              </Link>
            </div>
            <div className="flex flex-col">
              <div className="add p-0 flex-col border-b-2 border-black border-b-orange-500 pb-3">
                <p className='text-white'>
                Phone : 
                  <Link
                    to="tel: +91-79-22892402"
                    className=" text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600 text-white "
                  >
                   +91-79-22892402
                  </Link>
                </p>
              </div>
              <div>
                <p className='text-white'>
                Mobile : 
                  <Link
                    to="tel:+91-9327053441"
                    className=" text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600 text-white pt-3"
                  >
                    +91-9327053441, 
                  </Link>
                  <Link
                    to="tel:"
                    className=" text-base text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600 text-white pt-3"
                  >
                    +91-9537263171 
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pl-12">
        <div className="overflow-hidden bg-white rounded-md">
          <div className="p-6 sm:p-10">
            <h3 className="text-3xl font-semibold text-black">Get In Touch</h3>
            <p className="mt-4 text-base text-gray-600">
              Just a few steps and we are connected.
            </p>
            <form action="#" method="POST" className="mt-4">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Your Name{" "}
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your full name"
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email Address
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your Address"
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Message
                  </label>
                  <div className="mt-2.5 relative">
                    <textarea
                      name=""
                      id=""
                      placeholder="Enter your Message"
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md focus:outline-none hover:bg-orange-600 focus:bg-orange-600"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            className="w-6 h-6 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            className="w-6 h-6 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            className="w-6 h-6 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            className="w-6 h-6 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <blockquote className="mt-6">
          <p className="text-lg leading-relaxed text-white">
            You made it so simple. My new site is so much faster and easier to
            work with than my old site. I just choose the page, make the change
            and click save.
          </p>
        </blockquote>
        <div className="flex items-center mt-8">
          <img
            className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg"
            alt=""
          />
          <div className="ml-4">
            <p className="text-base font-semibold text-white">Jenny Wilson</p>
            <p className="mt-px text-sm text-gray-400">Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}