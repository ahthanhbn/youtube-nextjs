"use client";
import Image from "next/image";
import React, { useState } from "react";
import "../globals.css";
import Channel from "./Channel";
import { ExploreIcon, HistoryIcon, HomeIcon, LibraryIcon, LikedVideosIcon, SubscriptionsIcon, WatchLateIcon, YourVideosIcon } from "./SidebarItem";

function SideBar() {
  return (
    <>
      <div className="custom-scroll h-[100vh] fixed top-[62.71px] bottom-0 z-10 bg-primary-700 overflow-y-scroll">
        <div className="sticky pb-[46px] z-[9] flex flex-col justify-center items-end bg-primary-700 ">
          <div className="py-3 w-full flex flex-col justify-start items-center">
            <HomeIcon />
            <ExploreIcon />
            <SubscriptionsIcon />
          </div>
          <span className="h-[1px] w-full bg-primary-350"></span>
          <div className="py-3 w-full flex flex-col justify-start items-center">
            <LibraryIcon/>
            <HistoryIcon/>
            <YourVideosIcon/>
            <WatchLateIcon/>
            <LikedVideosIcon/>
          </div>
          <span className="h-[1px] w-full bg-primary-350"></span>
          <div className="py-3 w-full flex flex-col justify-start items-start">
            <h1 className="px-6 py-2 text-primary-250 text-sm font-bold uppercase">
              Subscriptions
            </h1>
            <Channel />
          </div>
          <span className="h-[1px] w-full bg-primary-350"></span>
          <div className="py-3 w-full flex flex-col justify-start items-center"></div>
          <span className="h-[1px] w-full bg-primary-350"></span>
          <div className="py-3 w-full flex flex-col justify-start items-center"></div>
          <span className="h-[1px] w-full bg-primary-350"></span>
          <div className="py-3"></div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
