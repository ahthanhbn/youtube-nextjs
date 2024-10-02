import { getChannelDetail } from '@/api/data'
import ChannelDetail from '@/features/channel'
import { channel } from 'diagnostics_channel'
import React from 'react'

type ChannelPageDetailType = {
  params: {
    id: string
  }
}
async function ChannelPageDetail(props: ChannelPageDetailType) {
  const { params } = props
  const id = params.id
//   console.log("14", id);
//   const channelData = await getChannelDetail(id)
  return (
    <ChannelDetail />
  )
}

export default ChannelPageDetail