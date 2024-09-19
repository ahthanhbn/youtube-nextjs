import React from 'react';

import { getAllSuggestVideos } from '@/api/data';

import CardItem from './CardItem';

async function Card() {
    const listVideo = await getAllSuggestVideos();
  return (
    <>
    <div className='grid grid-cols-4 gap-x-4 gap-y-10 px-6 py-[25px]'>
      {listVideo && listVideo.items &&listVideo.items.map((item:any) => {
        return(
          <CardItem key= {item.id.videoId} item = {item}/>
        )
      })}
    </div>
    </>
  )
}

export default Card