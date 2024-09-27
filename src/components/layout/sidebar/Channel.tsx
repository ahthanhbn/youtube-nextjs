"use client"
import Image from 'next/image';
import React, { useState } from 'react'
const channelItem = [
    {
        image: "/channel1.png",
        alt: "James Gouse"
    },
    {
        image: "/channel2.png",
        alt: "Alan Cooper"
    },
    {
        image: "/channel3.png",
        alt: "Marcus Levin"
    },
    {
        image: "/channel4.png",
        alt: "Alexis Sears"
    },
    {
        image: "/channel5.png",
        alt: "Jesica Lambert"
    },
    {
        image: "/channel6.png",
        alt: "Anna White"
    },
    {
        image: "/channel7.png",
        alt: "Skylar Dias"
    },
    {
        image: "/channel7.png",
        alt: "Skylar Dias"
    },
    {
        image: "/channel7.png",
        alt: "Skylar Dias"
    },
    {
        image: "/channel7.png",
        alt: "Skylar Dias"
    },
    {
        image: "/channel7.png",
        alt: "Skylar Dias"
    },
]

function Channel() {
    const [src, setSrc] = useState("");
    const [Count, setCount] = useState(7);
    const [Length, setLength] = useState(channelItem.length - Count)
    const handleShowMore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setCount((number) => (number == 7? channelItem.length : 7))

    }
    return (
        <>
            {Array.isArray(channelItem) ? channelItem.slice(0, Count).map((item) => {
                return (
                    <button key={item.alt} className='py-2 pl-6 pr-2 flex justify-start items-center gap-6'>
                        <Image className='w-6 h-6 object-cover rounded-full' src={item.image} width={100} height={100} alt={item.alt} />
                        <p className='w-36 text-left py-1 text-sm font-normal text-dark-0'>{item.alt}</p>
                    </button>
                )
            })
                : null}

            <button onClick={handleShowMore} className='py-2 pl-6 pr-2 flex justify-start items-center gap-6  hover:bg-dark-350' onMouseEnter={() => setSrc("/home-fill-icon.svg")} onMouseLeave={() => setSrc("/home-icon.svg")}>
                <Image className='px-1' src={Count == 7? "/showMore-icon.svg": "/hide-icon.svg"} width={24} height={24} alt='Show More' />
                <p className='w-36 text-left py-1 text-sm font-normal text-dark-0'>{Count == 7 ? `Show ${Length} More` : "Hide"}</p>
            </button>

        </>
    )
}

export default Channel