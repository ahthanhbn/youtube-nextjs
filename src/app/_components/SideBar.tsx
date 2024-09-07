"use client";
import Link from "next/link";
import "../globals.css";
import Channel from "./Channel";
import {
  ExploreIcon,
  GamingIcon,
  HelpIcon,
  HistoryIcon,
  HomeIcon,
  LibraryIcon,
  LikedVideosIcon,
  LiveIcon,
  ReportHistoryIcon,
  SendFeedbackIcon,
  SettingIcon,
  SportIcon,
  SubscriptionsIcon,
  WatchLateIcon,
  YourVideosIcon,
  YoutubePremiumIcon,
} from "./SidebarItem";

function SideBar() {
  return (
    <>
      <div className="custom-scroll h-[calc(100% -56px)] z-10 bg-primary-700 overflow-hidden overflow-y-scroll">
        <div className=" w-full pb-[46px] z-[9]  bg-primary-700 ">
          <div className="py-3 w-full flex flex-col justify-start items-center">
            <HomeIcon />
            <ExploreIcon />
            <SubscriptionsIcon />
          </div>
          <span className="h-[1px] w-full bg-primary-350"></span>
          <div className="py-3 w-full flex flex-col justify-start items-center">
            <LibraryIcon />
            <HistoryIcon />
            <YourVideosIcon />
            <WatchLateIcon />
            <LikedVideosIcon />
          </div>
          <span className="h-[1px] w-full bg-primary-350"></span>
          <div className="py-3 w-full flex flex-col justify-start items-start">
            <h1 className="px-6 py-2 text-primary-250 text-sm font-bold uppercase">
              Subscriptions
            </h1>
            <Channel />
          </div>
          <span className="h-[1px] w-full bg-primary-350"></span>
          <div className="py-3 w-full flex flex-col justify-start items-start">
            <h1 className="px-6 py-2 text-primary-250 text-sm font-bold uppercase">
              More from youtube
            </h1>
            <YoutubePremiumIcon />
            <GamingIcon />
            <LiveIcon />
            <SportIcon />
          </div>
          <span className="h-[1px] w-full bg-primary-350"></span>
          <div className="py-3 w-full flex flex-col justify-start items-start">
            <SettingIcon />
            <ReportHistoryIcon />
            <HelpIcon />
            <SendFeedbackIcon />
          </div>
          <span className="h-[1px] w-full bg-primary-350"></span>
          <div className="py-3 w-full flex flex-col justify-start items-start">
            <div className="w-full px-6 pt-4">
              <div className="flex justify-start items-center gap-2">
                <Link className="text-[13px] font-bold text-primary-250" href="">
                  About
                </Link>
                <Link className="text-[13px] font-bold text-primary-250" href="">
                  Press
                </Link>
                <Link className="text-[13px] font-bold text-primary-250" href="">
                  Copyright
                </Link>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Link className="text-[13px] font-bold text-primary-250" href="">
                  Contact us
                </Link>
                <Link className="text-[13px] font-bold text-primary-250" href="">
                  Creator
                </Link>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Link className="text-[13px] font-bold text-primary-250" href="">
                  Advertise
                </Link>
                <Link className="text-[13px] font-bold text-primary-250" href="">
                  Developers
                </Link>
              </div>
            </div>
            <div className="w-full px-6 pt-3">
              <div className="flex justify-start items-center gap-2">
                <Link className="text-[13px] font-bold text-primary-250" href="">
                  Term
                </Link>
                <Link className="text-[13px] font-bold text-primary-250" href="">
                  Privacy
                </Link>
                <Link className="text-[13px] font-bold text-primary-250" href="">
                  Policy & Safety
                </Link>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Link className="text-[13px] font-bold text-primary-250" href="">
                  How Youtube Works
                </Link>
              </div>
              <div className="flex justify-start items-center gap-2 ">
                <Link className="text-[13px] font-bold text-primary-250" href="">
                  Test new features
                </Link>
              </div>
            </div>
            <p className="w-full px-6 py-4 text-xs font-bold text-primary-250">© 2021 Google LLC</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
