import '../app/globals.css'
import Image from 'next/image'

function CardItem({ items }: any) {
  const { title, thumbnails, channelTitle } = items.snippet
  return (
    <>
      <div className="pb-[18px] flex flex-col">
        <div className="w-full h-[155px] relative">
          <Image
            className="w-full h-full object-cover  "
            src={thumbnails.high.url}
            width={thumbnails.high.width}
            height={thumbnails.high.height}
            alt="Video Card"
          />
          <span className='inline-block px-1 py-[3px] bg-dark-600 text-dark-0 absolute bottom-1 right-1 text-[10px] font-normal'>22:13</span>

          
          
        </div>
        <div className="flex h-full pt-3 justify-start items-start gap-3 ">
          <div className="rounded-full overflow-hidden shrink-0">
            <Image
              className="rounded-full w-9 h-9 object-cover"
              src={thumbnails.high.url}
              width={100}
              height={100}
              alt="testing"
            />
          </div>
          <div className="w-full h-full  flex flex-col justify-between items-start">
            <h3 className="limited-text text-xs font-bold text-dark-0">{title}</h3>
            <div>
              <h4 className="text-xs text-dark-250 font-normal">{channelTitle}</h4>
              <p className="text-xs text-dark-250 font-normal">15K View . 1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardItem
