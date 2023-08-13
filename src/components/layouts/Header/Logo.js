import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "@/assets/Travel-Tippler-1.png";

const Logo = () => {
    return (
        <Link href={"/"}>
            <Image src={logo} alt="logo" width={350} height={350} />
        </Link>
    )
}

export default Logo