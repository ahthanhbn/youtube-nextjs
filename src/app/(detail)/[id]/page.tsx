import { getVideoDetail } from "@/api/data"
import VideoDetail from "@/features/videoDetail"

type VideoDetailProps = {
  params: {
    id: string
  }
}
async function VideoPageDetail(props: VideoDetailProps) {
  const { params } = props
  const id = params.id
  const data = await getVideoDetail({videoId: id}); 
  // console.log("Thanh", data.items[0].id);
  return (
      <VideoDetail id = {data.items[0].id} />
  )
}

export default VideoPageDetail
