import AdCard from "./components/AdCard";
import MusicCard from "./components/MusicCard";
import Navbar from "./components/Navbar";
import Playlist from "./components/Playlist";
import TopArtist from "./components/TopArtist";

export default function Home() {
  return (
    <section className="ml-[290px] p-5 bg-white rounded-2xl">

      <Navbar />

      <section className=" flex gap-8">
        <div className="flex flex-col ">
          <div className="w-[720px]  ">
            <AdCard />
            <div className="my-4 ">
              <div className="flex justify-between items-center ">
                <p className="text-2xl font-bold tracking-wide">Playlist</p>
                <p className="  text-zinc-500">See More</p>
              </div>
            </div>
              <Playlist />
          </div>
        </div>

        <div className="w-[100%]">
          <div className=" ">
            <div className="flex justify-between items-center ">
              <p className="text-2xl font-bold tracking-wide">Playlist</p>
              
            </div>
          </div>
          <TopArtist />
          <TopArtist />
          <TopArtist />
          <p className=" mt-4 text-zinc-500">See More</p>
          <MusicCard/>
        </div>

      </section>
    </section>
  )
}
