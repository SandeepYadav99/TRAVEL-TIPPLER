import Link from 'next/link'
import React from 'react'

const NavBar_List = () => {
    return (
        <nav className="lg:flex items-center hidden">
            <div className="mr-4 text-xl">
                <Link href={"/"}>Home</Link>
            </div>
            <div className="mr-4 text-xl">
                {" "}
                <Link href={"https://www.zingbus.com/"}>Zingbus</Link>
            </div>
            <div className="mr-4 text-xl">
                {" "}
                <Link href={"/itinerary"}>Itinerary</Link>
            </div>
            <div className="mr-4 text-xl">
                <Link href={"/web-story"}>Web Story</Link>
            </div>
            <div className="mr-4 text-xl">
                <Link href={"/about-us"}>About Us</Link>
            </div>
        </nav>
    )
}

export default NavBar_List;