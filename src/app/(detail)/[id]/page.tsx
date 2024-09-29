import { getVideoDetail, getVideoRelate } from '@/api/data'

import VideoDetail from '@/features/videoDetail'

type VideoDetailProps = {
  params: {
    id: string
  }
}
async function VideoPageDetail(props: VideoDetailProps) {
  const { params } = props
  const id = params.id
  const data = await getVideoDetail({ videoId: id })
  const relatedData = await getVideoRelate()
  // console.log(relatedData)
  // console.log("Thanh", data.items[0].id);
  return <VideoDetail id={data.items[0].id} related={relatedData.items} />
}

export default VideoPageDetail
