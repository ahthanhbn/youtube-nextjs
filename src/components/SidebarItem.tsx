import React from "react";

function SidebarItem() {
  return <></>;
}

export function HomeIcon() {
  return (
    <>
      <button className="w-full py-2 pl-6 pr-2 flex justify-center gap-6 items-center  bg-primary-350 hover:bg-primary-350">
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M0 7V18H6V12H10V18H16V7L8 0L0 7Z"
              fill="white"
            />
          </g>
        </svg>

        <p className="w-36 text-left py-1 tex t-sm font-normal text-primary-0">
          Home
        </p>
      </button>
    </>
  );
}

export function ExploreIcon() {
  return (
    <>
      <button className="w-full py-2 pl-6 pr-2 flex justify-center items-center gap-6 hover:bg-primary-350">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M7.8 7.8L3.97 16.03L12.2 12.2L16.03 3.97L7.8 7.8ZM11.08 10.77C10.87 11.06 10.57 11.25 10.22 11.31C10.15 11.32 10.07 11.33 10 11.33C9.72 11.33 9.46 11.25 9.23 11.08C8.94 10.87 8.75 10.57 8.69 10.22C8.63 9.87 8.71 9.51 8.92 9.23C9.13 8.94 9.43 8.75 9.78 8.69C10.13 8.63 10.48 8.71 10.77 8.92C11.06 9.13 11.25 9.43 11.31 9.78C11.37 10.13 11.29 10.48 11.08 10.77ZM10 1C14.96 1 19 5.04 19 10C19 14.96 14.96 19 10 19C5.04 19 1 14.96 1 10C1 5.04 5.04 1 10 1ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0Z"
              fill="white"
            />
          </g>
        </svg>
        <p className="w-36 text-left py-1 tex t-sm font-normal text-primary-0">
          Explore
        </p>
      </button>
    </>
  );
}
export function SubscriptionsIcon() {
  return (
    <>
      <button className="w-full py-2 pl-6 pr-2 flex justify-center items-center gap-6 hover:bg-primary-350">
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M8 15V9L13 12L8 15ZM15 0H5V1H15V0ZM18 3H2V4H18V3ZM20 6H0V18H20V6ZM1 7H19V17H1V7Z"
              fill="white"
            />
          </g>
        </svg>

        <p className="w-36 text-left py-1 tex t-sm font-normal text-primary-0">
          Subscriptions
        </p>
      </button>
    </>
  );
}
export function LibraryIcon() {
  return (
    <>
      <button className="w-full py-2 pl-6 pr-2 flex justify-center items-center gap-6 hover:bg-primary-350">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M8 4L14 7.5L8 11V4ZM15 17H1V3H0V18H15V17ZM18 15H3V0H18V15ZM4 14H17V1H4V14Z"
              fill="white"
            />
          </g>
        </svg>
        <p className="w-36 text-left py-1 tex t-sm font-normal text-primary-0">
          Library
        </p>
      </button>
    </>
  );
}
export function HistoryIcon() {
  return (
    <>
      <button className="w-full py-2 pl-6 pr-2 flex justify-center items-center gap-6 hover:bg-primary-350">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M13.97 14.95L8.99996 11.87V5H11V10.76L15.03 13.25L13.97 14.95ZM21 10C21 15.51 16.51 20 11 20C5.48996 20 0.999961 15.51 0.999961 10H1.99996C1.99996 14.96 6.03996 19 11 19C15.96 19 20 14.96 20 10C20 5.04 15.96 1 11 1C7.80996 1 4.91996 2.64 3.27996 5.38C3.16996 5.56 3.05996 5.75 2.96996 5.94C2.95996 5.96 2.94996 5.98 2.93996 6H6.99996V7H0.959961V1H1.95996V5.74C1.99996 5.65 2.02996 5.57 2.06996 5.49C2.17996 5.27 2.29996 5.07 2.41996 4.86C4.21996 1.86 7.50996 0 11 0C16.51 0 21 4.49 21 10Z"
              fill="white"
            />
          </g>
        </svg>

        <p className="w-36 text-left py-1 tex t-sm font-normal text-primary-0">
          History
        </p>
      </button>
    </>
  );
}
export function YourVideosIcon() {
  return (
    <>
      <button className="w-full py-2 pl-6 pr-2 flex justify-center items-center gap-6 hover:bg-primary-350">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M7 5L13 9L7 13V5ZM18 0V18H0V0H18ZM17 1H1V17H17V1Z"
              fill="white"
            />
          </g>
        </svg>

        <p className="w-36 text-left py-1 tex t-sm font-normal text-primary-0">
          Your Videos
        </p>
      </button>
    </>
  );
}
export function WatchLateIcon() {
  return (
    <>
      <button className="w-full py-2 pl-6 pr-2 flex justify-center items-center gap-6 hover:bg-primary-350">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M12.97 14.95L8 11.87V5H10V10.76L14.03 13.25L12.97 14.95ZM10 1C5.04 1 1 5.04 1 10C1 14.96 5.04 19 10 19C14.96 19 19 14.96 19 10C19 5.04 14.96 1 10 1ZM10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0Z"
              fill="white"
            />
          </g>
        </svg>

        <p className="w-36 text-left py-1 tex t-sm font-normal text-primary-0">
          Watch Late
        </p>
      </button>
    </>
  );
}

export function LikedVideosIcon() {
  return (
    <>
      <button className="w-full py-2 pl-6 pr-2 flex justify-center items-center gap-6 hover:bg-primary-350">
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M15.77 7H11.54L13.06 2.06C13.38 1.03 12.54 0 11.38 0C10.8 0 10.24 0.24 9.86 0.65L4 7H0V17H4H5H14.43C15.49 17 16.41 16.33 16.62 15.39L17.96 9.39C18.23 8.15 17.18 7 15.77 7ZM4 16H1V8H4V16ZM16.98 9.17L15.64 15.17C15.54 15.65 15.03 16 14.43 16H5V7.39L10.6 1.33C10.79 1.12 11.08 1 11.38 1C11.64 1 11.88 1.11 12.01 1.3C12.08 1.4 12.16 1.56 12.1 1.77L10.58 6.71L10.18 8H11.53H15.76C16.17 8 16.56 8.17 16.79 8.46C16.92 8.61 17.05 8.86 16.98 9.17Z"
              fill="white"
            />
          </g>
        </svg>
        <p className="w-36 text-left py-1 tex t-sm font-normal text-primary-0">
          Liked Videos
        </p>
      </button>
    </>
  );
}
export function YoutubePremiumIcon() {
  return (
    <>
      <button className="w-full py-2 pl-6 pr-2 flex justify-center items-center gap-6 hover:bg-primary-350">
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M8.00003 4.35L13 7L8.00003 9.65V4.35ZM10 1C7.47427 0.950847 4.94814 1.07782 2.44003 1.38C2.18725 1.4509 1.95696 1.58564 1.77132 1.77129C1.58568 1.95693 1.45093 2.18722 1.38003 2.44C1.11214 3.94492 0.984927 5.4715 1.00003 7C0.984927 8.5285 1.11214 10.0551 1.38003 11.56C1.45093 11.8128 1.58568 12.0431 1.77132 12.2287C1.95696 12.4144 2.18725 12.5491 2.44003 12.62C4.94814 12.9222 7.47427 13.0492 10 13C12.5258 13.0492 15.0519 12.9222 17.56 12.62C17.8128 12.5491 18.0431 12.4144 18.2287 12.2287C18.4144 12.0431 18.5491 11.8128 18.62 11.56C18.8879 10.0551 19.0151 8.5285 19 7C19.0151 5.4715 18.8879 3.94492 18.62 2.44C18.5491 2.18722 18.4144 1.95693 18.2287 1.77129C18.0431 1.58564 17.8128 1.4509 17.56 1.38C15.0519 1.07782 12.5258 0.950847 10 1ZM10 0C10 0 16.25 8.9407e-08 17.81 0.42C18.2341 0.534356 18.6208 0.758008 18.9314 1.06861C19.242 1.37921 19.4657 1.76589 19.58 2.19C19.8697 3.77673 20.0103 5.38708 20 7C20.0103 8.61292 19.8697 10.2233 19.58 11.81C19.4657 12.2341 19.242 12.6208 18.9314 12.9314C18.6208 13.242 18.2341 13.4656 17.81 13.58C16.25 14 10 14 10 14C10 14 3.75003 14 2.19003 13.58C1.76592 13.4656 1.37925 13.242 1.06865 12.9314C0.758043 12.6208 0.53439 12.2341 0.420035 11.81C0.130393 10.2233 -0.0102195 8.61292 3.44984e-05 7C-0.0102195 5.38708 0.130393 3.77673 0.420035 2.19C0.53439 1.76589 0.758043 1.37921 1.06865 1.06861C1.37925 0.758008 1.76592 0.534356 2.19003 0.42C3.75003 8.9407e-08 10 0 10 0Z"
              fill="white"
            />
          </g>
        </svg>
        <p className="w-36 text-left py-1 tex t-sm font-normal text-primary-0 ">
          Youtube Premium
        </p>
      </button>
    </>
  );
}
export function GamingIcon() {
  return (
    <>
      <button className="w-full py-2 pl-6 pr-2 flex justify-center items-center gap-6 hover:bg-primary-350">
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M8 8H6V10H4V8H2V6H4V4H6V6H8V8ZM15 8.5C15 7.67 14.33 7 13.5 7C12.67 7 12 7.67 12 8.5C12 9.33 12.67 10 13.5 10C14.33 10 15 9.33 15 8.5ZM18 5.5C18 4.67 17.33 4 16.5 4C15.67 4 15 4.67 15 5.5C15 6.33 15.67 7 16.5 7C17.33 7 18 6.33 18 5.5ZM14.97 1.15L10.47 3.68L9.98 3.95L9.49 3.68L4.99 1.15L1 3.39V9.82L9.98 14.86L18.96 9.82V3.39L14.97 1.15ZM14.97 0L19.96 2.8V10.4L9.98 16L0 10.4V2.8L4.99 0L9.98 2.8L14.97 0Z"
              fill="white"
            />
          </g>
        </svg>
        <p className="w-36 text-left py-1 tex t-sm font-normal text-primary-0">
          Gaming
        </p>
      </button>
    </>
  );
}
export function LiveIcon() {
  return (
    <>
      <button className="w-full py-2 pl-6 pr-2 flex justify-center items-center gap-6 hover:bg-primary-350">
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M12 7.99998C12 9.09998 11.1 9.99998 10 9.99998C8.9 9.99998 8 9.09998 8 7.99998C8 6.89998 8.9 5.99998 10 5.99998C11.1 5.99998 12 6.89998 12 7.99998ZM6.48 4.44998L5.77 3.74998C4.68 4.82998 4 6.33998 4 7.99998C4 9.65998 4.68 11.17 5.77 12.25L6.48 11.54C5.57 10.64 5 9.38998 5 7.99998C5 6.60998 5.57 5.35998 6.48 4.44998ZM14.23 3.74998L13.52 4.45998C14.43 5.35998 15 6.60998 15 7.99998C15 9.38998 14.43 10.64 13.52 11.55L14.23 12.26C15.32 11.17 16 9.65998 16 7.99998C16 6.33998 15.32 4.82998 14.23 3.74998ZM3.65 1.62998L2.95 0.919983C1.13 2.72998 0 5.23998 0 7.99998C0 10.76 1.13 13.27 2.95 15.08L3.66 14.37C2.02 12.74 1 10.49 1 7.99998C1 5.50998 2.02 3.25998 3.65 1.62998ZM17.05 0.919983L16.34 1.62998C17.98 3.25998 19 5.50998 19 7.99998C19 10.49 17.98 12.74 16.35 14.37L17.06 15.08C18.87 13.27 20 10.76 20 7.99998C20 5.23998 18.87 2.72998 17.05 0.919983Z"
              fill="white"
            />
          </g>
        </svg>
        <p className="w-36 text-left py-1 tex t-sm font-normal text-primary-0">
          Live
        </p>
      </button>
    </>
  );
}
export function SportIcon() {
  return (
    <>
      <button className="w-full py-2 pl-6 pr-2 flex justify-center items-center gap-6 hover:bg-primary-350">
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M13 1V3V4V8V8.51L12.99 8.97C12.94 11.1 11.66 12.94 9.74 13.67H9.72L9.66 13.69L9 13.95V14.65V17V18H10V19H11H6V18H7V17V14.65V13.95L6.34 13.71L6.26 13.68H6.25C4.33 12.95 3.05 11.11 3 8.98V8.51V8V4V3V1H13ZM14 0H2V3H0V4V8V9H2.01C2.07 11.53 3.63 13.78 5.97 14.64C5.98 14.64 5.99 14.64 6 14.65V17H5V18H4V20H12V18H11V17H10V14.65C10.01 14.65 10.02 14.65 10.03 14.64C12.36 13.78 13.93 11.54 13.99 9H16V8V4V3H14V0ZM14 8V4H15V8H14ZM1 8V4H2V8H1Z"
              fill="white"
            />
          </g>
        </svg>

        <p className="w-36 text-left py-1 tex t-sm font-normal text-primary-0">
          Sport
        </p>
      </button>
    </>
  );
}
export function SettingIcon() {
  return (
    <>
      <button className="w-full py-2 pl-6 pr-2 flex justify-center items-center gap-6 hover:bg-primary-350">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M9.99997 7C11.65 7 13 8.35 13 10C13 11.65 11.65 13 9.99997 13C8.34997 13 6.99997 11.65 6.99997 10C6.99997 8.35 8.34997 7 9.99997 7ZM9.99997 6C7.78997 6 5.99997 7.79 5.99997 10C5.99997 12.21 7.78997 14 9.99997 14C12.21 14 14 12.21 14 10C14 7.79 12.21 6 9.99997 6ZM11.22 1L11.77 3.2L11.9 3.71L12.4 3.89C13.01 4.12 13.59 4.45 14.12 4.87L14.52 5.19L15.02 5.05L17.19 4.43L18.41 6.54L16.78 8.13L16.41 8.49L16.49 9C16.54 9.32 16.57 9.64 16.57 9.98C16.57 10.32 16.54 10.64 16.49 10.96L16.41 11.47L16.78 11.83L18.41 13.42L17.19 15.53L15.02 14.91L14.52 14.77L14.12 15.09C13.59 15.52 13.01 15.85 12.4 16.07L11.9 16.25L11.77 16.76L11.22 19H8.77997L8.22997 16.8L8.09997 16.29L7.59997 16.11C6.99997 15.88 6.41997 15.55 5.87997 15.12L5.47997 14.8L4.97997 14.94L2.80997 15.56L1.59997 13.44L3.22997 11.85L3.59997 11.49L3.51997 10.98C3.46997 10.66 3.43997 10.33 3.43997 10C3.43997 9.67 3.46997 9.34 3.51997 9.02L3.59997 8.51L3.22997 8.15L1.59997 6.56L2.81997 4.45L4.98997 5.07L5.48997 5.21L5.88997 4.89C6.41997 4.45 6.99997 4.12 7.60997 3.9L8.10997 3.72L8.23997 3.21L8.77997 1H11.22ZM12 0H7.99997L7.25997 2.96C6.52997 3.23 5.85997 3.62 5.25997 4.1L2.33997 3.27L0.339966 6.73L2.52997 8.86C2.46997 9.23 2.43997 9.61 2.43997 10C2.43997 10.39 2.46997 10.77 2.52997 11.14L0.339966 13.27L2.33997 16.73L5.25997 15.9C5.85997 16.38 6.52997 16.77 7.25997 17.04L7.99997 20H12L12.74 17.04C13.47 16.77 14.14 16.38 14.74 15.9L17.66 16.73L19.66 13.27L17.47 11.14C17.53 10.77 17.56 10.39 17.56 10C17.56 9.61 17.53 9.23 17.47 8.86L19.66 6.73L17.66 3.27L14.74 4.1C14.14 3.62 13.47 3.23 12.74 2.96L12 0Z"
              fill="white"
            />
          </g>
        </svg>

        <p className="w-36 text-left py-1 tex t-sm font-normal text-primary-0">
          Setting
        </p>
      </button>
    </>
  );
}
export function ReportHistoryIcon() {
  return (
    <>
      <button className="w-full py-2 pl-6 pr-2 flex justify-center items-center gap-6 hover:bg-primary-350">
        <svg
          width="15"
          height="18"
          viewBox="0 0 15 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M8.18 1L8.42 2.2L8.58 3H9.4H14V10H8.82L8.58 8.8L8.42 8H7.6H1V1H8.18ZM9 0H0V18H1V9H7.6L8 11H15V2H9.4L9 0Z"
              fill="white"
            />
          </g>
        </svg>

        <p className="w-36 text-left py-1 tex t-sm font-normal text-primary-0">
          Report History
        </p>
      </button>
    </>
  );
}
export function HelpIcon() {
  return (
    <>
      <button className="w-full py-2 pl-6 pr-2 flex justify-center items-center gap-6 hover:bg-primary-350">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M13.36 7.96C13.36 9.05 12.69 9.63 12.05 10.2C11.52 10.67 11.02 11.1 10.89 11.8L10.85 12H9.1L9.13 11.72C9.27 10.55 9.93 9.96 10.6 9.45C11.12 9.05 11.61 8.68 11.61 7.96C11.61 7.45 11.38 6.99 10.98 6.67C10.58 6.36 10.06 6.25 9.56 6.38C8.97 6.53 8.51 7.05 8.37 7.72L8.32 8H6.57L6.63 7.58C6.83 6.18 7.78 5.05 9.05 4.71C10.1 4.42 11.19 4.63 12.03 5.28C12.88 5.92 13.36 6.9 13.36 7.96ZM10 16C10.55 16 11 15.55 11 15C11 14.45 10.55 14 10 14C9.45 14 9 14.45 9 15C9 15.55 9.45 16 10 16ZM10 1C5.04 1 1 5.04 1 10C1 14.96 5.04 19 10 19C14.96 19 19 14.96 19 10C19 5.04 14.96 1 10 1ZM10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0Z"
              fill="white"
            />
          </g>
        </svg>

        <p className="w-36 text-left py-1 tex t-sm font-normal text-primary-0">
          Help
        </p>
      </button>
    </>
  );
}
export function SendFeedbackIcon() {
  return (
    <>
      <button className="w-full py-2 pl-6 pr-2 flex justify-center items-center gap-6 hover:bg-primary-350">
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group">
            <path
              id="Vector"
              d="M9 12H7V10H9V12ZM9 3H7V9H9V3ZM15 1H1V17.59L4.29 14.3L4.59 14H5H15V1ZM16 0V15H5L0 20V0H16Z"
              fill="white"
            />
          </g>
        </svg>
        <p className="w-36 text-left py-1 tex t-sm font-normal text-primary-0">
          Send Feedback
        </p>
      </button>
    </>
  );
}


export default SidebarItem;
