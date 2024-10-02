import { Button } from '@/components/ui/button'

export default function Interact() {
  return <div>Interact</div>
}

const handleChangeLikeCount = (num: any) => {
  if (num < 1000) {
    return num
  } else if (num > 1000 && num < 1000000) {
    let thousand = `${Math.round(num / 100) / 10}K`
    return thousand
  } else if (num > 1000000) {
    let million = `${Math.round(num / 100000) / 10}M`
    return million
  }
}
export function ButtonLike({ likes }: any) {
  return (
    <div className="flex items-center">
      <Button className="bg-dark-800 h-9 p-1.5">
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
      </Button>
      <p className="text-white text-sm font-bold uppercase">
        {handleChangeLikeCount(likes?.statistics.likeCount)}
      </p>
    </div>
  )
}

export function ButtonDislike({ dislikes }: any) {
  // console.log(likes);
  return (
    <div className="flex items-center">
      <Button className="bg-dark-800 h-9 p-1.5">
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
              d="M13.9999 0H12.9999H3.56995C2.49995 0 1.58995 0.67 1.37995 1.61L0.0399459 7.61C-0.230054 8.85 0.819946 10 2.22995 10H6.45995L4.93995 14.94C4.61995 15.97 5.45995 17 6.61995 17C7.19995 17 7.75995 16.76 8.13995 16.35L13.9999 10H17.9999V0H13.9999ZM7.39995 15.67C7.20995 15.88 6.91995 16 6.61995 16C6.35995 16 6.11995 15.89 5.98995 15.7C5.91995 15.6 5.83995 15.44 5.89995 15.23L7.41995 10.29L7.81995 9H6.45995H2.22995C1.81995 9 1.42995 8.83 1.19995 8.54C1.07995 8.39 0.949946 8.14 1.01995 7.82L2.35995 1.82C2.45995 1.35 2.96995 1 3.56995 1H12.9999V9.61L7.39995 15.67ZM16.9999 9H13.9999V1H16.9999V9Z"
              fill="white"
            />
          </g>
        </svg>
      </Button>
      <p className="text-white text-sm font-bold uppercase">
        {handleChangeLikeCount(dislikes?.statistics.likeCount)}
      </p>
    </div>
  )
}