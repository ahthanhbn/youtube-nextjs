import React from 'react';

import { getAllSuggestVideos } from '@/api/data';

import CardItem from './CardItem';

async function Card() {
    const listVideo = await getAllSuggestVideos();

  return (
    <>
    <div className='grid grid-cols-4'>
      {listVideo && listVideo.items &&listVideo.items.map((item:any) => {
        return(
          <CardItem/>
        )
      })}
    </div>
    </>
  )
}

export default Card