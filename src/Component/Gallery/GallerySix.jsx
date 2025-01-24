import React from "react";

const GallerySix = () => {

  const features = [
    {
      img: "http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Icons/bluetooth.png",
      title: "Connections",
      desc: "Bluetooth v6.2",
    },
    {
      img: "http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Icons/battery.png",
      title: "Battery",
      desc: "Duration 40h",
    },
    {
      img: "http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Icons/charger.png",
      title: "Load",
      desc: "Fast Charge 4.2-AAC",
    },
    {
      img: "http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Icons/mic.png",
      title: "Microphone",
      desc: "Support Siri & Google",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Black",
      price: "N299k",
      image: "http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Photos/black.png",
    },
    {
      id: 2,
      name: "Red-Black",
      price: "N299k",
      image: "http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Photos/redBlack.png",
    },
    {
      id: 3,
      name: "Night-Black",
      price: "N299k",
      image: "http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Photos/nightBlack.png",
    },
    {
      id: 4,
      name: "Blue",
      price: "N299k",
      image: "http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Photos/blue.png",
    },
    // {
    //   id: 5,
    //   name: "Twilight-Gray",
    //   price: "N299k",
    //   image: "./assets/twilightGray.png",
    // },
  ];

  return (
    <div className="bg-black pb-10">
      <header className="flex bg-black flex-col md:flex-row justify-center">
        <div>
          <img
            src="http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Photos/mainImage.png"
            alt="Main"
          />
        </div>
        <div className="flex flex-col justify-center ml-10 gap-5">
          <img
            src="http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Photos/onEar.png"
            alt="On Ear"
          />
          <h1 className="text-white text-4xl font-bold">Beats 3</h1>
          <p className="text-xl text-white font-semibold">Overview</p>
          <p className="text-white">
            Enjoy award-winning Beats sound with wireless listening freedom and
            a sleek, streamlined design with comfortable padded earphones.
          </p>
          <div className="border w-fit text-white px-5 py-2 rounded bg-slate-800 cursor-pointer hover:bg-green-400 hover:text-black font-semibold">
            <div className="flex gap-2">
              <img
                src="http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Icons/shoppingBag.png"
                alt="Shopping Bag"
              />
              <p>Add To Bag &nbsp;N399K</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex justify-center items-center">
        <img
          src="http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Icons/specsLogo.png"
          alt="spaces"
        />
      </div>
      <div className="flex flex-col md:flex-row my-10 gap-5 justify-evenly items-center bg-black">
        <div className="flex flex-col gap-5">
          {features.map((feature, index) => (
            <div key={index}>
              <img src={feature.img} alt={feature.title} />
              <p className="text-white font-semibold text-3xl">
                {feature.title}
              </p>
              <p className="text-white font-semibold text-xl">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div>
          <img
            src="http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Photos/specsImage.png"
            alt="Specifications"
          />
        </div>
      </div>

      <div className="mt-10">
        {/* Case Logo */}
        <img
          src="http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Icons/caseLogo.png"
          alt="Case Logo"
          className="mx-auto mt-10"
        />

        {/* Content Section */}
        <div className="flex flex-col md:flex-row my-10 gap-5 justify-evenly items-center">
          {/* Case Image */}
          <img
            src="http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Photos/caseImage.png"
            alt="Case"
          />

          {/* Case Description */}
          <div className="flex flex-col gap-5 items-center justify-center">
            <p className="text-white font-semibold text-xl mr-2 px-5">
              With a comfortable and adaptable case so that you can store it{" "}
              <br />
              whenever you want, and keep your durability forever.
            </p>
            {/* Button */}
            <div className="border w-fit text-white px-5 py-2 rounded bg-slate-800 cursor-pointer hover:bg-green-400 hover:text-black font-semibold">
              <div className="flex gap-2">
                <img
                  src="http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Icons/group.png"
                  alt="More Info Icon"
                />
                <p>More Info</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 flex-col md:flex-row flex-wrap">
        {products.map((product) => (
          <div
            key={product.id}
            className="border bg-slate-600 px-5 py-2 rounded-lg flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover"
            />
            <div className="flex justify-between w-full mt-3">
              <div>
                <p className="text-black font-bold text-xl">{product.name}</p>
                <p className="text-black font-semibold">{product.price}</p>
              </div>
              <img
                src="http://127.0.0.1:5501/MediaQueryMegaProject/Project1/Icons/shoppingBag.png"
                alt="Shopping Bag"
                className="w-6 h-6 text-black"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySix;
