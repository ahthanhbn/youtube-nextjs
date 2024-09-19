import "../app/globals.css";
import Image from "next/image";

function CardItem({ item }: any) {
  console.log(item);
  const { title, thumbnails, channelTitle } = item.snippet;

  return (
    <>
      <div className="pb-[18px] flex flex-col">
        <div className="w-full h-[155px]">
          <Image
            className="w-full h-full object-cover "
            src={thumbnails.default.url}
            width={thumbnails.default.width}
            height={thumbnails.default.height}
            alt="Video Card"
          />
        </div>
        <div className="flex h-full pt-3 justify-start items-start gap-3 ">
          <div className="rounded-full overflow-hidden shrink-0">
            <Image
              className="rounded-full w-8 h-8 object-cover"
              src={thumbnails.default.url}
              width={100}
              height={100}
              alt="testing"
            />
          </div>
          <div className="w-full h-full  flex flex-col justify-between items-start">
            <h3 className="limited-text">{title}</h3>
            <div>
              <h4 className="text-xs">{channelTitle}</h4>
              <p>15M view</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
