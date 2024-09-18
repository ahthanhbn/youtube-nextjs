import React from 'react';

function TopMenu() {
  interface menuItemTypes {
    [key: string]: string;
  }
  const menuItem: menuItemTypes = {
    music: "Music",
    sport: "Sport",
    game: "Game",
    study: "Study",
    anime: "Anime",
    face: "Face",
    top: "Top",
    trend: "Trend",
    book: "Book",
    feature: "Feature",
    handsome: "handsome",
    girl: "Women",
    weather: "The Weather",
    wear: "T-shirt",
    edm: "Edm music",
    love: "love",
    rapper: "MCK",
  };

  const items = [];
  for (const key in menuItem) {
    if (menuItem.hasOwnProperty(key)) {
      items.push(menuItem[key]);
    }
  }
  return (
    <>
      <span className="w-full h-[1px] bg-primary-350"></span>
      <div className=" w-full flex justify-end items-center bg-primary-350 ">
        <div className="py-3 pl-6 pr-3 flex justify-center items-center">
          <button className="py-2 px-3 bg-primary-0 text-primary-600 rounded-[32px] text-sm font-normal whitespace-nowrap ">
            All
          </button>
        </div>
        {items.map((item) => {
          return (
            <div
              key={item}
              className="py-3 pr-3 flex justify-center items-center"
            >
              <button className="py-2 px-3 bg-primary-0 text-primary-600 rounded-[32px] text-sm font-normal whitespace-nowrap ">
                {item}
              </button>
            </div>
          );
        })}
        <div className="py-[20px] px-[20px] flex justify-center items-center absolute top-0 right-0  ">
          <button className="py-[2.64px] px-[4.97px] bg-primary-0 text-primary-600 rounded-[32px] text-sm font-normal whitespace-nowrap ">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group">
                <path
                  id="Vector"
                  d="M0.970001 10.65L5.62 6.00001L0.970001 1.35001L1.68 0.640015L7.03 6.00001L1.68 11.35L0.970001 10.65Z"
                  fill="white"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <span className="w-full h-[1px] bg-primary-350"></span>
    </>
  );
}

export default TopMenu;
