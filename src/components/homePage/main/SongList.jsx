
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import cover1 from "../../../assets/covers/cover1.jpg"
import cover2 from "../../../assets/covers/cover2.jpg"
import cover3 from "../../../assets/covers/cover3.jpg"
import cover4 from "../../../assets/covers/cover4.jpg"
const songs = [
  {
    id: 1,
    title: 'My Stress',
    artist: 'NF Real music',
    duration: '3:22',
    isFavorite: true,
    image:cover1, // Remplacez par l'URL de votre image
  },
  {
    id: 2,
    title: 'Mirage',
    artist: 'Else Twin',
    duration: '4:23',
    isFavorite: false,
    image:cover2,
  },
  {
    id: 3,
    title: 'My Stress',
    artist: 'NF Real music',
    duration: '3:58',
    isFavorite: false,
    image: cover3,
  },
  {
    id: 4,
    title: 'The Hills',
    artist: 'The Weeknd',
    duration: '5:33',
    isFavorite: false,
    image: cover4,
  },
  {
    id: 5,
    title: 'Paralyzed',
    artist: 'NF Real music',
    duration: '5:08',
    isFavorite: true,
    image: cover4,
  },
  {
    id: 6,
    title: 'Timeless',
    artist: 'Lucidious',
    duration: '3:50',
    isFavorite: false,
    image: cover2,
  },
];

const SongList = () => {
  return (
    <div className=" w-full  p-4   rounded-lg">
      <h2 className="text-xl text-blue-950 font-semibold mb-2">Most Popular</h2>
      <p className="text-sm text-blue-900 mb-4">92 Songs</p>
      <ul className=' rounded-lg '>
        {songs.map((song) => (
          <li
            key={song.id}
            className="flex items-center justify-between px-2 my-2 py-2 border-b rounded-md shadow-md bg-white border-gray-200"
          >
            <div className="flex items-center">
              <img
                src={song.image}
                alt={song.title}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="text-md font-medium">{song.title}</h3>
                <p className="text-sm text-gray-500">{song.artist}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-4">{song.duration}</span>
              {song.isFavorite ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-gray-400" />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
