import topImg from '../assets/img/top-img.png'
import CustomConnect from "../ui/CustomConnect";
import Header from "../components/Header";
import Footer from "../components/Footer";
import filecoinLogo from '../assets/img/filecoin.png';
import nftStorageLogo from '../assets/img/nft-storage.svg';
import ownIcon from '../assets/img/own.png';
import versionIcon from '../assets/img/versions.png';
import dirsIcon from '../assets/img/dirs.png';
import { Wrapper } from "../assets/css/common.style";

export default function Home() {
  return (
    <Wrapper id={"home"}>
      <Header />

      <div className={"z-0 pt-24"}>
        <svg className="absolute -top-72 -right-[400px] hidden w-screen max-w-3xl lg:block opacity-40"
             viewBox="0 0 818 815" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="c">
              <stop stopColor="#E614F2" offset="0%" />
              <stop stopColor="#FC3832" offset="100%" />
            </linearGradient>
            <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="f">
              <stop stopColor="#657DE9" offset="0%" />
              <stop stopColor="#1C0FD7" offset="100%" />
            </linearGradient>
            <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox"
                    id="a">
              <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" in="shadowBlurOuter1" />
            </filter>
            <filter x="-4.7%" y="-3.3%" width="109.3%" height="109.3%" filterUnits="objectBoundingBox"
                    id="d">
              <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter1" />
            </filter>
            <path
              d="M160.52 108.243h497.445c17.83 0 24.296 1.856 30.814 5.342 6.519 3.486 11.635 8.602 15.12 15.12 3.487 6.52 5.344 12.985 5.344 30.815v497.445c0 17.83-1.857 24.296-5.343 30.814-3.486 6.519-8.602 11.635-15.12 15.12-6.52 3.487-12.985 5.344-30.815 5.344H160.52c-17.83 0-24.296-1.857-30.814-5.343-6.519-3.486-11.635-8.602-15.12-15.12-3.487-6.52-5.343-12.985-5.343-30.815V159.52c0-17.83 1.856-24.296 5.342-30.814 3.486-6.519 8.602-11.635 15.12-15.12 6.52-3.487 12.985-5.343 30.815-5.343z"
              id="b" />
            <path
              d="M159.107 107.829H656.55c17.83 0 24.296 1.856 30.815 5.342 6.518 3.487 11.634 8.602 15.12 15.12 3.486 6.52 5.343 12.985 5.343 30.816V656.55c0 17.83-1.857 24.296-5.343 30.815-3.486 6.518-8.602 11.634-15.12 15.12-6.519 3.486-12.985 5.343-30.815 5.343H159.107c-17.83 0-24.297-1.857-30.815-5.343-6.519-3.486-11.634-8.602-15.12-15.12-3.487-6.519-5.343-12.985-5.343-30.815V159.107c0-17.83 1.856-24.297 5.342-30.815 3.487-6.519 8.602-11.634 15.12-15.12 6.52-3.487 12.985-5.343 30.816-5.343z"
              id="e" />
          </defs>
          <g fill="none" fillRule="evenodd" opacity=".9">
            <g transform="rotate(65 416.452 409.167)">
              <use fill="#000" filter="url(#a)" xlinkHref="#b" />
              <use fill="url(#c)" xlinkHref="#b" />
            </g>
            <g transform="rotate(29 421.929 414.496)">
              <use fill="#000" filter="url(#d)" xlinkHref="#e" />
              <use fill="url(#f)" xlinkHref="#e" />
            </g>
          </g>
        </svg>
      </div>

      <div
        className="relative z-10 items-center justify-center w-full lg:pt-40 lg:pb-8 xl:pt-48 xl:pb-10">
        <div
          className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
          <div
            className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
            <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">
              Decentralized
              versioning Storage
            </h1>
            <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
              Store and manage your files and folders, own your content and share important information using Filecoin.
              We provide new web3 features with simple user interface for versioning files storage.
            </p>
            <CustomConnect isHeader={false} />

            <div className="flex-col hidden mt-12 sm:flex lg:mt-24"></div>

            <svg className="absolute left-0 bottom-0  max-w-md -ml-72 left-svg opacity-40" viewBox="0 0 423 423"
                 xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="100%" y1="0%" x2="4.48%" y2="0%" id="linearGradient-1">
                  <stop stopColor="#5C54DB" offset="0%" />
                  <stop stopColor="#6A82E7" offset="100%" />
                </linearGradient>
                <filter x="-9.3%" y="-6.7%" width="118.7%" height="118.7%" filterUnits="objectBoundingBox"
                        id="filter-3">
                  <feOffset dy="8" in="SourceAlpha" result="shadowOffsetOuter1" />
                  <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" in="shadowBlurOuter1" />
                </filter>
                <rect id="path-2" x="63" y="504" width="300" height="300" rx="40" />
              </defs>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity=".9">
                <g id="Desktop-HD" transform="translate(-39 -531)">
                  <g id="Hero" transform="translate(43 83)">
                    <g id="Rectangle-6" transform="rotate(45 213 654)">
                      <use fill="#000" filter="url(#filter-3)" xlinkHref="#path-2" />
                      <use fill="url(#linearGradient-1)" xlinkHref="#path-2" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
            <div className="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen">
              <img src={topImg} alt={"vStorage"}
                   className="lg:w-7/12 h-auto mb-20 lg:ml-12 mt-16 lg:mb-0 lg:h-full" />
            </div>
          </div>
        </div>
      </div>


      <div id="features" className="relative z-10 w-full px-8 py-8 border-t border-gray-200 md:py-8 lg:py-16 xl:px-0">
        <div className="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
          {/*<h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">Our Features</h2>*/}
          <h3
            className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
            Our Features
          </h3>
          <p className={"w-2/3 mx-auto text-center text-lg text-gray-600 mt-8"}>
            Store and manage your files and folders with a few clicks: organize your files, control versions,
            share information and use your space more efficient with filecoin, a decentralized data storage.
          </p>
          <div className="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-16">

            <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <svg className="absolute w-full h-full text-gray-100 fill-current" viewBox="0 0 377 340"
                     xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <g>
                      <path
                        d="M342.8 3.7c24.7 14 18.1 75 22.1 124s18.6 85.8 8.7 114.2c-9.9 28.4-44.4 48.3-76.4 62.4-32 14.1-61.6 22.4-95.9 28.9-34.3 6.5-73.3 11.1-95.5-6.2-22.2-17.2-27.6-56.5-47.2-96C38.9 191.4 5 151.5.9 108.2-3.1 64.8 22.7 18 61.8 8.7c39.2-9.2 91.7 19 146 16.6 54.2-2.4 110.3-35.6 135-21.6z" />
                    </g>
                  </g>
                </svg>

                <img src={versionIcon} className="relative w-28 h-28" alt="" />
                <h4 className="relative mt-2 text-lg font-bold">File Versioning</h4>
                <p className="relative mt-2 text-base text-center text-gray-600">
                  Store multiple file versions with simple and powerful user interface with versioning history.
                </p>
                {/*<a href="#_" className="relative flex mt-2 text-sm font-medium text-indigo-500 underline">Learn More</a>*/}
              </div>
            </div>

            <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <svg className="absolute w-full h-full text-gray-100 fill-current" viewBox="0 0 358 372"
                     xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <g>
                      <path
                        d="M315.7 6.5c30.2 15.1 42.6 61.8 41.5 102.5-1.1 40.6-15.7 75.2-24.3 114.8-8.7 39.7-11.3 84.3-34.3 107.2-23 22.9-66.3 23.9-114.5 30.7-48.2 6.7-101.3 19.1-123.2-4.1-21.8-23.2-12.5-82.1-21.6-130.2C30.2 179.3 2.6 141.9.7 102c-2-39.9 21.7-82.2 57.4-95.6 35.7-13.5 83.3 2.1 131.2 1.7 47.9-.4 96.1-16.8 126.4-1.6z" />
                    </g>
                  </g>
                </svg>

                <img src={ownIcon} className="relative w-24 h-24" alt="" />
                <h4 className="relative mt-2 text-lg font-bold">Own your Data</h4>
                <p className="relative mt-2 text-base text-center text-gray-600">
                  Become the real owner of your data by using IPFS you can provide API key to use your own account.
                </p>
                {/*<a href="#_" className="relative flex mt-2 text-sm font-medium text-indigo-500 underline">Learn More</a>*/}
              </div>
            </div>

            <div className="w-full max-w-md p-4 mx-auto mb-16 lg:mb-0 lg:w-1/3">
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <svg className="absolute w-full h-full text-gray-100 fill-current" viewBox="0 0 378 410"
                     xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <g>
                      <path
                        d="M305.9 14.4c23.8 24.6 16.3 84.9 26.6 135.1 10.4 50.2 38.6 90.3 43.7 137.8 5.1 47.5-12.8 102.4-50.7 117.4-37.9 15.1-95.7-9.8-151.7-12.2-56.1-2.5-110.3 17.6-130-3.4-19.7-20.9-4.7-82.9-11.5-131.2C25.5 209.5-3 174.7 1.2 147c4.2-27.7 41-48.3 75-69.6C110.1 56.1 141 34.1 184 17.5c43.1-16.6 98.1-27.7 121.9-3.1z" />
                    </g>
                  </g>
                </svg>

                <img src={dirsIcon} className="relative w-24 h-24" alt="" />
                <h4 className="relative mt-2 text-lg font-bold">Custom Structure</h4>
                <p className="relative mt-2 text-base text-center text-gray-600">
                  Create any directory structure for your files, control colors and manage access rights.
                </p>
                {/*<a href="#_" className="relative flex mt-2 text-sm font-medium text-indigo-500 underline">Learn More</a>*/}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div id="partners" className="relative z-10 w-full px-8 py-10 border-t border-gray-200 md:py-10 lg:py-20 xl:px-0">
        <div className="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
          <h3
            className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
            Partners
          </h3>
          <div className="flex flex-col justify-center gap-10 w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20">
            <img src={filecoinLogo} alt="" className={"h-20"} />
            <img src={nftStorageLogo} alt="" className={"h-20"} />
          </div>
        </div>
      </div>

      <Footer />
    </Wrapper>
  )
}
