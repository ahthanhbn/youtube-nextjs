import '../app/globals.css';

import { getAllSuggestVideos } from '@/api/data';
import Card from '@/components/Cards';
import TopMenu from '@/components/TopMenu';

export default function Home() {

  return (
    <>
      <div className="">
        {/* <TopMenu/> */}
        <Card/>
      </div>
    </>
  );
}
