import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <>
            <div className='px-4 py-2 flex flex-row justify-between items-center bg-primary-700'>
                <div className='flex justify-between items-center'>
                    <div className='p-2 flex justify-between items-center' >
                        <a href="">
                            <Image src="/navigations.svg" width={18} height={13} alt='navigations' />
                        </a>
                    </div>
                    <div className='flex justify-between items-center pl-4 pr-[14px] py-[10px]'>
                        <Image src="/Youtube-Logo.png" width={89.59} height={20} alt='Youtube' />
                    </div>
                </div>
                <div className='flex justify-between items-center '>
                    <form className=' bg-primary-350 p-[1px] flex justify-between items-center'>
                        <input className='text-base w-[362px] py-2.5 pl-2 bg-primary-800 text-primary-300 rounded-[2px_0px_0px_2px]' type="text" name="search" id="search" placeholder='Search' />
                        <button className='py-[8px] px-[20px]'>
                            <Image src="/search-icon.svg" width={17.87} height={17.88} alt='Youtube' />
                        </button>
                    </form>
                    <div></div>
                </div>
                <div className=''></div>

            </div>
        </>
    )
}

export default Header