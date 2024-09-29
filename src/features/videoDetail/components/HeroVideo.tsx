type HeroVideoProps = {
  videoId: string
}
function HeroVideo({videoId}:HeroVideoProps) {
  // console.log("thanh",videoId);
  return (
    <iframe
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${videoId}?si=PRltJdPq5NPO0a3G`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  )
}

export default HeroVideo
