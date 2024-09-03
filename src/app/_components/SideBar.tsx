"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import "../globals.css"
import Channel from './Channel'



function SideBar() {
    const [src, setSrc] = useState(""); // Hình ảnh mặc định
    return (
        <>
        <div className='custom-scroll h-[100vh] fixed top-[62.71px] bottom-0 z-10 bg-primary-700 overflow-y-scroll'>
            <div className='sticky pb-[46px] z-[9] flex flex-col justify-center items-end bg-primary-700 '>
                <div className='py-3 w-full flex flex-col justify-start items-center'>
                    <button className='py-2 pl-6 pr-2 flex justify-start items-center gap-6 hover:bg-primary-350' onMouseEnter={() => setSrc("/home-fill-icon.svg")} onMouseLeave={() => setSrc("/home-icon.svg")}>
                        <Image src={src || "/home-icon.svg"} width={16} height={18} alt='Home' />
                        <p className='w-36 text-left py-1 text-sm font-normal text-primary-0'>Home</p>
                    </button>
                    <button className='py-2 pl-6 pr-2 flex justify-start items-center gap-6'>
                        <Image src="/explore-icon.svg" width={20} height={20} alt='Explore' />
                        <p className='w-36 text-left py-1 text-sm font-normal text-primary-0'>Explore</p>
                    </button>
                    <button className='py-2 pl-6 pr-2 flex justify-start items-center gap-6'>
                        <Image src="/subscriptions-icon.svg" width={20} height={18} alt='Subscriptions' />
                        <p className='w-36 text-left py-1 text-sm font-normal text-primary-0'>Subscriptions</p>
                    </button>
                </div>
                <span className='h-[1px] w-full bg-primary-350'></span>
                <div className='py-3 w-full flex flex-col justify-start items-center'>
                    <button className='py-2 pl-6 pr-2 flex justify-start items-center gap-6'>
                        <Image src="/library-icon.svg" width={16} height={18} alt='Library' />
                        <p className='w-36 text-left py-1 text-sm font-normal text-primary-0'>Library</p>
                    </button>
                    <button className='py-2 pl-6 pr-2 flex justify-start items-center gap-6'>
                        <Image src="/history-icon.svg" width={16} height={18} alt='History' />
                        <p className='w-36 text-left py-1 text-sm font-normal text-primary-0'>History</p>
                    </button>
                    <button className='py-2 pl-6 pr-2 flex justify-start items-center gap-6'>
                        <Image src="/your-vd-icon.svg" width={16} height={18} alt='Your Videos' />
                        <p className='w-36 text-left py-1 text-sm font-normal text-primary-0'>Your Videos</p>
                    </button>
                    <button className='py-2 pl-6 pr-2 flex justify-start items-center gap-6'>
                        <Image src="/watch-lt-icon.svg" width={16} height={18} alt='Watch Later' />
                        <p className='w-36 text-left py-1 text-sm font-normal text-primary-0'>Watch Later</p>
                    </button>
                    <button className='py-2 pl-6 pr-2 flex justify-start items-center gap-6'>
                        <Image src="/like-icon.svg" width={16} height={18} alt='Liked Videos' />
                        <p className='w-36 text-left py-1 text-sm font-normal text-primary-0'>Liked Videos</p>
                    </button>
                    <button className='py-2 pl-6 pr-2 flex justify-start items-center gap-6'>
                        <Image src="/showMore-icon.svg" width={16} height={18} alt='Show More' />
                        <p className='w-36 text-left py-1 text-sm font-normal text-primary-0'>Show More</p>
                    </button>
                </div>
                <span className='h-[1px] w-full bg-primary-350'></span>
                <div className='py-3 w-full flex flex-col justify-start items-start'>
                    <h1 className='px-6 py-2 text-primary-250 text-sm font-bold uppercase'>Subscriptions</h1>
                    <Channel/>
                </div>
                <span className='h-[1px] w-full bg-primary-350'></span>
                <div className='py-3 w-full flex flex-col justify-start items-center'></div>
                <span className='h-[1px] w-full bg-primary-350'></span>
                <div className='py-3 w-full flex flex-col justify-start items-center'></div>
                <span className='h-[1px] w-full bg-primary-350'></span>
                <div className='py-3'></div>
            </div>
        </div>
        </>
    )
}

export default SideBar