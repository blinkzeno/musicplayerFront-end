import { FaRegFileAlt, FaRegUser } from "react-icons/fa";
import profile from "../../../assets/covers/cover2.jpg"
import { MdAccessAlarms } from "react-icons/md";
import { CgAlbum } from "react-icons/cg";
import { RiMenuSearchLine } from "react-icons/ri";
import { LuHome } from "react-icons/lu";

/**
 * Renders the sidebar component for the home page.
 * The sidebar includes the user's profile information, navigation links, and additional sections for music playback.
 */
const Sidebar = () => {
  return (
    <div className="w-1/5 bg-gray-100 h-auto p-6 relative">
      <div className="flex flex-col items-center">
        <img src={profile} alt="Profile" className="w-32 h-32 object-cover rounded-full" />
        <h2 className="mt-4 text-lg font-semibold">Farzan Faruk</h2>
        <p className="text-sm text-gray-600">Luova.studio7@gmail.com</p>
      </div>
      <nav className="mt-10 pl-2">
        <ul className="font-semibold">
          <li className="mb-4 flex gap-4 p-2 item-center  "> 
            <a href="#home" className="  flex gap-4 p-2 item-center text-center hover:text-blue-500">
            <LuHome className=" text-xl "/>
              Home</a>
          </li>
          <li className="mb-4 flex gap-4 p-2 item-center  ">
            <a href="#browse" className=" flex gap-4 p-2 item-center text-blue-500">
          <RiMenuSearchLine className=" text-xl "/>
              Browse</a>
          </li>
          <li className="mb-4 flex gap-4 p-2 item-center  ">
            <a href="#album" className=" flex gap-4 p-2 item-center hover:text-blue-500">
          <CgAlbum className=" text-xl "/>
              Album</a>
          </li>
          <li className="mb-4 flex gap-4 p-2 item-center  ">
            <a href="#artists" className=" flex gap-4 p-2 item-center hover:text-blue-500">
          <FaRegUser className=" text-xl "/>
              Artists</a>
          </li>
       
        </ul >
        <div className="mt-10">
          <h3 className="text-gray-700 mb-4">My Music</h3>
          <ul className="font-semibold">
            <li className="mb-4 flex gap-4 p-2 item-center  ">
              <a href="#recently-played" className=" flex gap-4 p-2 item-center hover:text-blue-500">
              < MdAccessAlarms className=" text-xl "/>
                Recently</a>
            </li>
            <li className="mb-4 flex gap-4 p-2 item-center  ">
              <a href="#local-files" className=" flex gap-4 p-2 item-center hover:text-blue-500">
            <FaRegFileAlt className=" text-xl "/>
                Local Files</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mt-auto text-center absolute bottom-0 left-0 right-0 p-4">
        <a href="#creator" className="text-gray-600">@blinkzeno🫰🏾✅</a>
      </div>
    </div>
  );
};

export default Sidebar;
