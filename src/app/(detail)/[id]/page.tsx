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
  // console.log("Thanh", data?.items[0]);
  const {items} = await data
  return (
    <VideoDetail
      title={items[0]}
      vdId={items[0]?.id}
      channel = {items[0]?.snippet.channelId}
      related={relatedData.items}
    />
  )
}

export default VideoPageDetail
