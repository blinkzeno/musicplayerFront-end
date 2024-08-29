import Slider from 'react-slick';

import cover1 from "../../../assets/covers/cover1.jpg"
import cover2 from "../../../assets/covers/cover2.jpg"
import cover3 from "../../../assets/covers/cover3.jpg"
import cover4 from "../../../assets/covers/cover4.jpg"


const CarouselBillboard = () => {
  const albums = [
    { title: 'Coloring Book', artist: 'Pop King', image: cover1 },
    { title: 'Blue Neighbourhood', artist: 'Troye Sivan', image: cover2 },
    { title: 'Starboy', artist: 'The Weeknd', image: cover3 },
    { title: 'Starboy', artist: 'The Weeknd', image: cover3 },
    { title: 'Mirage', artist: 'Else Twin', image: cover4 },
    { title: 'Mirage', artist: 'Else Twin', image: cover4 }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="carousel-container px-4">
      <h2 className="text-2xl font-semibold mb-4">Billboard</h2>
      <Slider {...settings}  className="">
      {albums.map((album, index) => (
         
            <div key={index} className="flex flex-col items-center px-2 h-52  ">
              <div className="w-auto h-full max-w-xs mx-auto ">
                <img src={album.image} alt={album.title} className="w-full object-cover h-full rounded-xl shadow-md" />
              </div>
              <h3 className="mt-2 text-lg font-semibold text-center">{album.title}</h3>
              <p className="text-sm text-gray-600 text-center">{album.artist}</p>
            </div>
         
        ))}
      </Slider>
    </div>
  );
};

export default CarouselBillboard;
