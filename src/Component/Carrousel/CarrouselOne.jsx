import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function CarrouselOne() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    { id: 1, src: "https://media.istockphoto.com/id/1307675090/photo/fraud-alert-concept-with-security-lock-on-fake-credit-cards.jpg?b=1&s=612x612&w=0&k=20&c=xgKEEhpPdvl1gydejZMUJr0D2qhH2DqFrtOKly_Jj7E=" },
    { id: 2, src: "https://media.istockphoto.com/id/1276936276/photo/creative-background-online-casino-in-a-mans-hand-a-smartphone-with-playing-cards-roulette-and.jpg?b=1&s=612x612&w=0&k=20&c=OEPudhE6fAJQQYEAzNlV8QCyVo0DTA5jLMJGdEp6uYA=" },
    { id: 3, src: "https://media.istockphoto.com/id/1798633416/photo/senior-man-with-smartphone-and-credit-card-at-home-fraud-prevention-concept.jpg?b=1&s=612x612&w=0&k=20&c=HTlTNG5wBwO21BICVlQ7G9cxEVsdGm8IDp95HrFzW1A=" },
    { id: 4, src: "https://media.istockphoto.com/id/926382468/photo/global-satellite-internet-service-concept-3d-rendering.jpg?b=1&s=612x612&w=0&k=20&c=J1KRSdkcHXrzyB9Pl61RSZ5Iht8BW9ZthhadKGOFAG4=" },
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

export default CarrouselOne;
