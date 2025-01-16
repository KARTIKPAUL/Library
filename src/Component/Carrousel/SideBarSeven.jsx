import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SideBarSeven() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    { id: 1, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy5pH8mMYfEfCW-Vu7MP8SpqR1UpK7vU2TA&s", title: "Card 1", description: "This is the first card." },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy5pH8mMYfEfCW-Vu7MP8SpqR1UpK7vU2TA&s", title: "Card 2", description: "This is the second card." },
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg pb-8">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-4 py-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl">
            <img
              src={slide.src}
              alt={`Slide ${slide.id}`}
              className="w-full h-56 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">{slide.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SideBarSeven;
