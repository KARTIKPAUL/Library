import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SideBarOne() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    { id: 1, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy5pH8mMYfEfCW-Vu7MP8SpqR1UpK7vU2TA&s" },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy5pH8mMYfEfCW-Vu7MP8SpqR1UpK7vU2TA&s" },
    { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy5pH8mMYfEfCW-Vu7MP8SpqR1UpK7vU2TA&s" },
    { id: 4, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy5pH8mMYfEfCW-Vu7MP8SpqR1UpK7vU2TA&s" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg pb-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Image Slider</h2>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-2">
            <img
              src={slide.src}
              alt={`Slide ${slide.id}`}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SideBarOne;
