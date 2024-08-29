import cover4 from "../../../assets/covers/cover4.jpg";
import { FaPlay, FaPause, FaBackward, FaForward } from "react-icons/fa";

const SongPlayer = () => {
  const isPlaying = true; // Changez en fonction de l'état de lecture

  return (
    <div className="  p-6  w-2/5  rounded-lg ">
      <h2 className="text-xl text-blue-950 font-semibold mb-2">Now Playing</h2>
      <p className="text-sm text-blue-900 mb-4">56 Items on the list</p>

     <div className="bg-slate-200 p-4 rounded-lg h-auto shadow-md">
     <div className="flex justify-center mb-4 w-full">
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-md">
          <img
            src={cover4} // Remplacez par l'URL de votre image
            alt="Album cover"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <h3 className="text-lg font-medium">Chance The Rapper</h3>
      <p className="text-sm text-gray-500 mb-4">Pop King</p>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
        <span>2:10</span>
        <div className="flex-1 mx-4">
          <input
            type="range"
            min="0"
            max="100"
            value="50" // Définissez la valeur en fonction de la progression
            className="w-full h-1 bg-blue-500 rounded-full"
          />
        </div>
        <span>-03:56</span>
      </div>

      <div className="flex justify-center items-center mt-4">
        <button className="text-gray-500 mx-4">
          <FaBackward size={24} />
        </button>
        <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg">
          {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
        </button>
        <button className="text-gray-500 mx-4">
          <FaForward size={24} />
        </button>
      </div>
     </div>
   
    </div>
  );
};

export default SongPlayer;
