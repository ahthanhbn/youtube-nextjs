import HeroVideo from "./components/HeroVideo"
import StaticVideo from "./components/StaticVideo"

type VideoDetailProps = {
    id :string
}
function VideoDetail({id}:VideoDetailProps) {
  // console.log("thanh",id);
  return (
    <div className="flex justify-center items-start">
      <div className="pt-6 pl-6 bg-red-500">
        <HeroVideo videoId={id}/>
        <StaticVideo />
      </div>
      <div className="flex flex-col justify-start items-start">
        <div>
          Tất cả
        </div>
      </div>
    </div>
  )
}

export default VideoDetail
