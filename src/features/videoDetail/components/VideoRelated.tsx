import { Button } from '@/components/ui/button'
import VideoRelatedCard from './VideoRelatedCard'

type VideoRelatedProps = {
  details: any
}
function VideoRelated({ details }: VideoRelatedProps) {
  console.log(details)
  return (
    <>
      <div className='flex gap-2 py-2'>
        <Button className="text-dark-600 text-sm font-normal h-8 px-3 py-2 bg-white rounded-[32px]">
          All
        </Button>
        <Button className=" text-sm font-normal h-8 px-3 py-2 bg-[#303030] rounded-[32px] border border-[#aaaaaa] ">
          From Marcus Levin
        </Button>
      </div>
      {details.map((item: any) => {
        return (
          <div key={item.id}>
            <VideoRelatedCard video={item} />
          </div>
        )
      })}
    </>
  )
}

export default VideoRelated
