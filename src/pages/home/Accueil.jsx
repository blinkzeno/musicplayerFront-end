import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Header from "../../components/homePage/main/header/Header";
import Main from "../../components/homePage/main/Main";
import SlideBar from "../../components/homePage/slideBar/SlideBar";

const Accueil = () => {
  return (
    <div className=" bg-slate-50 w-full h-full flex  ">
      <SlideBar />
      <div className="flex flex-col w-4/5">
        <Header />
        <Main />
      </div>
    </div>
    
  );
};

export default Accueil;
