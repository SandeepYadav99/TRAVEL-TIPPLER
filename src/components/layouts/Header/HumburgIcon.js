import React from 'react'
import { IconHamburger } from '../../global/Icons'

const HumburgIcon = ({openHandler}) => {
    return (
        <button
            className="flex items-center border-2 p-2 rounded lg:hidden"
            onClick={openHandler}
        >
            <IconHamburger fill={"black"} />
        </button>
    )
}

export default HumburgIcon