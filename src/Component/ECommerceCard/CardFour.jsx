const CardFour = () => {
  return (
    <div className="flex p-6 bg-white shadow-lg rounded-lg w-full max-w-2xl mx-auto">
      {/* Image Section */}
      <div className="flex-none w-48 relative z-10 mb-4 rounded-lg overflow-hidden">
        <div className="absolute inset-0 z-0 bg-teal-400 opacity-40 rounded-lg"></div>
        <img
          src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Retro Shoe"
          className="relative z-10 inset-0 w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      {/* Form Section */}
      <form className="flex-auto pl-6 space-y-4">
        {/* Product Info */}
        <div className="relative pb-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Retro Shoe</h1>
          <div className="text-lg text-teal-600">₹89.00</div>
          <div className="uppercase text-teal-400 text-sm">In stock</div>
        </div>

        {/* Size Selection */}
        <div className="flex items-center space-x-3 text-sm font-medium">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <label key={size}>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value={size}
                defaultChecked={size === "XS"}
              />
              <div className="relative w-10 h-10 flex items-center justify-center text-black bg-white border border-gray-300 rounded-full cursor-pointer peer-checked:bg-teal-400 peer-checked:text-white peer-checked:border-teal-600 hover:bg-teal-100 hover:text-teal-600 transition-colors duration-200">
                {size}
              </div>
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 text-sm font-medium">
          <button
            className="w-full h-12 text-white bg-teal-400 rounded-lg shadow-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 transition-all"
            type="submit"
          >
            Buy Now
          </button>
          <button
            className="w-full h-12 text-teal-600 bg-white border-2 border-teal-400 rounded-lg shadow-sm hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 transition-all"
            type="button"
          >
            Add to Bag
          </button>
        </div>

        {/* Like Button */}
        <div className="flex justify-end">
          <button
            className="flex items-center justify-center w-12 h-12 text-teal-600 bg-teal-100 rounded-full hover:bg-teal-200 transition-colors duration-200"
            type="button"
            aria-label="Like"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
              className="transition-transform transform hover:scale-110"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>

        {/* Shipping Info */}
        <p className="text-xs text-gray-500 mt-4">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  );
};

export default CardFour;
