import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <>
            <div className='w-full px-4 py-2 flex flex-row justify-between items-center bg-primary-700 sticky top-0 z-[100]'>
                <div className='flex justify-between items-center'>
                    <div className='p-2 flex justify-between items-center' >
                        <button>
                            <Image src="/navigations.svg" width={18} height={13} alt='navigations' />
                        </button>
                    </div>
                    <div className=' flex justify-between items-center pl-4 pr-[14px] py-[10px]'>
                        <Link href="">
                            <Image src="/yt.svg" width={89.59} height={20} alt='Youtube' />
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-1 '>
                    <form className='  bg-primary-350 p-[1px] flex justify-between items-center'>
                        <input className=' text-base w-[362px] py-2.5 pl-2 bg-primary-800 placeholder-primary-300 rounded-[2px_0px_0px_2px] focus:outline-none focus:placeholder-primary-350' type="text" name="search" id="search" placeholder='Search' />
                        <button className='py-[8px] px-[20px]'>
                            <Image src="/search-icon.svg" width={17.87} height={17.88} alt='Youtube' />
                        </button>
                    </form>
                    <div className='  flex justify-center items-center p-3 rounded-[40px] bg-primary-900'>
                        <button className='px-[5.5px] py-[3px]'>
                            <Image src="/voice.svg" width={13} height={18} alt='voice' />
                        </button>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <div className='p-2'>
                        <button className='px-0.5 py-[5px]'>
                            <Image src="/item.svg" width={20} height={14} alt='Create Video' />
                        </button>
                    </div>
                    <div className='p-2'>
                        <button className='p-1'>
                            <Image src="/item2.svg" width={16} height={16} alt='Youtube Extensions' />
                        </button>
                    </div>
                    <div className='p-2'>
                        <button className='px-1 py-0.5'>
                            <Image src="/item3.svg" width={16} height={20.04} alt='Notification' />
                        </button>
                    </div>
                    <div className='py-1 px-3.5'>
                        <button className='flex justify-center items-center rounded-full overflow-hidden '>
                            <Image className='w-8 h-8 object-cover ' src="/User-Avatar.png" width={100} height={100} alt='User-Avatar' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header