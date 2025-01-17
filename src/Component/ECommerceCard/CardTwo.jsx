const CardTwo = () => {
  return (
    <>
      <div ClassName="flex font-sans w-1/2">
        <div ClassName="flex-none w-56 relative">
          <img
            src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            ClassName="absolute inset-0 w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <form ClassName="flex-auto p-6">
          <div ClassName="flex flex-wrap">
            <h1 ClassName="flex-auto font-medium text-slate-900">Kids Jumpsuit</h1>
            <div ClassName="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
            ₹39.00
            </div>
            <div ClassName="text-sm font-medium text-slate-400">In stock</div>
          </div>
          <div ClassName="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div ClassName="space-x-2 flex text-sm font-bold">
              <label>
                <input
                  ClassName="sr-only peer"
                  name="size"
                  type="radio"
                  value="xs"
                  checked
                />
                <div ClassName="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                  XS
                </div>
              </label>
              <label>
                <input
                  ClassName="sr-only peer"
                  name="size"
                  type="radio"
                  value="s"
                />
                <div ClassName="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                  S
                </div>
              </label>
              <label>
                <input
                  ClassName="sr-only peer"
                  name="size"
                  type="radio"
                  value="m"
                />
                <div ClassName="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                  M
                </div>
              </label>
              <label>
                <input
                  ClassName="sr-only peer"
                  name="size"
                  type="radio"
                  value="l"
                />
                <div ClassName="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                  L
                </div>
              </label>
              <label>
                <input
                  ClassName="sr-only peer"
                  name="size"
                  type="radio"
                  value="xl"
                />
                <div ClassName="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                  XL
                </div>
              </label>
            </div>
          </div>
          <div ClassName="flex space-x-4 mb-5 text-sm font-medium">
            <div ClassName="flex-auto flex space-x-4">
              <button
                ClassName="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                ClassName="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900"
                type="button"
              >
                Add to bag
              </button>
            </div>
            <button
              ClassName="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50"
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p ClassName="text-sm text-slate-500">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </>
  );
};

export default CardTwo;
