import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineNotificationsNone } from "react-icons/md";


const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for song, artists etc..."
          className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none"
        />
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl" />
      </div>
      <div className="flex items-center gap-3 ">
          <button className="relative">
            <MdOutlineNotificationsNone className="text-2xl text-gray-600 hover:text-blue-500" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-sm rounded-full h-4 w-4 flex items-center justify-center">
              5
            </span>
          </button>
      <IoSettingsOutline className="text-2xl  text-gray-600 hover:text-blue-500" />
        <button className="mr-4 text-sm bg-rose-500 p-2 rounded-md  text-gray-200">Upgrade Plan</button>
      </div>
    </header>
  );
};

export default Header;
