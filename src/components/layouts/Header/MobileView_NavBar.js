import Link from 'next/link'
import React from 'react'
import { IconClose } from '../../global/Icons'

const MobileView_NavBar = ({closeHandler, mobileMenuVisible}) => {
  return (
    <div
    className={`lg:hidden m-4 fixed top-0 left-0 w-full h-full mx-auto bg-white text-black py-2 px-4 ${mobileMenuVisible ? "block w-full h-full z-20 " : "hidden"
      }  `}
  >
     <button
        className={`lg:hidden text-[18px] ${mobileMenuVisible ? "block float-right mt-5 " : "hidden"
          }`}
        onClick={closeHandler}
      >
        <IconClose fill={"black"} />
      </button>
    <div className=" ">
      <div className="bg-white text-black py-2 px-4 ">
        <div className="mr-4 text-[18px] py-2 ">
          <Link href={"/"} onClick={closeHandler}>
            Home
          </Link>
        </div>
        <div className="mr-4 text-[18px] py-2">
          {" "}
          <Link href={"https://www.zingbus.com/"} onClick={closeHandler}>
            Zingbus
          </Link>
        </div>
        <div className="mr-4 text-[18px] py-2">
          {" "}
          <Link href={"/itinerary"} onClick={closeHandler}>
            Itinerary
          </Link>
        </div>
        <div className="mr-4 text-[18px] py-2">
          <Link href={"/web-story"} onClick={closeHandler}>
            Web Story
          </Link>
        </div>
        <div className="mr-4 text-[18px] py-2">
          <Link href={"/about-us"} onClick={closeHandler}>
            About Us
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MobileView_NavBar