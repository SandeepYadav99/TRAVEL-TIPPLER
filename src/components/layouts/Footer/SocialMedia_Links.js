import Image from 'next/image'
import React from 'react'
import Twitter from "@/assets/twitter.svg";
import Instagram from "@/assets/instagram.svg";
import Facebook from "@/assets/facbook.svg";

const SocialMedia_Links = () => {
    return (
        <ul className="flex justify-center mt-2">
            <a>
                <Image
                    src={Twitter}
                    height="30"
                    width="30"
                    alt="Twitter"
                    className="cursor-pointer transition-transform transform hover:scale-110 "
                />
            </a>
            <a>
                <Image
                    src={Instagram}
                    height="30"
                    width="30"
                    alt="Instagram"
                    className="cursor-pointer transition-transform transform hover:scale-110"
                />
            </a>
            <a>
                <Image
                    src={Facebook}
                    height="30"
                    width="30"
                    alt="Facebook"
                    className="cursor-pointer transition-transform transform hover:scale-110"
                />
                Facebook
            </a>
            <a>
                <Image
                    src={Twitter}
                    height="30"
                    width="30"
                    alt="Twitter"
                    className="cursor-pointer transition-transform transform hover:scale-110"
                />
            </a>
            <a>
                <Image
                    src={Instagram}
                    height="30"
                    width="30"
                    alt="Instagram"
                    className="cursor-pointer transition-transform transform hover:scale-110"
                />
            </a>
            <a>
                <Image
                    src={Facebook}
                    height="30"
                    width="30"
                    alt="Facebook"
                    className="cursor-pointer transition-transform transform hover:scale-110"
                />
            </a>
        </ul>
    )
}

export default SocialMedia_Links