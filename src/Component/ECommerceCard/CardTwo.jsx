const CardTwo = () => {
  return (
    <div className="flex font-sans bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl mx-auto">
      {/* Image Section */}
      <div className="flex-none w-56 relative">
        <img
          src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Kids Jumpsuit"
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>

      {/* Details Section */}
      <form className="flex-auto p-6">
        {/* Header */}
        <div className="flex flex-wrap items-baseline">
          <h1 className="flex-auto font-semibold text-lg text-gray-900">
            Kids Jumpsuit
          </h1>
          <div className="text-3xl font-bold text-violet-600">₹39.00</div>
          <div className="w-full flex-none text-sm font-medium text-gray-500 mt-1">
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
                <div className="w-9 h-9 flex items-center justify-center border rounded-full cursor-pointer text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white peer-checked:border-violet-600 hover:bg-violet-100">
                  {size}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          <button
            className="h-10 px-6 font-semibold text-white bg-violet-600 rounded-full shadow-md hover:bg-violet-700 focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
            type="submit"
          >
            Buy Now
          </button>
          <button
            className="h-10 px-6 font-semibold text-gray-800 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            type="button"
          >
            Add to Bag
          </button>
          <button
            className="flex items-center justify-center w-9 h-9 text-violet-600 bg-violet-100 rounded-full hover:bg-violet-200"
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

        {/* Footer Note */}
        <p className="mt-4 text-sm text-gray-500">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  );
};

export default CardTwo;
