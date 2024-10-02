import React from 'react'
import { ButtonDislike, ButtonLike } from './Interact';

function StaticVideo({staticVd}:any) {
  // console.log(staticVd);
  return (
    <div className='w-[640px] pt-[20px] pb-[8px]'>
      <h1 className=" text-white line-clamp-2 text-lg font-normal tracking-tight pb-0.5">{staticVd?.snippet.title}</h1>
      <div className='flex justify-between items-center'>
        <div className='py-3'><p className='text-[#aaaaaa] text-sm font-bold'>576,969 views . Oct 8, 2021</p></div>
        <div className='flex justify-end items-center'>
          <ButtonLike likes = {staticVd}/>
          <ButtonDislike dislikes = {staticVd}/>
        </div>
      </div>
        
    </div>
  )
}

export default StaticVideo