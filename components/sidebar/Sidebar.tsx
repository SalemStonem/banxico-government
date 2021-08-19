import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ClassNameProps } from "../../interfaces/ClassNameProps";
import { RefProps } from "../../interfaces/RefProps";

export const Sidebar = ({refer, className}: RefProps & ClassNameProps) => {
     const router = useRouter();
    
  
  return (
    <>
      <header
        ref={refer}
        className={`max-w-max min-h-screen inset-0 transition-opacity bg-black  text-white ${className}`}
      >
        <div className='flex flex-row flex-nowrap items-center space-x-1 p-4'>
          <div className='bg-green-400 p-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              className='fill-current text-black'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z'
              />
            </svg>
          </div>
          <h2 className='text-2xl'>
            <span className='text-green-400'>mx</span>market
          </h2>
        </div>
        <div className='border-t border-b p-6 text-center flex flex-col justify-center'>
          <img
            className='mx-auto mb-4 rounded-full'
            src='/person.jpeg'
            alt='Picture of Profile'
            width={68}
            height={68}
          />
          <span className='w-full font-bold'>Alejandro Langford</span>
          <span className=''>a.langford@mxmarket.mx</span>
        </div>
        <ul className='text-white py-4 text-lg space-y-2 my-24'>
          <li
            className={`flex flex-row flex-nowrap items-center ${
              router.pathname == "/workspace1" && "border-l-4 border-white"
            }`}
          >
            <span className='bg-white w-5 h-5 inline-block rounded-full ml-8 mr-2'></span>
            <Link href='/workspace1'>
              <a>Workspace 1</a>
            </Link>
          </li>
          <li
            className={`flex flex-row flex-nowrap items-center ${
              router.pathname == "/workspace2"
                ? "border-l-4 border-red-400"
                : ""
            }`}
          >
            <span className='bg-red-400 w-5 h-5 inline-block rounded-full ml-8 mr-2'></span>
            <Link href='/workspace2'>
              <a className={router.pathname == "/" ? "active" : ""}>
                Workspace 2
              </a>
            </Link>
          </li>
          <li
            className={`flex flex-row flex-nowrap items-center ${
              router.pathname == "/analytics"
                ? "border-l-4 border-yellow-300"
                : ""
            }`}
          >
            <span className='bg-yellow-300 w-5 h-5 inline-block rounded-full ml-8 mr-2'></span>
            <Link href='/analytics'>
              <a className={router.pathname == "/" ? "active" : ""}>
                Analytics
              </a>
            </Link>
          </li>
          <li
            className={`flex flex-row flex-nowrap items-center ${
              router.pathname == "/workspace4"
                ? "border-l-4 border-green-400"
                : ""
            }`}
          >
            <span className='bg-green-400 w-5 h-5 inline-block rounded-full ml-8 mr-2'></span>
            <Link href='/workspace4'>
              <a className={router.pathname == "/" ? "active" : ""}>
                Workspace 4
              </a>
            </Link>
          </li>
          <li
            className={`flex flex-row flex-nowrap items-center ${
              router.pathname == "/workspace5"
                ? "border-l-4 border-green-500"
                : ""
            }`}
          >
            <span className='bg-green-500 w-5 h-5 inline-block rounded-full ml-8 mr-2'></span>
            <Link href='/workspace5'>
              <a className={router.pathname == "/" ? "active" : ""}>
                Workspace 5
              </a>
            </Link>
          </li>
          <li
            className={`flex flex-row flex-nowrap items-center ${
              router.pathname == "/workspace6"
                ? "border-l-4 border-blue-400"
                : ""
            }`}
          >
            <span className='bg-blue-400 w-5 h-5 inline-block rounded-full ml-8 mr-2'></span>
            <Link href='/workspace6'>
              <a className={router.pathname == "/" ? "active" : ""}>
                Workspace 6
              </a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};
