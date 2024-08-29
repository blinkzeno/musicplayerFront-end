import CarouselBillboard from "./CarouselBillboard";
import SongList from "./SongList";
import SongPlayer from "./SongPlayer";


const Main = () => {
  return (
   <div className="flex flex-col w-auto px-1 py-3 h-full">
   {/* Billboard Topchart */}
   <CarouselBillboard />
    <div className=" flex w-full  h-auto gap-4 px-3 mt-2">
      <SongList />
      <SongPlayer />
    </div>
   {/* Autres sections ici */}
 </div>
  );
};

export default Main;
