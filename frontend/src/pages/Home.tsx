import {useState} from 'react'
import {ConnectButton} from '@rainbow-me/rainbowkit';
import topImg from '../assets/img/top-img.png'
import logo from '../../public/favicon.svg'

export default function Home() {

  return (
    <div>
      <header className="relative z-50 w-full h-24">
        <div
          className="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">

          <a href="/" className="relative flex items-center inline-block h-5 h-full font-black leading-none">
            <img src={logo} alt="" className="w-auto h-10 text-indigo-600 fill-current"/>
            <span className="ml-3 text-2xl text-gray-800">
              vStorage
            </span>
          </a>

          <nav id="nav"
               className="absolute top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative">
            <a href="#"
               className="ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">Home</a>
            <a href="#features"
               className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">Features</a>
            <a href="#pricing"
               className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">Partners</a>
            <a href="#testimonials"
               className="font-bold duration-100 transition-color hover:text-indigo-600">Contact Us</a>
            <div className="flex flex-col block w-full font-medium border-t border-gray-200 md:hidden">
              <ConnectButton showBalance={false}/>
              {/*<a href="#_" className="w-full py-2 font-bold text-center text-pink-500">Login</a>*/}
              {/*<a href="#_"*/}
              {/*   className="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-indigo-700 fold-bold">Get*/}
              {/*  Started</a>*/}
            </div>
          </nav>

          <div
            className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
            <div className={"z-40"}>
              <ConnectButton showBalance={false}/>
            </div>

            <svg className="absolute top-0 left-0 hidden w-screen max-w-3xl -mt-64 ml-12 lg:block opacity-40"
                 viewBox="0 0 818 815" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="c">
                  <stop stopColor="#E614F2" offset="0%"/>
                  <stop stopColor="#FC3832" offset="100%"/>
                </linearGradient>
                <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="f">
                  <stop stopColor="#657DE9" offset="0%"/>
                  <stop stopColor="#1C0FD7" offset="100%"/>
                </linearGradient>
                <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox"
                        id="a">
                  <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1"/>
                  <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" in="shadowBlurOuter1"/>
                </filter>
                <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox"
                        id="d">
                  <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1"/>
                  <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter1"/>
                </filter>
                <path
                  d="M160.52 108.243h497.445c17.83 0 24.296 1.856 30.814 5.342 6.519 3.486 11.635 8.602 15.12 15.12 3.487 6.52 5.344 12.985 5.344 30.815v497.445c0 17.83-1.857 24.296-5.343 30.814-3.486 6.519-8.602 11.635-15.12 15.12-6.52 3.487-12.985 5.344-30.815 5.344H160.52c-17.83 0-24.296-1.857-30.814-5.343-6.519-3.486-11.635-8.602-15.12-15.12-3.487-6.52-5.343-12.985-5.343-30.815V159.52c0-17.83 1.856-24.296 5.342-30.814 3.486-6.519 8.602-11.635 15.12-15.12 6.52-3.487 12.985-5.343 30.815-5.343z"
                  id="b"/>
                <path
                  d="M159.107 107.829H656.55c17.83 0 24.296 1.856 30.815 5.342 6.518 3.487 11.634 8.602 15.12 15.12 3.486 6.52 5.343 12.985 5.343 30.816V656.55c0 17.83-1.857 24.296-5.343 30.815-3.486 6.518-8.602 11.634-15.12 15.12-6.519 3.486-12.985 5.343-30.815 5.343H159.107c-17.83 0-24.297-1.857-30.815-5.343-6.519-3.486-11.634-8.602-15.12-15.12-3.487-6.519-5.343-12.985-5.343-30.815V159.107c0-17.83 1.856-24.297 5.342-30.815 3.487-6.519 8.602-11.634 15.12-15.12 6.52-3.487 12.985-5.343 30.816-5.343z"
                  id="e"/>
              </defs>
              <g fill="none" fillRule="evenodd" opacity=".9">
                <g transform="rotate(65 416.452 409.167)">
                  <use fill="#000" filter="url(#a)" xlinkHref="#b"/>
                  <use fill="url(#c)" xlinkHref="#b"/>
                </g>
                <g transform="rotate(29 421.929 414.496)">
                  <use fill="#000" filter="url(#d)" xlinkHref="#e"/>
                  <use fill="url(#f)" xlinkHref="#e"/>
                </g>
              </g>
            </svg>
          </div>

          <div id="nav-mobile-btn"
               className="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10">
            <span className="block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1"></span>
            <span className="block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full"></span>
          </div>

        </div>
      </header>


      <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-32 xl:pt-40 xl:pb-40">
        <div
          className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
          <div
            className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
            <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">
              Decentralized version Storage
            </h1>
            <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
              Own and manage your files, store and share important information using Filecoin
              - the best decentralised data storage.
              We increase this power by simple user interface with versioning files history.
            </p>
            <a href="#_"
               className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0">Signup
              Today!</a>

            <div className="flex-col hidden mt-12 sm:flex lg:mt-24"></div>

            <svg className="absolute left-0 bottom-0  max-w-md -ml-72 left-svg opacity-40" viewBox="0 0 423 423"
                 xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="100%" y1="0%" x2="4.48%" y2="0%" id="linearGradient-1">
                  <stop stopColor="#5C54DB" offset="0%"/>
                  <stop stopColor="#6A82E7" offset="100%"/>
                </linearGradient>
                <filter x="-9.3%" y="-6.7%" width="118.7%" height="118.7%" filterUnits="objectBoundingBox"
                        id="filter-3">
                  <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1"/>
                  <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" in="shadowBlurOuter1"/>
                </filter>
                <rect id="path-2" x="63" y="504" width="300" height="300" rx="40"/>
              </defs>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity=".9">
                <g id="Desktop-HD" transform="translate(-39 -531)">
                  <g id="Hero" transform="translate(43 83)">
                    <g id="Rectangle-6" transform="rotate(45 213 654)">
                      <use fill="#000" filter="url(#filter-3)" xlinkHref="#path-2"/>
                      <use fill="url(#linearGradient-1)" xlinkHref="#path-2"/>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
            <div className="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen">
              <img src={topImg}
                   className="w-7/12 h-auto mb-20 ml-12 mt-10 lg:mb-0 lg:h-full"/>
            </div>
          </div>
        </div>
      </div>


      <div id="features" className="relative w-full px-8 py-10 border-t border-gray-200 md:py-10 lg:py-20 xl:px-0">
        <div className="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
          <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">Our Features</h2>
          <h3
            className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
            Built and Designed with you in Mind</h3>
          <div className="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20">

            <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <svg className="absolute w-full h-full text-gray-100 fill-current" viewBox="0 0 377 340"
                     xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <g>
                      <path
                        d="M342.8 3.7c24.7 14 18.1 75 22.1 124s18.6 85.8 8.7 114.2c-9.9 28.4-44.4 48.3-76.4 62.4-32 14.1-61.6 22.4-95.9 28.9-34.3 6.5-73.3 11.1-95.5-6.2-22.2-17.2-27.6-56.5-47.2-96C38.9 191.4 5 151.5.9 108.2-3.1 64.8 22.7 18 61.8 8.7c39.2-9.2 91.7 19 146 16.6 54.2-2.4 110.3-35.6 135-21.6z"/>
                    </g>
                  </g>
                </svg>

                <svg className="relative w-20 h-20" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="linearGradient-1TriangleIcon1">
                      <stop stopColor="#9C09DB" offset="0%"/>
                      <stop stopColor="#1C0FD7" offset="100%"/>
                    </linearGradient>
                    <filter x="-14%" y="-10%" width="128%" height="128%" filterUnits="objectBoundingBox"
                            id="filter-3TriangleIcon1">
                      <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
                      <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1"
                                      result="shadowBlurOuter1"/>
                      <feColorMatrix
                        values="0 0 0 0 0.141176471 0 0 0 0 0.031372549 0 0 0 0 0.501960784 0 0 0 0.15 0"
                        in="shadowBlurOuter1"/>
                    </filter>
                    <path
                      d="M17.947 0h14.106c6.24 0 8.503.65 10.785 1.87a12.721 12.721 0 015.292 5.292C49.35 9.444 50 11.707 50 17.947v14.106c0 6.24-.65 8.503-1.87 10.785a12.721 12.721 0 01-5.292 5.292C40.556 49.35 38.293 50 32.053 50H17.947c-6.24 0-8.503-.65-10.785-1.87a12.721 12.721 0 01-5.292-5.292C.65 40.556 0 38.293 0 32.053V17.947c0-6.24.65-8.503 1.87-10.785A12.721 12.721 0 017.162 1.87C9.444.65 11.707 0 17.947 0z"
                      id="path-2TriangleIcon1"/>
                  </defs>
                  <g id="Page-1TriangleIcon1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Desktop-HDTriangleIcon1" transform="translate(-291 -1278)">
                      <g id="FeaturesTriangleIcon1" transform="translate(170 915)">
                        <g id="Group-9TriangleIcon1" transform="translate(0 365)">
                          <g id="Group-8TriangleIcon1" transform="translate(125)">
                            <g id="Rectangle-9TriangleIcon1">
                              <use fill="#000" filter="url(#filter-3TriangleIcon1)"
                                   xlinkHref="#path-2TriangleIcon1"/>
                              <use fill="url(#linearGradient-1TriangleIcon1)"
                                   xlinkHref="#path-2TriangleIcon1"/>
                            </g>
                            <g id="playTriangleIcon1" transform="translate(18 15)" fill="#FFF"
                               fillRule="nonzero">
                              <path
                                d="M9.432 2.023l8.919 14.879a1.05 1.05 0 01-.384 1.452 1.097 1.097 0 01-.548.146H-.42A1.07 1.07 0 01-1.5 17.44c0-.19.052-.375.15-.538L7.567 2.023a1.092 1.092 0 011.864 0z"
                                id="TriangleIcon1" transform="rotate(90 8.5 10)"/>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <h4 className="relative mt-6 text-lg font-bold">Automated Tools</h4>
                <p className="relative mt-2 text-base text-center text-gray-600">Automate your workflow with these
                  top of the
                  line marketing tools.</p>
                <a href="#_" className="relative flex mt-2 text-sm font-medium text-indigo-500 underline">Learn
                  More</a>
              </div>
            </div>

            <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <svg className="absolute w-full h-full text-gray-100 fill-current" viewBox="0 0 358 372"
                     xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <g>
                      <path
                        d="M315.7 6.5c30.2 15.1 42.6 61.8 41.5 102.5-1.1 40.6-15.7 75.2-24.3 114.8-8.7 39.7-11.3 84.3-34.3 107.2-23 22.9-66.3 23.9-114.5 30.7-48.2 6.7-101.3 19.1-123.2-4.1-21.8-23.2-12.5-82.1-21.6-130.2C30.2 179.3 2.6 141.9.7 102c-2-39.9 21.7-82.2 57.4-95.6 35.7-13.5 83.3 2.1 131.2 1.7 47.9-.4 96.1-16.8 126.4-1.6z"/>
                    </g>
                  </g>
                </svg>

                <svg className="relative w-20 h-20" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="linearGradient-1Icon2">
                      <stop stopColor="#F2C314" offset="0%"/>
                      <stop stopColor="#FC3832" offset="100%"/>
                    </linearGradient>
                    <filter x="-14%" y="-10%" width="128%" height="128%" filterUnits="objectBoundingBox"
                            id="filter-3Icon2">
                      <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
                      <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1"
                                      result="shadowBlurOuter1"/>
                      <feColorMatrix
                        values="0 0 0 0 0.501960784 0 0 0 0 0.125490196 0 0 0 0 0 0 0 0 0.15 0"
                        in="shadowBlurOuter1"/>
                    </filter>
                    <path
                      d="M17.947 0h14.106c6.24 0 8.503.65 10.785 1.87a12.721 12.721 0 015.292 5.292C49.35 9.444 50 11.707 50 17.947v14.106c0 6.24-.65 8.503-1.87 10.785a12.721 12.721 0 01-5.292 5.292C40.556 49.35 38.293 50 32.053 50H17.947c-6.24 0-8.503-.65-10.785-1.87a12.721 12.721 0 01-5.292-5.292C.65 40.556 0 38.293 0 32.053V17.947c0-6.24.65-8.503 1.87-10.785A12.721 12.721 0 017.162 1.87C9.444.65 11.707 0 17.947 0z"
                      id="path-2Icon2"/>
                  </defs>
                  <g id="Page-1Icon2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Desktop-HDIcon2" transform="translate(-691 -1278)">
                      <g id="FeaturesIcon2" transform="translate(170 915)">
                        <g id="Group-9-CopyIcon2" transform="translate(400 365)">
                          <g id="Group-8Icon2" transform="translate(125)">
                            <g id="Rectangle-9Icon2">
                              <use fill="#000" filter="url(#filter-3Icon2)"
                                   xlinkHref="#path-2Icon2"/>
                              <use fill="url(#linearGradient-1Icon2)" xlinkHref="#path-2Icon2"/>
                            </g>
                            <g id="machine-learningIcon2" transform="translate(14 12)" fill="#FFF"
                               fillRule="nonzero">
                              <path
                                d="M10.554 21.418v-2.68c-1.1-.204-1.932-1.143-1.932-2.271 0-.468.143-.903.388-1.267l-2.32-1.662L4.367 15.2a2.254 2.254 0 01-.005 2.541l5.28 4.05c.268-.182.577-.311.911-.373zm.892 0c.334.062.643.191.912.373l5.28-4.05a2.254 2.254 0 01-.006-2.54l-2.321-1.663L12.99 15.2c.245.364.388.8.388 1.267 0 1.128-.832 2.067-1.932 2.27v2.681zm1.538.997c.25.365.394.803.394 1.274C13.378 24.965 12.314 26 11 26s-2.378-1.035-2.378-2.311c0-.471.145-.91.394-1.274l-5.28-4.05c-.385.26-.853.413-1.358.413C1.065 18.778 0 17.743 0 16.467c0-1.129.832-2.068 1.932-2.27v-2.393C.832 11.6 0 10.662 0 9.534c0-1.277 1.065-2.312 2.378-2.312.505 0 .973.153 1.358.414l5.28-4.05a2.254 2.254 0 01-.394-1.275C8.622 1.035 9.686 0 11 0s2.378 1.035 2.378 2.311c0 .471-.145.91-.394 1.274l5.28 4.05c.385-.26.853-.413 1.358-.413C20.935 7.222 22 8.257 22 9.533c0 1.129-.832 2.068-1.932 2.27v2.393c1.1.203 1.932 1.142 1.932 2.27 0 1.277-1.065 2.312-2.378 2.312-.505 0-.973-.153-1.358-.414l-5.28 4.05zm-9.243-7.843L5.937 13l-2.196-1.572c-.27.183-.58.314-.917.376v2.392c.336.062.647.193.917.376zm.627-3.772l2.321 1.662L9.01 10.8a2.254 2.254 0 01-.388-1.267c0-1.128.832-2.067 1.932-2.27V4.582a2.403 2.403 0 01-.912-.373l-5.28 4.05a2.254 2.254 0 01.006 2.54zm13.89 3.772c.27-.183.582-.314.918-.376v-2.392a2.403 2.403 0 01-.917-.376L16.063 13l2.196 1.572zm-.62-6.313l-5.28-4.05a2.403 2.403 0 01-.912.373v2.68c1.1.204 1.932 1.143 1.932 2.271 0 .468-.143.903-.388 1.267l2.32 1.662 2.322-1.662a2.254 2.254 0 01.005-2.541zm-8 6.313A2.415 2.415 0 0111 14.156c.507 0 .977.154 1.363.416L14.559 13l-2.196-1.572a2.415 2.415 0 01-1.363.416c-.507 0-.977-.154-1.363-.416L7.441 13l2.196 1.572zM11 10.978c.821 0 1.486-.647 1.486-1.445 0-.797-.665-1.444-1.486-1.444s-1.486.647-1.486 1.444c0 .798.665 1.445 1.486 1.445zm0 6.933c.821 0 1.486-.647 1.486-1.444 0-.798-.665-1.445-1.486-1.445s-1.486.647-1.486 1.445c0 .797.665 1.444 1.486 1.444zm8.622-6.933c.82 0 1.486-.647 1.486-1.445 0-.797-.665-1.444-1.486-1.444s-1.487.647-1.487 1.444c0 .798.666 1.445 1.487 1.445zm0 6.933c.82 0 1.486-.647 1.486-1.444 0-.798-.665-1.445-1.486-1.445s-1.487.647-1.487 1.445c0 .797.666 1.444 1.487 1.444zM2.378 10.978c.821 0 1.487-.647 1.487-1.445 0-.797-.666-1.444-1.487-1.444-.82 0-1.486.647-1.486 1.444 0 .798.665 1.445 1.486 1.445zm0 6.933c.821 0 1.487-.647 1.487-1.444 0-.798-.666-1.445-1.487-1.445-.82 0-1.486.647-1.486 1.445 0 .797.665 1.444 1.486 1.444zM11 25.133c.821 0 1.486-.646 1.486-1.444 0-.798-.665-1.445-1.486-1.445s-1.486.647-1.486 1.445.665 1.444 1.486 1.444zm0-21.377c.821 0 1.486-.647 1.486-1.445S11.821.867 11 .867s-1.486.646-1.486 1.444c0 .798.665 1.445 1.486 1.445z"
                                id="ShapeIcon2"/>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <h4 className="relative mt-6 text-lg font-bold">Machine Learning</h4>
                <p className="relative mt-2 text-base text-center text-gray-600">Your Marketing tools will learn how
                  to better
                  convert and sell.</p>
                <a href="#_" className="relative flex mt-2 text-sm font-medium text-indigo-500 underline">Learn
                  More</a>
              </div>
            </div>

            <div className="w-full max-w-md p-4 mx-auto mb-16 lg:mb-0 lg:w-1/3">
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <svg className="absolute w-full h-full text-gray-100 fill-current" viewBox="0 0 378 410"
                     xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <g>
                      <path
                        d="M305.9 14.4c23.8 24.6 16.3 84.9 26.6 135.1 10.4 50.2 38.6 90.3 43.7 137.8 5.1 47.5-12.8 102.4-50.7 117.4-37.9 15.1-95.7-9.8-151.7-12.2-56.1-2.5-110.3 17.6-130-3.4-19.7-20.9-4.7-82.9-11.5-131.2C25.5 209.5-3 174.7 1.2 147c4.2-27.7 41-48.3 75-69.6C110.1 56.1 141 34.1 184 17.5c43.1-16.6 98.1-27.7 121.9-3.1z"/>
                    </g>
                  </g>
                </svg>

                <svg className="relative w-20 h-20" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="linearGradient-1Icon3">
                      <stop stopColor="#32FBFC" offset="0%"/>
                      <stop stopColor="#3214F2" offset="100%"/>
                    </linearGradient>
                    <filter x="-14%" y="-10%" width="128%" height="128%" filterUnits="objectBoundingBox"
                            id="filter-3Icon3">
                      <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
                      <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1"
                                      result="shadowBlurOuter1"/>
                      <feColorMatrix
                        values="0 0 0 0 0.031372549 0 0 0 0 0.149019608 0 0 0 0 0.658823529 0 0 0 0.15 0"
                        in="shadowBlurOuter1"/>
                    </filter>
                    <path
                      d="M17.947 0h14.106c6.24 0 8.503.65 10.785 1.87a12.721 12.721 0 015.292 5.292C49.35 9.444 50 11.707 50 17.947v14.106c0 6.24-.65 8.503-1.87 10.785a12.721 12.721 0 01-5.292 5.292C40.556 49.35 38.293 50 32.053 50H17.947c-6.24 0-8.503-.65-10.785-1.87a12.721 12.721 0 01-5.292-5.292C.65 40.556 0 38.293 0 32.053V17.947c0-6.24.65-8.503 1.87-10.785A12.721 12.721 0 017.162 1.87C9.444.65 11.707 0 17.947 0z"
                      id="path-2Icon3"/>
                  </defs>
                  <g id="Page-1Icon3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Desktop-HDIcon3" transform="translate(-1091 -1278)">
                      <g id="FeaturesIcon3" transform="translate(170 915)">
                        <g id="Group-9-Copy-2Icon3" transform="translate(800 365)">
                          <g id="Group-8Icon3" transform="translate(125)">
                            <g id="Rectangle-9Icon3">
                              <use fill="#000" filter="url(#filter-3Icon3)"
                                   xlinkHref="#path-2Icon3"/>
                              <use fill="url(#linearGradient-1Icon3)" xlinkHref="#path-2Icon3"/>
                            </g>
                            <g id="smart-notificationsIcon3" transform="translate(15 11)"
                               fill="#FFF" fillRule="nonzero">
                              <path
                                d="M12.519 3.243a6.808 6.808 0 00-.187 1.298h-8.44a2.595 2.595 0 00-2.595 2.594v12.973a2.595 2.595 0 002.595 2.595h12.973a2.595 2.595 0 002.594-2.595v-8.44c.445-.02.88-.084 1.298-.187v8.627A3.892 3.892 0 0116.865 24H3.892A3.892 3.892 0 010 20.108V7.135a3.892 3.892 0 013.892-3.892h8.627zm6.616 6.487a4.865 4.865 0 110-9.73 4.865 4.865 0 010 9.73z"
                                id="IconIcon3"/>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <h4 className="relative mt-6 text-lg font-bold">Smart Notifications</h4>
                <p className="relative mt-2 text-base text-center text-gray-600">Our smart notifications will notify
                  you when
                  users convert.</p>
                <a href="#_" className="relative flex mt-2 text-sm font-medium text-indigo-500 underline">Learn
                  More</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <footer className="px-4 pt-12 pb-8 text-white bg-white border-t border-gray-200">
        <div className="container flex flex-col justify-between max-w-6xl px-4 mx-auto overflow-hidden lg:flex-row">
          <div className="w-full pl-12 mr-4 text-left lg:w-1/4 sm:text-center sm:pl-0 lg:text-left">
            <a href="/"
               className="flex justify-start block text-left sm:text-center lg:text-left sm:justify-center lg:justify-start">
                    <span className="flex items-start sm:items-center">
                      <img src={logo} alt="" className="w-auto h-10 text-indigo-600 fill-current"/>
                    </span>
            </a>
            <p className="mt-6 mr-4 text-base text-gray-500">Crafting the next-level of user experience and engagement.
            </p>
          </div>
          <div className="block w-full pl-10 mt-6 text-sm lg:w-3/4 sm:flex lg:mt-0">
            <ul className="flex flex-col w-full p-0 font-medium text-left text-gray-700 list-none">
              <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-gray-800 uppercase md:mt-0">
                Product
              </li>
              <li><a href="#_"
                     className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">Features</a>
              </li>
              <li><a href="#_"
                     className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">Integrations</a>
              </li>
              <li><a href="#_"
                     className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">Pricing</a>
              </li>
              <li><a href="#_"
                     className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">FAQ</a></li>
            </ul>
            <ul className="flex flex-col w-full p-0 font-medium text-left text-gray-700 list-none">
              <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-gray-800 uppercase md:mt-0">
                Company
              </li>
              <li><a href="#_"
                     className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">Privacy</a>
              </li>
              <li><a href="#_" className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">Terms
                of
                Service</a></li>
            </ul>
            <ul className="flex flex-col w-full p-0 font-medium text-left text-gray-700 list-none">
              <li className="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-gray-800 uppercase md:mt-0">
                TailwindCSS
              </li>
              <li><a href="https://devdojo.com/tailwindcss/components"
                     className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">Tailwind
                Components</a></li>
              <li><a href="https://devdojo.com/tailwindcss/templates"
                     className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">Tailwind
                Templates</a></li>
              <li><a href="https://devdojo.com/tails"
                     className="inline-block px-3 py-2 text-gray-500 no-underline hover:text-gray-600">Tails</a></li>
            </ul>
            <div className="flex flex-col w-full text-gray-700">
              <div className="inline-block px-3 py-2 mt-5 font-bold text-gray-800 uppercase md:mt-0">Follow Us</div>
              <div className="flex justify-start pl-4 mt-2">
                <a className="flex items-center block mr-6 text-gray-400 no-underline hover:text-gray-600"
                   target="_blank" rel="noopener noreferrer" href="https://devdojo.com">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>
                  </svg>
                </a>
                <a className="flex items-center block mr-6 text-gray-400 no-underline hover:text-gray-600"
                   target="_blank" rel="noopener noreferrer" href="https://devdojo.com">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                  </svg>
                </a>
                <a className="flex items-center block text-gray-400 no-underline hover:text-gray-600"
                   target="_blank" rel="noopener noreferrer" href="https://devdojo.com">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 pt-6 mt-10 text-center text-gray-500 border-t border-gray-100">
          © 2022 vStorage. All rights reserved.
        </div>
      </footer>

    </div>
  )
}
