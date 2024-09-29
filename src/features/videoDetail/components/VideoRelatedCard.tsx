import Image from 'next/image'
import Link from 'next/link'

function VideoRelatedCard({ video }: any) {
  const { thumbnails, title, videoOwnerChannelTitle } = video.snippet
  return (
    <Link href={`/${video.id}`}>
      <div className="w-[402px] flex gap-2">
        <div className="w-[168px] h-[94px] shrink-0 relative ">
          <Image
            className="w-full h-full object-cover"
            src={thumbnails.standard.url}
            width={thumbnails.standard.width}
            height={thumbnails.standard.height}
            alt="video related"
          />
          <span className="inline-block px-1 py-[3px] bg-dark-600 text-dark-0 absolute bottom-1 right-1 text-[10px] font-normal">
            22:13
          </span>
        </div>
        <div className="flex h-full py-[7px] justify-start items-start gap-3 ">
          <div className="w-full h-full pr-6 flex flex-col justify-between items-start">
            <h3 className="line-clamp-2 text-sm font-normal text-dark-0 leading-tight mb-0.5">{title}</h3>
            <div>
              <h4 className="text-xs text-dark-250 font-normal leading-[18px]">{videoOwnerChannelTitle}</h4>
              <p className="text-xs text-dark-250 font-normal leading-[18px]">15K View . 1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoRelatedCard
