import Link from 'next/link'
import React from 'react'

const RelatedPost_Links = () => {
  return (
    <ul className="text-white flex justify-center">
        <Link
          href={"https://www.zingbus.com/distance"}
          className="p-2 font-sans text-[13px]"
        >
          DISTANCE CALCULATOR
        </Link>
        <Link
          href={"https://www.zingbus.com/blog/"}
          className="p-2 font-sans text-[13px]"
        >
          ZINGBUS BLOG
        </Link>
        <Link
          href={"https://www.zingbus.com/blog/zing-electric-shared-cab/"}
          className="p-2 font-sans text-[13px]"
        >
          ZING ELECTRIC
        </Link>
        <Link
          href={"https://www.zingbus.com/"}
          className="p-2 font-sans text-[13px]"
        >
          BUS TICKET BOOKING
        </Link>
      </ul>
  )
}

export default RelatedPost_Links