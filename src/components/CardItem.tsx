import Image from 'next/image';

function CardItem() {
  const data = {
    title: "Shawn Mendes - Stitches (Lyrics) | The Chainsmokers, Justin Bieber, Ed Sheeran | Mixed Lyrics",
    date: "Youtube",
    channelTitle: "ʟʏʀɪᴄᴀʟ ᴍɪʀᴀᴄʟᴇꜱ",

    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/MU8B4XDI3Uw/default.jpg    ",
        width: 120,
        height: 90,
      },
      medium: {
        url: "https://i.ytimg.com/vi/MU8B4XDI3Uw/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/MU8B4XDI3Uw/hqdefault.jpg",
        width: 480,
        height: 360,
      },
    },
  };

  return (
    <>
      <div className="">
        <div>
          <Image
            src={data.thumbnails.default.url}
            width={data.thumbnails.default.width}
            height={data.thumbnails.default.height}
            alt="testing"
          />
        </div>
        <div>
          <div className='rounded-full overflow-hidden'>
            <Image className='rounded-full w-8 h-8 object-cover'
              src={data.thumbnails.default.url}
              width={100}
              height={100}
              alt="testing"
            />
          </div>
          <div>
            <h3>{data.title}</h3>
            <h4>{data.channelTitle}</h4>
            <div>
                <p>15M view</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
