const CardOne = () => {
  return (
    <div className="flex font-sans bg-white shadow-lg rounded-lg overflow-hidden max-w-xl mx-auto">
      {/* Image Section */}
      <div className="flex-none w-48 relative">
        <img
          src="https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Utility Jacket"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Details Section */}
      <form className="flex-auto p-6 bg-gray-50">
        {/* Header */}
        <div className="flex flex-wrap items-baseline">
          <h1 className="flex-auto text-lg font-bold text-gray-900">
            Classic Utility Jacket
          </h1>
          <div className="text-lg font-bold text-green-600">₹110.00</div>
          <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
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
                <div className="w-9 h-9 flex items-center justify-center border rounded-lg cursor-pointer text-gray-700 peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:bg-gray-100">
                  {size}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          <button
            className="h-10 px-6 font-semibold text-white bg-black rounded-md hover:bg-gray-800"
            type="submit"
          >
            Buy Now
          </button>
          <button
            className="h-10 px-6 font-semibold text-black border border-gray-300 rounded-md hover:bg-gray-100"
            type="button"
          >
            Add to Bag
          </button>
        </div>

        {/* Wishlist Button */}
        <button
          className="flex items-center justify-center w-9 h-9 mt-4 text-gray-400 border border-gray-300 rounded-md hover:text-red-500 hover:border-red-500"
          type="button"
          aria-label="Like"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
            className="transition-transform hover:scale-110"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </button>

        {/* Footer Note */}
        <p className="mt-4 text-sm text-gray-500">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  );
};

export default CardOne;
