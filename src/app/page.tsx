import Image from "next/image";
import SideBar from "./_components/SideBar";
import "../app/globals.css"
import TopMenu from "./_components/TopMenu";

export default function Home() {
  return (
    <>
    <div className=" box-border flex flex-col justify-start item-end relative ">
      <TopMenu/>
    </div>
      </>
  );
}
