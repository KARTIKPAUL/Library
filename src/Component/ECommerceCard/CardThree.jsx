const CardThree = () => {
  return (
    <div className="flex font-serif bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl mx-auto">
      {/* Image Section */}
      <div className="flex-none w-52 relative">
        <img
          src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="DogTooth Style Jacket"
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      {/* Details Section */}
      <form className="flex-auto p-6">
        {/* Header */}
        <div className="flex flex-wrap items-baseline">
          <h1 className="w-full flex-none mb-3 text-2xl font-bold text-gray-900">
            DogTooth Style Jacket
          </h1>
          <div className="flex-auto text-lg font-medium text-gray-600">
            ₹350.00
          </div>
          <div className="text-sm uppercase font-semibold text-gray-500">
            In stock
          </div>
        </div>

        {/* Size Selector */}
        <div className="mt-4">
          <div className="text-sm font-semibold text-gray-700 mb-2">
            Select Size:
          </div>
          <div className="flex space-x-2">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <label key={size}>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value={size}
                  defaultChecked={size === "XS"}
                />
                <div className="w-9 h-9 flex items-center justify-center border rounded-full cursor-pointer text-gray-500 peer-checked:bg-gray-900 peer-checked:text-white peer-checked:border-gray-900 hover:bg-gray-100">
                  {size}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          <button
            className="w-full h-12 font-medium text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 uppercase tracking-wide"
            type="submit"
          >
            Buy Now
          </button>
          <button
            className="w-full h-12 font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 uppercase tracking-wide"
            type="button"
          >
            Add to Bag
          </button>
          <button
            className="flex items-center justify-center w-12 h-12 text-gray-400 bg-gray-50 rounded-full hover:text-gray-600 hover:bg-gray-100"
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

        {/* Footer */}
        <p className="mt-4 text-sm text-gray-500">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  );
};

export default CardThree;
