import Link from 'next/link'

function ChannelDetail({ channelId }: any) {
  return (
    <Link
      href={`/channel/${channelId}`}
      className="pb-[18px] flex flex-col"
    >
      Channel
    </Link>
  )
}

export default ChannelDetail
