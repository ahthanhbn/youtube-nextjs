import ChannelDetail from './components/ChannelDetail'
import HeroVideo from './components/HeroVideo'
import StaticVideo from './components/StaticVideo'
import VideoRelated from './components/VideoRelated'

type VideoDetailProps = {
  id: string
  related: any
}
function VideoDetail({ id, related }: VideoDetailProps) {
  // console.log("thanh",id);
  // console.log("Thanh", related);
  return (
    <div className="flex justify-center items-start gap-6 pt-6">
      <div className="pl-6 bg-red-500">
        <HeroVideo videoId={id} />
        <StaticVideo />
        <ChannelDetail />
      </div>
      <div className="flex flex-col justify-start items-start gap-2">
        <VideoRelated details={related} />
      </div>
    </div>
  )
}

export default VideoDetail
